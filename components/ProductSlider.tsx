import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from './ProductCard';
import { products } from '../constants';
import { IProduct } from '../types';
import 'swiper/css';
import 'swiper/css/navigation';
import { Box } from '@chakra-ui/layout';

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
    <Swiper
      className="swiper"
      modules={[Navigation]}
      spaceBetween={10}
      slidesPerView={1}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 10
        },
        1280: {
          slidesPerView: 6,
          spaceBetween: 12
        },
        1920: {
          slidesPerView: 8,
          spaceBetween: 15
        }
      }}
    >
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      {filteredProducts.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;