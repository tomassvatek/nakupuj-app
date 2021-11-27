import { SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';
import { products } from '../constants';
import { IProduct } from '../types';
import Slider from './Slider';

interface ProductSliderProps {
  category?: number,
  onlyNew?: boolean
}

const ProductSlider = (props: ProductSliderProps) => {

  let filteredProducts: IProduct[];
  if (props.category) {
    filteredProducts = products.filter(function (product: IProduct) { return product.category.id == props.category });
  } else {
    filteredProducts = products;
  }

  if (props.onlyNew) {
    filteredProducts = filteredProducts.filter(function (product: IProduct) { return product.isNew });
  }

  return (
    <Slider>
      {filteredProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default ProductSlider;