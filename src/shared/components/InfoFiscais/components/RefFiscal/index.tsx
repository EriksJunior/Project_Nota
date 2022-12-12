import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardRef } from './styles';
import { RefTable } from './TableREF';


export function RefFiscal() {
  return (
    <CardRef>
      <Card.Header style={{ background: "#A9A9A9", fontSize: "22px", fontWeight: "bold", color: "black" }}>REF's cadastradas</Card.Header>
      <Card.Body>
        <RefTable/>
      </Card.Body>
    </CardRef>
  );
}