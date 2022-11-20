import { useContext } from "react"
import { LeafContext } from "../../../../../context/leaf/leaf"
import { Search } from "../../../../Search"

import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt } from "./styles"

export function ModalSearch(){
  const { handleClose, show} = useContext(LeafContext) as {handleShow: () => void, handleClose: () => void, show: Boolean}
  return(
      <>
      <OffcanvasBt show={show} onHide={handleClose} placement={'end'}>
        <OffcanvasHeaderBt closeButton>
          <OffcanvasTitleBt>Pesquisar Notas</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  )
}