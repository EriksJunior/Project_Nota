import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardRef } from './styles';
import { RefTable } from './TableREF';


export function RefFiscal() {
  return (
    <CardRef>
      <Card.Header style={{ background: "#696969", fontSize: "22px", fontWeight: "bold", color: "white" }}>REF's cadastradas</Card.Header>
      <Card.Body>
        <RefTable/>
      </Card.Body>
    </CardRef>
  );
}