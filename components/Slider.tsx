import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import ProductCard from './ProductCard';
import { products } from '../constants';

const Slider = ({ ...props }: Swiper) => {
  return (
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={10}
      slidesPerView={5}
      scrollbar={{ draggable: true, hide: true }}
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