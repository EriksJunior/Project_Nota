import { FloatingLabel, Form, Card, Button } from 'react-bootstrap';
import { CardStyled } from './styles';

export function CardGeneral() {
  return (
    <CardStyled >
      <Card.Header style={{ fontSize: "30px", width: "100%", display: "flex", justifyContent: "center" }}>
        Web Fiscale
        </Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: "24px", display: "flex", justifyContent: "center" }}>Faça seu Login!!</Card.Title>
        <Card.Text>
          Pronto para começar de forma fácil
          e rapida a emissão da sua nota fiscal ?
        </Card.Text>
        <Form style={{ marginTop: "30px", color: "white", justifyContent: "center" }} >
          <FloatingLabel  label="Digite seu Email" className="mb-4">
            <Form.Control style={{ background: "#363636", color:"white" }} type="email" />
          </FloatingLabel>
          <FloatingLabel style={{ marginTop:"50px" }} label="Senha" className="mb-4">
            <Form.Control style={{ background: "#363636" , color:"white" }} type="password" />
          </FloatingLabel>
          <div style={{ marginTop:"50px" , background: "#8A2BE2" }} className="d-grid">
            <Button variant="" size="lg">
              Entrar
            </Button>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <a href="http://localhost:3001/">Não é cadastrado ? Clique aqui</a>
          </div>
        </Form>
      </Card.Body>
    </CardStyled>
  );
}
