import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardRef } from './styles';


export function RefFiscal() {
  return (
    <CardRef>
      <Card.Header style={{ background:"#8A2BE2" , fontSize:"22px" , fontWeight:"bold" , color: "white" }}>REF's cadastradas</Card.Header>
      <Card.Body>
        <h6>
          refs
        </h6>
     </Card.Body>
    </CardRef>
  );
}