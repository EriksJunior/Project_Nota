import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import { IoSettingsSharp } from "react-icons/io5";

import { ButtonBt } from '../../components/Styles/bootstrap';
import { Registration } from '../../components/ConfigModals/registration';
import Dropdown from 'react-bootstrap/Dropdown';


export function Company() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown align={"end"} style={{ marginRight:"20px" }}  >
        <Dropdown.Toggle variant="" >
          <ButtonBt variant="" onClick={handleShow} >
          <IoSettingsSharp size={25} />
          </ButtonBt>
        </Dropdown.Toggle>

      <Dropdown.Menu  style={{ background:"#1C1C1C"}} variant='dark'>
        <Dropdown.Item ><Registration/></Dropdown.Item>
        <Dropdown.Item ><Registration/></Dropdown.Item>
        <Dropdown.Item ><Registration/></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}
