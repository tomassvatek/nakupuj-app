import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { memo, useState } from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { AlgoliaProvider } from 'leaflet-geosearch';
import { SearchControl } from './SearchControl';
import 'leaflet-geosearch/dist/geosearch.css';
import { ErrorMessage, useFormikContext } from 'formik';
import { FormControl, FormErrorMessage } from '@chakra-ui/react';

const provider = new AlgoliaProvider();

function Map() {
  const [map, setMap] = useState(null);
  const { setFieldValue } = useFormikContext();

  const handleSelect = (value: string) => {
    setFieldValue('gps', value);
  }

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">Adresa</Text>
      {map && (
        <SearchControl
          map={map}
          provider={provider}
          autoClose={true}
          setFieldValue={setFieldValue}
          showPopup={false}
          draggable
          handleSelect={handleSelect}
        >
        </SearchControl>
      )}
      <ErrorMessage name="gps">{msg => <FormControl isInvalid><FormErrorMessage>{msg}</FormErrorMessage></FormControl>}</ErrorMessage>

      <MapContainer whenCreated={(a) => setMap(a as any)} center={[50.081587, 14.42717]} zoom={11} scrollWheelZoom={false} style={{ height: 400, width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </Box>
  )
}

export default memo(Map);