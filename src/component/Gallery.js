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
      <h3 data-aos="fade-right" className={props.title == 'no' ? 'd-none' : 'swiper_h3'}>GALLERY</h3>
      <p data-aos="fade-left" className={props.title == 'no' ? 'd-none' : 'swiper_p'}>노을필름의 다양한 사진들을 소개합니다.</p>
      <div className="d-flex justify-content-center">
        <button onClick={btnupdate} datasrc={['웨딩', 'gallery_w']} className="border-none !important">웨딩스냅</button>
        <button onClick={btnupdate} datasrc={['커플', 'gallery_c']}>커플스냅</button>
        <button onClick={btnupdate} datasrc={['우정', 'gallery_f']}>우정스냅</button>
        <button onClick={btnupdate} datasrc={['개인', 'gallery_p']}>개인 프로필</button>
      </div>

      <Gallerycontent dbobjkey={gallerypt[0]} galleryId={gallerypt[1]}>
      </Gallerycontent>



    </section>
  );
}

export default Gallery;