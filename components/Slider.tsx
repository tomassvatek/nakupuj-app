import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './ProductCard';
import { products } from '../constants';

const Slider = ({ ...props }: Swiper) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;