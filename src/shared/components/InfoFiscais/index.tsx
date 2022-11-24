import { Button, Form, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Search } from '../Search';
import { InfoFiscaisGlobal } from './components/InfoFiscaisGlobal';
import { CardSearch, CarouselStyled } from './styles';

export function ImpostoGlobal() {
  return (
    <CarouselStyled interval={9999999999999}>
      <Carousel.Item>
        <InfoFiscaisGlobal />
      </Carousel.Item>
      <Carousel.Item>
        {/* <div>
          <Search>
            <CardSearch>
              <Form.Control style={{ height: "48px" }} placeholder="Faça sua pesquisa" type="text" />
              <Button style={{ background: "black" }}>Pesquisar</Button>
            </CardSearch>
          </Search>
        </div> */}
      </Carousel.Item>
    </CarouselStyled>
  );
}
