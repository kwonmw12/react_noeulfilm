import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Header from './component/Header';
import Mainswiper from './component/Mainswiper';
import Bestphoto from './component/Bestphoto';
import Gallery from './component/Gallery';
import Mdpick from './component/Mdpick';
import Review from './component/Review';
import Reservation from './component/Reservation';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App" id='top'>
      <Header></Header>
      <Mainswiper contentid="mainbanner" objnm="mainsection"></Mainswiper>
      <Bestphoto></Bestphoto>
      <Gallery></Gallery>
      <Mdpick></Mdpick>
      <Review></Review>
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  );
}

export default App;
