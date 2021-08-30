import React from 'react';
import {Link} from 'react-router-dom';
import workContents from '../contents'


const Works = () => {
  
  return(
    <>
      <div className="sub-page__title_area">
        <p className="sub-page__title page-about__title wow fadeIn">Works</p>
      </div>
      <section className="sub-works">
        <div className="container">
        <div className="sub-works__contents sub-works_display_grid">
          {workContents.map((work, index) => {
            return(
                <div key={index}  className="sub-works__image-area wow fadeInUp">
                  <Link to={`/work/${work.id}`} onClick={() => window.scrollTo(0, 0)}>
                    <img className="sub-works__image" src={work.img1} alt=""/>
                  </Link>
                </div>
            )
          })}
        </div>
        <div className="unpublished-work-area">
          <p className="unpublished-work">この他非公開実績が１件あります</p>
        </div>
          
        </div>
      </section>
    </>
  )
}

export default Works;