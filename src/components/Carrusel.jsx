import Carousel from 'react-bootstrap/Carousel';
import b1 from '../assets/banner/b1.webp';
import b2 from '../assets/banner/b2.webp';
import b3 from '../assets/banner/b3.webp';
import b4 from '../assets/banner/b4.webp';

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={b1} alt="banner1"  className="d-block w-100" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={b2} alt="banner1"  className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={b3} alt="banner1"  className="d-block w-100" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={b4} alt="banner1"  className="d-block w-100" />
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel