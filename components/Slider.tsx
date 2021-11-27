import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider: React.FC = ({ children }) => {
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
                    slidesPerView: 5,
                    spaceBetween: 12
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 15
                }
            }}
        >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            {children}
        </Swiper>
    );
};

export default Slider;