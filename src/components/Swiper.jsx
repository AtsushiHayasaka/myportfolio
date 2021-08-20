import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import work_connect_hearts from '../images/work_connect_hearts.jpg'
import work_daytora_final from '../images/work_daytora_final.jpg'
import work_daytora2nd from '../images/work_daytora2nd.jpg'

SwiperCore.use([Pagination]);

const ImageSwiper = ({content}) => {
  console.log(content)
  return (
      <SwiperSlide className="works__item swiper__slide">
        <img className="works__image"  src={content.img2} />
      </SwiperSlide>
  )
};
export default ImageSwiper;

