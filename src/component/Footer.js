import React from 'react';

const Footer = () =>{
  return(
    <footer id="foot" className="py-4 border-top bg-dark text-white ">
      <ul className="sosial d-flex justify-content-center">
        <li className="px-5 "><a href="https://www.instagram.com/noeul__film/">Instagram</a></li>
        <li className="px-5"><a href="">Kakao</a></li>
      </ul>
      <div className="b-line d-flex justify-content-center">

      </div>
      <ul className="lk d-flex justify-content-center row">
        <li className='d-flex justify-content-center col-md-6'><a href="">git</a></li>
        <li className=' col-md-6'><a href="">notion</a></li>
        <li className=' col-md-12'><a href="">다른 포트폴리오가 보고 싶으시다면 클릭</a></li>
      </ul>
    </footer>
  )
}


export default Footer;