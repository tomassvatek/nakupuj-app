import { InputControl } from 'formik-chakra-ui';
import * as L from 'leaflet';
import { ControlPosition, FeatureGroup, MarkerOptions, Map } from 'leaflet';
import React from 'react';
// @ts-ignore
import debounce from 'lodash.debounce';
import { Flex, HStack } from '@chakra-ui/layout';
import { Menu, MenuList } from '@chakra-ui/menu';
import StyledMenuItem from './StyledMenuItem';

// Keys
export const ENTER_KEY = 13;
export const ESCAPE_KEY = 27;
export const ARROW_DOWN_KEY = 40;
export const ARROW_UP_KEY = 38;
export const ARROW_LEFT_KEY = 37;
export const ARROW_RIGHT_KEY = 39;

export const SPECIAL_KEYS = [
  ENTER_KEY,
  ESCAPE_KEY,
  ARROW_DOWN_KEY,
  ARROW_UP_KEY,
  ARROW_LEFT_KEY,
  ARROW_RIGHT_KEY,
];

const defaultOptions: Record<string, any> = {
  position: 'topleft',
  style: 'button',
  showMarker: true,
  showPopup: false,
  popupFormat: ({ result }: any) => `${result.label}`,
  resultFormat: ({ result }: any) => `${result.label}`,
  marker: {
    icon: L && L.Icon ? new L.Icon.Default({ imagePath: '/leaflet/' }) : undefined,
    draggable: true,
  },
  maxMarkers: 1,
  maxSuggestions: 5,
  retainZoomLevel: false,
  animateZoom: true,
  searchLabel: 'Enter address',
  notFoundMessage: '',
  messageHideDelay: 3000,
  zoomLevel: 18,
  classNames: {
    container: 'leaflet-bar leaflet-control leaflet-control-geosearch',
    button: 'leaflet-bar-part leaflet-bar-part-single',
    resetButton: 'reset',
    msgbox: 'leaflet-bar message',
    form: '',
    input: '',
    resultlist: '',
    item: '',
    notfound: 'leaflet-bar-notfound',
  },
  autoComplete: true,
  autoCompleteDelay: 250,
  autoClose: false,
  keepResult: false,
  updateMap: true,
};

type Provider = any;
type SearchResult<T = any> = any;

const UNINITIALIZED_ERR =
  'Leaflet must be loaded before instantiating the GeoSearch control';

interface ISearchControlProps {
  setFieldValue: any;
  map: any;
  handleSelect: any;

  /** the provider to use for searching */
  provider: Provider;
  /** the leaflet position to render the element in */
  position: ControlPosition;
  /**
   * the stye of the search element
   * @default bar
   **/
  style: 'button' | 'bar';

  marker: MarkerOptions;
  maxMarkers: number;
  showMarker: boolean;
  showPopup: boolean;
  popupFormat<T = any>(args: {
    query: Selection;
    result: SearchResult<T>;
  }): string;

  resultFormat<T = any>(args: { result: SearchResult<T> }): string;

  searchLabel: string;
  notFoundMessage: string;
  messageHideDelay: number;

  animateZoom: boolean;
  zoomLevel: number;
  retainZoomLevel: boolean;

  classNames: {
    container: string;
    button: string;
    resetButton: string;
    msgbox: string;
    form: string;
    input: string;
    resultlist: string;
    item: string;
    notfound: string;
  };

  autoComplete: boolean;
  autoCompleteDelay: number;
  maxSuggestions: number;
  autoClose: boolean;
  keepResult: boolean;
  updateMap: boolean;
}

export type ISearchControlOptions = Partial<ISearchControlProps> & {
  provider: Provider;
};

interface Selection {
  query: string;
  data?: SearchResult;
}

interface State {
  results: any[];
  selectedIndex: number;
  isOpen: boolean;
};

// @ts-ignore
export class SearchControl extends React.Component<ISearchControlOptions, State> {

  static defaultProps = defaultOptions;

  markers: FeatureGroup;
  map!: Map;

  constructor(props: ISearchControlOptions) {
    super(props);

    if (!L) {
      throw new Error(UNINITIALIZED_ERR);
    }

    this.markers = new L.FeatureGroup();

    this.state = {
      results: [],
      selectedIndex: -1,
      isOpen: false,
    }
  }

  componentDidMount() {
    const { showMarker, style } = this.props;

    this.map = this.props.map;

    if (showMarker) {
      this.markers.addTo(this.map);
    }

    this.map.on('click', (e: any) => {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      const value = `${lat},${lng}`;
      this.props.handleSelect(value);

      const result = { x: lng, y: lat };
      const marker = this.addMarker(result);

      if (this.props.updateMap) {
        this.centerMap(result);
      }

      this.props.map.fireEvent('geosearch/showlocation', {
        location: result,
        marker,
      });
    });
  }

  handleChange = debounce((e: KeyboardEvent) => this.autoSearch(e), this.props.autoCompleteDelay)

  selectResult(event: React.KeyboardEvent) {
    if (
      [ENTER_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY].indexOf(event.keyCode) === -1
    ) {
      return;
    }

    event.preventDefault();

    if (event.keyCode === ENTER_KEY) {
      const selectedIndex = this.state.selectedIndex;
      const item = this.state.results[selectedIndex];
      this.onSubmit({ query: item.label, data: item });
      return;
    }

    const max = this.state.results.length - 1;

    if (max < 0) {
      return;
    }

    const selectedIndex = this.state.selectedIndex;
    const next = event.keyCode === ARROW_DOWN_KEY ? selectedIndex + 1 : selectedIndex - 1;
    const idx = next < 0 ? max : next > max ? 0 : next;

    this.setState({
      selectedIndex: idx,
      isOpen: true,
    })

    const item = this.state.results[idx];
    this.props.setFieldValue('deliveryAddress', item.label);
  }

  clearResults(event?: React.KeyboardEvent, force = false) {
    if (event && event.keyCode !== ESCAPE_KEY) {
      return;
    }

    const { keepResult, autoComplete } = this.props;

    if (force || !keepResult) {
      this.props.setFieldValue('deliveryAddress', '');
      this.markers.clearLayers();
    }

    if (autoComplete) {
      this.setState({
        results: [],
      });
    }
  }

  async autoSearch(event: KeyboardEvent) {
    if (SPECIAL_KEYS.indexOf(event.keyCode) > -1) {
      return;
    }

    const query = (event.target as HTMLInputElement).value;
    const { provider } = this.props;

    try {
      if (query.length) {
        let results = await provider!.search({ query });
        results = results.slice(0, this.props.maxSuggestions);

        this.setState({
          results,
          isOpen: true,
          selectedIndex: 0,
        });
      } else {
        this.setState({
          results: [],
          isOpen: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async onSubmit(query: Selection) {
    const { provider } = this.props;
    this.props.setFieldValue('deliveryAddress', query.query);

    try {
      const results = await provider!.search(query);

      if (results && results.length > 0) {
        this.showResult(results[0], query);
      }
    } catch (err) {
      console.log(err);
    }
  }

  showResult(result: SearchResult, query: Selection) {
    const { autoClose, updateMap } = this.props;

    const markers = this.markers.getLayers();
    if (markers.length >= (this.props.maxMarkers || 0)) {
      this.markers.removeLayer(markers[0]);
    }

    const marker = this.addMarker(result, query);

    if (updateMap) {
      this.centerMap(result);
    }

    this.props.map.fireEvent('geosearch/showlocation', {
      location: result,
      marker,
    });

    try {
      const { lat, lng } = result.raw._geoloc;
      const value = `${lat},${lng}`;
      this.props.handleSelect(value);
    } catch (err) {
      console.log(err);
    }

    if (autoClose) {
      this.closeResults();
    }
  }

  closeResults() {
    this.setState({
      isOpen: false,
    });
  }

  addMarker(result: SearchResult, query?: Selection) {
    this.markers.clearLayers();

    const { marker: options, showPopup, popupFormat } = this.props;
    const marker = new L.Marker([result.y, result.x], options);

    if (showPopup && query) {
      let popupLabel = result.label;
      if (typeof popupFormat === 'function') {
        popupLabel = popupFormat({ query, result });
      }

      marker.bindPopup(popupLabel);
    }

    this.markers.addLayer(marker);

    if (showPopup) {
      marker.openPopup();
    }

    if (options && options.draggable) {
      marker.on('dragend', (args) => {
        this.props.map.fireEvent('geosearch/marker/dragend', {
          location: marker.getLatLng(),
          event: args,
        });
      });
    }

    return marker;
  }

  centerMap(result: SearchResult) {
    const { retainZoomLevel, animateZoom } = this.props;

    const resultBounds = result.bounds
      ? new L.LatLngBounds(result.bounds)
      : new L.LatLng(result.y, result.x).toBounds(10);

    const bounds = resultBounds.isValid()
      ? resultBounds
      : this.markers.getBounds();

    if (!retainZoomLevel && resultBounds.isValid() && !result.bounds) {
      this.props.map.setView(bounds.getCenter(), this.getZoom(), {
        animate: animateZoom,
      });
    } else if (!retainZoomLevel && resultBounds.isValid()) {
      this.props.map.fitBounds(bounds, { animate: animateZoom });
    } else {
      this.props.map.setView(bounds.getCenter(), this.getZoom(), {
        animate: animateZoom,
      });
    }
  }

  getZoom(): number {
    const { retainZoomLevel, zoomLevel } = this.props;
    return retainZoomLevel ? this.props.map.getZoom() : zoomLevel;
  }

  render() {
    const { selectedIndex, results, isOpen } = this.state;

    return (
      <HStack
        as={"nav"}
        spacing={4}
        display={{ base: "none", md: "flex" }}
        flex={1}
      >
        <Menu isOpen={isOpen} placement={"auto"} computePositionOnMount>

          <div style={{ position: 'relative', marginTop: 45 }}>
            {results.length ? (
              <MenuList zIndex="25550" >
                {results.map((result, index) => (
                  <StyledMenuItem bg={index === selectedIndex ? 'gray.200' : undefined} key={index} as={Flex} onClick={() => {
                    this.onSubmit({ query: result.label, data: result });
                  }}>
                    <strong>{result.label}</strong>
                  </StyledMenuItem>
                ))}
              </MenuList>
            ) : null}
          </div>
          <InputControl
            name="deliveryAddress"
            inputProps={{ placeholder: 'Doručovací adresa' }}
            size="md"
            style={{ margin: "0.5rem 0" }}
            onChange={this.handleChange}

            onKeyDown={(e: React.KeyboardEvent) => this.selectResult(e)}
            onKeyUp={(e: React.KeyboardEvent) => this.clearResults(e, true)}
          />
        </Menu>
      </HStack>
    );
  }
}
