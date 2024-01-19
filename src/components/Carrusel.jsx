import Carousel from 'react-bootstrap/Carousel';

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="banner/b1.webp" alt="banner1"  className="d-block w-100" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src="banner/b2.webp" alt="banner1"  className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="banner/b3.webp" alt="banner1"  className="d-block w-100" />
        
      </Carousel.Item>
    </Carousel>
  )
}

export default Carrusel