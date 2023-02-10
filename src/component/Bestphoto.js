import swiperDBlink from '../json/swiperinfo.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


const Bestphoto = (props) => {
  const swiperinfo = swiperDBlink[props.objnm];
  return (
    <section className="section text-center" id={props.contentid}>
      <h3 data-aos="fade-down" data-aos-duration="2000" className={props.title =='no' ? 'd-none':'swiper_h3'}>{props.title}</h3>
      <p data-aos="fade-up" data-aos-duration="2000" className={props.title =='no' ? 'd-none':'swiper_p'}>{props.subtitle}</p>
      <Swiper data-aos="zoom-in" data-aos-duration="2000" className='workSection'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
        breakpoints={{
          768: {
            slidesPerView: 1
          },
          1024: {
            slidesPerView: 4
          }
        }}
        centeredSlides={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}

        onSlideChange={() => {
          //슬라이드가 끝나고 실행
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          swiperinfo.map((item, index) => {
            return (
              <SwiperSlide  className={item.cls} key={'sw' + index} style={{ backgroundImage: item.bg }}>{item.worktitle}</SwiperSlide>
            )
          }
          )
        }
      </Swiper>
    </section>
  )
}

export default Bestphoto;