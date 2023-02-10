import React, { useState } from 'react';
import Gallerycontent from './Gallerycontent';


function Gallery(props) {
  const [gallerypt, photoupdate] = useState(['웨딩', 'gallery_w']);
  const btnupdate = (e) => {
    e = e || window.event;
    const newphotonm = e.target.

      getAttribute('datasrc').split(',');
    photoupdate(newphotonm);
  }
  return (
    <section className="section text-center" id={props.contentid}>
      <h3 data-aos="fade-down" data-aos-duration="1500" className={props.title == 'no' ? 'd-none' : 'swiper_h3'}>{props.title}</h3>
      <p data-aos="fade-up" data-aos-duration="1500" className={props.title == 'no' ? 'd-none' : 'swiper_p'}>{props.subtitle}</p>
      <div className="d-flex justify-content-center" data-aos="zoom-in" data-aos-duration="2000">
        <button onClick={btnupdate} datasrc={['웨딩', 'gallery_w']}>웨딩스냅</button>
        <button onClick={btnupdate} className="btn1" datasrc={['커플', 'gallery_c']}>커플스냅</button>
        <button onClick={btnupdate} className="btn2" datasrc={['우정', 'gallery_f']}>우정스냅</button>
        <button onClick={btnupdate} className="btn3" datasrc={['개인', 'gallery_p']}>개인 프로필</button>
      </div>

      <Gallerycontent dbobjkey={gallerypt[0]} galleryId={gallerypt[1]}>
      </Gallerycontent>
    </section>
  );
}

export default Gallery;