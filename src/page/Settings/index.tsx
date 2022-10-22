import { IoSettingsSharp } from "react-icons/io5";
import { DropDownBt } from "../../components/Styles/bootstrap";
import { Link } from "react-router-dom";

export function Settings() {
  return (
    <>
      <DropDownBt>
        <DropDownBt.Toggle variant="" style={{ color: 'white' }}>
          <IoSettingsSharp size={25} color={"#8A2BE2"} />
        </DropDownBt.Toggle>

        <DropDownBt.Menu style={{ background: "#1C1C1C" }} variant='dark' className="mt-2">
          <DropDownBt.Item as={Link} to="/company">Empresa</DropDownBt.Item>
          <DropDownBt.Item>Info. Fiscal</DropDownBt.Item>
          <DropDownBt.Item>Outros</DropDownBt.Item>
        </DropDownBt.Menu>
      </DropDownBt>
    </>
  );
}
