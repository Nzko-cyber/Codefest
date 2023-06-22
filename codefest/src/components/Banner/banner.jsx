import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/Banner/banner.png'
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Orginal avtomoy 15% foiz chegirma </h3>
          <p> Barcha chegirmalar 1 avgustgacha davom etadi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Orginal avtomoy 15% foiz chegirma </h3>
          <p> Barcha chegirmalar 1 avgustgacha davom etadi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Orginal avtomoy 15% foiz chegirma </h3>
          <p> Barcha chegirmalar 1 avgustgacha davom etadi</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;