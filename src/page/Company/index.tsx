import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import { ButtonBt } from '../../components/Styles/bootstrap';
import { Registration } from '../../components/ConfigModals/registration';

export function Company() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonBt variant="secondary" onClick={handleShow}>
        Configurações
      </ButtonBt>

      <Offcanvas  placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header style={{ background:"#1C1C1C" , color:"whitesmoke" }} closeButton>
          <Offcanvas.Title>Configurações do Sistema</Offcanvas.Title>
        </Offcanvas.Header >
        <Offcanvas.Body style={{ background:"#1C1C1C" }}>
        <Form>
        <div className="d-grid gap-2">
          <Registration/>
          <Registration/>
          <Registration/>
        </div>

      
    </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
