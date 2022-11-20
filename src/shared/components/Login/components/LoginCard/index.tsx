import { useCallback, useState } from 'react';
import { ILogin } from '../../../../../interface/ILogin'
import { FloatingLabel, Form, Card, Button } from 'react-bootstrap';
import { ButtonLogin, CardStyled } from './styles';


export function CardGeneral() {

  const [login , setLogin] = useState<ILogin>();

  // const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  //   setLogin({ ...login, [e.target.email]: e.target.value })
  // }, [login]);
  return (
    <CardStyled >
      <Card.Header style={{ background: "#4B0082" , fontSize: "30px", width: "100%", display: "flex", justifyContent: "center" , fontWeight:"bold" }}>
        Web Fiscale
        </Card.Header>
      <Card.Body style={{ width:"100%" }}>
        <Card.Title className='mb-4' style={{ fontSize: "24px", display: "flex", justifyContent: "center" }}>Faça seu Login!!</Card.Title>
        <Card.Text style={{  width: "100%", display: "flex", justifyContent: "center" , fontWeight:"bold" }}>
          Pronto para começar de forma fácil <br />
          e rapida a emissão da sua nota fiscal ?
        </Card.Text>
        <Form style={{ marginTop:"3rem" , color: "white", justifyContent: "center" }} >
          <FloatingLabel  label="Digite seu Email" className="mb-4">
            <Form.Control style={{ background: "#363636", color:"white" }} type="email" name="email"/>
          </FloatingLabel>
          <FloatingLabel style={{ marginTop:"3rem", width: "100%" }} label="Senha" className="mb-4">
            <Form.Control style={{ background: "#363636" , color:"white" }} type="password" name="password"/>
          </FloatingLabel>
          <div style={{ marginTop:"4rem" }} className="d-grid">
            <ButtonLogin className="mb-4" variant="" size="lg">
              Entrar
            </ButtonLogin>
          </div>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <a href="http://localhost:3001/">Não é cadastrado ? Clique aqui</a>
          </div>
        </Form>
      </Card.Body>
    </CardStyled>
  );
}
