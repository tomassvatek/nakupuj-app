import { SwiperSlide } from 'swiper/react';
import { IProductVariant } from '../types';
import VariantCard from './VariantCard';
import Slider from './Slider';

interface IProps {
    variants: IProductVariant[]
}

const VariantSlider = (props: IProps) => {
    return (
        <Slider>
            {props.variants.map((variant) => (
                <SwiperSlide key={variant.id}>
                    <VariantCard variant={variant} />
                </SwiperSlide>
            ))}
        </Slider>
    );
};

export default VariantSlider;