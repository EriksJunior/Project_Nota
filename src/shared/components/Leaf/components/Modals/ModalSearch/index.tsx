import { useContext } from "react"
import { LeafContext } from "../../../../../context/leaf/leaf"
import { Search } from "../../../../Search"

import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt } from "../../../../Styles/bootstrap"

export function ModalSearch(){
  const {handleShow, handleClose, show} = useContext(LeafContext) as {handleShow: () => void, handleClose: () => void, show: Boolean}
  return(
      <>
      <OffcanvasBt show={show} onHide={handleClose} placement={'end'} style={{ width: "50vw" }}>
        <OffcanvasHeaderBt style={{ backgroundColor: "blueViolet" }} closeButton>
          <OffcanvasTitleBt style={{ color: "white", fontWeight: "bold", fontSize: "36px", justifyContent: "center", paddingLeft: "50px" }}>Pesquisar Notas</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt style={{ background: "#f5f5f5", color: "LightGrey", fontWeight: "bolder" }}>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  )
}