import Carousel from 'react-bootstrap/Carousel';
import { CarouselStyled } from './styles';

export function LoginCarrousel() {
  return (
    <CarouselStyled>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/seed/picsum/800/600"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>O Melhor emissor de nota fiscal</h2>
          <p>Uma solução gratuita para seu negocio!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/600"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>O Melhor emissor de nota fiscal</h2>
          <p>Uma solução gratuita para seu negocio!!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/800/600"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>O Melhor emissor de nota fiscal</h2>
          <p>Uma solução gratuita para seu negocio!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </CarouselStyled>
  );
}
