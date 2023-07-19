import React from 'react';
import { useNavigate } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/carousel.css';

// import required modules
import { 
  EffectCoverflow, Keyboard, 
  Pagination, Navigation
} from 'swiper/modules';

import stepItUp from '../stepItUp';
import shareAByte from '../shareAByte';
import gifMeMarvel from '../gifMeMarvel';

export default function Carousel() {

  const navigate = useNavigate();
  const openProject = ({project}) => navigate("/portfolio/project", project);

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={`${stepItUp[0].original}`} alt={`${stepItUp[0].originalTitle}`} onClick={openProject(stepItUp)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${shareAByte[0].original}`} alt={`${shareAByte[0].originalTitle}`} onClick={openProject(shareAByte)} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${gifMeMarvel[0].original}`} alt={`${gifMeMarvel[0].originalTitle}`} onClick={openProject(gifMeMarvel)} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
