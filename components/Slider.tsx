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
      slidesPerView={1}
      scrollbar={{ draggable: true, hide: true }}
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
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;