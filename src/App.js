import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Scrolltop from './component/Scrolltop';
import Header from './component/Header';
import Mainswiper from './component/Mainswiper';
import Bestphoto from './component/Bestphoto';
import Gallery from './component/Gallery';
import Mdpick from './component/Mdpick';
import Review from './component/Review';
import Reservation from './component/Reservation';
import Qna from './component/Qna';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App" id='top'>
      <Scrolltop></Scrolltop>
      <Header></Header>
      
      <Mainswiper contentid="mainbanner" objnm="mainsection"></Mainswiper>

      <Gallery contentid="gallery" objnm="bestphoto" title="GALLERY" subtitle="노을필름의 다양한 사진들을 소개합니다"></Gallery>

      <Bestphoto contentid="bestphoto" objnm="bestphoto" title="BEST PHOTO" subtitle="노을필름에서 가장 인기있는 사진을 소개합니다"></Bestphoto>
      
      
      <Mdpick contentid="mdpick" objnm="md_pick" title="MD PICK" subtitle="노을필름의 작가님이 적극 추천하는 상품"></Mdpick>
      
      <Review contentid="review" objnm="review" title="REVIEW" subtitle="노을필름을 이용해주신 고객님들의 리뷰입니다"></Review>
      
      <Reservation contentid="reservation" objnm="reservation" title="RESERVATION" subtitle="작가프로필 & 촬영예약"></Reservation>
      
      <Qna contentid="qna" objnm="qna" title="QnA" subtitle="자주 질문하시는 질문"></Qna>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
