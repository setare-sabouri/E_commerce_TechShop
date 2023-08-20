import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
      className="md:w-70 xs:w-60 lg:w-70 h-auto  flex items-center justify-center"
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src='./images/slider.png' /></SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default Slider;
