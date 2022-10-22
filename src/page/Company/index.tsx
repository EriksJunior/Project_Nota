import { IoSettingsSharp } from "react-icons/io5";
import { Registration } from '../../components/ConfigModals/registration';
import { Dropdown } from 'react-bootstrap';
import { DropDownBt } from "../../components/Styles/bootstrap";

export function Company() {
  return (
    <>
      <DropDownBt>
        <DropDownBt.Toggle variant="" style={{ color: 'white' }}>
          <IoSettingsSharp size={25} color={"#8A2BE2"} />
        </DropDownBt.Toggle>

        <DropDownBt.Menu style={{ background: "#1C1C1C" }} variant='dark' className="mt-2">
          <DropDownBt.Item ><Registration /></DropDownBt.Item>
          <DropDownBt.Item ><Registration /></DropDownBt.Item>
          <DropDownBt.Item ><Registration /></DropDownBt.Item>
        </DropDownBt.Menu>
      </DropDownBt>
    </>
  );
}
