import Carousel from 'react-bootstrap/Carousel';
import img from '../logo.svg'
import './Parte2.css';
function Parte2() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <img src='https://protein-shop-tunisia.tn/wp-content/uploads/2020/02/optimum-nutrition.jpg' className='img2'></img>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://www.sixstarpro.com/cdn/shop/articles/press-release-pre-workout-explosion-2.0.jpg?v=1686062580' className='img2'></img>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://www.animalpak.com/cdn/shop/files/Pump_NewLook_2000x2000_8dfdfa2c-025a-4328-acea-1bb463a4381e_1200x1200.jpg?v=1697528206' className='img2'></img>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Parte2;