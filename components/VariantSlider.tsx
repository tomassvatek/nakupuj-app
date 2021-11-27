import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {IProductVariant} from '../types';
import 'swiper/css';
import 'swiper/css/navigation';
import VariantCard from "./VariantCard";

interface IProps {
    variants: IProductVariant[]
}

const VariantSlider = (props: IProps) => {

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
            {props.variants.map((variant) => (
                <SwiperSlide key={variant.id}>
                    <VariantCard variant={variant} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default VariantSlider;