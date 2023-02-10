import React, { useState } from 'react';
import Rescontent from './Rescontent';

function Reservation(props) {
  const [resprofill, photoupdate] = useState(['작가프로필', 'respf']);
  const btnupdate = (e) => {
    e = e || window.event;
    const newphotonm = e.target.

      getAttribute('datasrc').split(',');
    photoupdate(newphotonm);
  }
  return (
    <section className="section text-center" id={props.contentid}>
      <h3 data-aos="fade-down" data-aos-duration="2000" className={props.title == 'no' ? 'd-none' : 'swiper_h3'}>{props.title}</h3>
      <p data-aos="fade-up" data-aos-duration="2000" className={props.title == 'no' ? 'd-none' : 'swiper_p'}>{props.subtitle}</p>
      <div className="d-flex justify-content-center">
        <button onClick={btnupdate} datasrc={['작가프로필', 'respf']}>작가 프로필</button>
        <button onClick={btnupdate} className="btn1" datasrc={['예약문의', 'res']}>예약문의</button>
        
      </div>

      <Rescontent dbobjkey={resprofill[0]} galleryId={resprofill[1]}>
      </Rescontent>
    </section>
  );
}

export default Reservation;