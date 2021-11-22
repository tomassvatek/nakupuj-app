import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import ProductCard from './ProductCard';
import { products } from '../constants';
import { IProduct } from '../types';
import 'swiper/css';
import 'swiper/css/navigation';

interface ProductSliderProps {
  category?: number,
  onlyNew?: boolean
}

const ProductSlider = (props: ProductSliderProps) => {

  let filteredProducts: IProduct[];
  if (props.category) {
    filteredProducts = products.filter(function(product: IProduct) { return product.category.id == props.category });
  } else {
    filteredProducts = products;
  }

  if (props.onlyNew) {
    filteredProducts = filteredProducts.filter(function(product: IProduct) { return product.isNew });
  }

  return (
    <Swiper
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
          spaceBetween: 10
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 30
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