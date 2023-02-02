import swiperDBlink from '../json/swiperinfo.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";

import maincss from '../css/main.module.css'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mainswiper = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  })
  const swiperinfo = swiperDBlink[props.objnm];
  return (
    
      <section className="section text-center" id={props.contentid}>
      <Swiper className='workSection'
        modules={[Navigation, Pagination, A11y, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 1.3
          }
        }}
        centeredSlides={true}
        autoplay={{
          delay: 300011,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}

        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          swiperinfo.map((item, index) => {
            return (
              <SwiperSlide className={item.cls} key={'sw' + index} style={{ backgroundImage: item.bg }}>{item.worktitle}</SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Mainswiper;