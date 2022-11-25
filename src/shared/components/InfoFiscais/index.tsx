import Carousel from 'react-bootstrap/Carousel';
import { InfoFiscaisGlobal } from './components/InfoFiscaisGlobal';
import { CarouselStyled } from './styles';

export function ImpostoGlobal() {
  return (
    <CarouselStyled interval={9999999999999}>
      <Carousel.Item>
        <InfoFiscaisGlobal />
      </Carousel.Item>
      
      <Carousel.Item>
      </Carousel.Item>
    </CarouselStyled>
  );
}
