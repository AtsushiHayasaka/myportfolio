import React from 'react';
import {Link} from 'react-router-dom';
import about_image from '../images/about-image.jpeg';
import  ImageSwiper  from './Swiper';
import WorkContents from '../contents'
import  { Swiper, SwiperSlide }  from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import thumbnail_daytora_final from '/Users/hayasakaatsushi/myportfolio/src/images/works_thumbnail_daytora-final.jpg';



const Home = () => {

  const params = {
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
    <>
    <div className="first-view">
      <div className='container'>
        <div className="first-view__title first-view__title_position">
          <p className="first-view__name first-view__name_font">ATSUSHI</p>
          <p className="first-view__name first-view_mt first-view__name_font">HAYASAKA</p>
          <p className="first-view__job first-view__job_font first-view_mt">web creator</p>
          <p className="first-view__description first-view__description_font first-view__description_mt">
            ホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲ<br />
            ホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲホゲ
          </p>
        </div>
        <div className="first-view__bg"></div>
      </div>
    </div>

    <section className="about">
      <div className="container  about_flex">
        <div className="about__image-area">
          <img className="about__image" src={about_image} alt=""/>
        </div>
        <div className="about__texts-area">
          <h2 className="section__title about__title">About</h2>
          <p className="about__description  about__description_mt">
          北海道出身のおしゃべり好きな24歳。<br/>
          いきなり自転車に荷物を詰め込み2ヶ月ほど出掛けるなど、旅好きな一面を持つ。<br/>
          2020年12月からプログラミングの独学を始め、面白さを知り、のめり込んでいく。<br/>
          現在はクリエイターシェアハウスに住み、フリーランスとして活動しながら、自分の技術を磨いている。
          </p>
          <button className="button about__button_position"><Link className="button__link" to="/about">View more</Link></button>
        </div>
      </div>
    </section>
    <section className="skills">
      <div className="container">
        <h2 className="section__title skills__title">Skills</h2>
        <ul className="skills__lists skills__lists_position">
          <li className="skills__list skills__list_position skill__list_font_bold">-　HTML/CSS</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　JavaScript</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　SASS</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　PHP</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　WordPress</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　Git</li>
          <li className="skills__list skills__list_position skill__list_font_bold">-　React</li>
        </ul>
      </div>
    </section>

    <section className="works">
      <div className="container">
        <h2 className="section__title works__title">Works</h2>
        <Swiper {...params}>
          {WorkContents.map((Content,index) => (
            <SwiperSlide key={index} className="works__item swiper__slide">
              <img className="works__image"  src={Content.img2} />
            </SwiperSlide>
            // <ImageSwiper key={index}  content={Content}/>
          ))}
        </Swiper>
      </div>

    </section>
    
    </>
  )
}

export default Home;