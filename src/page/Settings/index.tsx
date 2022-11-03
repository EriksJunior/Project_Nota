import { IoSettingsSharp } from "react-icons/io5";
import { DropDownBt, IconIoHome, IconIoNewspaper, IconIoHelpCircleOutline , IconIoEnter } from "../../shared/components/Styles/bootstrap";
import { Link } from "react-router-dom";

export function Settings() {
  return (
    <>
      <DropDownBt>
        <DropDownBt.Toggle variant="" style={{ color: 'white' }}>
          <IoSettingsSharp size={25} color={"#8A2BE2"} />
        </DropDownBt.Toggle>

        <DropDownBt.Menu style={{ background: "#1C1C1C" }} variant='dark' className="mt-2">
          <DropDownBt.Item as={Link} to="/company">
            <IconIoHome size={20} /> Empresa
          </DropDownBt.Item>

          <DropDownBt.Item as={Link} to="/infofiscal">
            <IconIoNewspaper size={20} /> Info. Fiscal
          </DropDownBt.Item>

          <DropDownBt.Item as={Link} to="/outros">
            <IconIoHelpCircleOutline size={20} /> Outros
          </DropDownBt.Item>

          <DropDownBt.Item as={Link} to="/logOut">
            <IconIoEnter size={20} /> Sair
          </DropDownBt.Item>
        </DropDownBt.Menu>
      </DropDownBt>
    </>
  );
}
