import React from 'react';
import {Link} from 'react-router-dom';
import SwiperCore, { Pagination,Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import workContents from '../contents'


SwiperCore.use([Pagination, Navigation]);

const ImageSwiper = () => {

  const params = 
  window.innerWidth <= 600
   ? {
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    :{
        centeredSlides: true,
        spaceBetween: 65,
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
  

  return (
    <Swiper {...params} >
      {workContents.map((work_img, index) => {
        return (
        <SwiperSlide className="works__item swiper__slide" key={index}>
          <Link to={`work/${work_img.id}`} onClick={() => window.scrollTo(0, 0)}>
            <img className="works__image"  src={work_img.img2} />
          </Link>
        </SwiperSlide>

        )
      })}

      {
        window.innerWidth <= 600 || 
        <>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </>
      }
      
      <div className="swiper-pagination"></div>
    
    </Swiper>
  )
};
export default ImageSwiper;

