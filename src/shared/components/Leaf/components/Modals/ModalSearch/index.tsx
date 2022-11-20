import { useContext } from "react"
import { LeafContext } from "../../../../../context/leaf/leaf"
import { Search } from "../../../../Search"
import { LeafTable } from "../../LeafTable"

import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt, FormControlBt, ButtonBt, RowBt, ColBt, FormSelectBt } from "./styles"

export function ModalSearch() {
  const { handleClose, show } = useContext(LeafContext) as { handleShow: () => void, handleClose: () => void, show: Boolean }
  return (
    <>
      <OffcanvasBt show={show} onHide={handleClose} placement={'end'}>
        <OffcanvasHeaderBt closeButton>
          <OffcanvasTitleBt>Pesquisar Notas</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt>
          <RowBt>
              <RowBt  xs={12}>
                  <ColBt xs={6} sm={6} md={6} lg={6} xl={6}>
                    <FormControlBt className="me-auto" placeholder="Faça sua pesquisa" />
                  </ColBt>

                  <ColBt xs={6} sm={4} md={4} lg={4} xl={4}>
                    <FormSelectBt></FormSelectBt>
                  </ColBt>

                  <ColBt className={"btnPesquisar"} xs={2} sm={2} md={2} lg={2} xl={2}>
                    <ButtonBt variant="secondary">Pesquisar</ButtonBt>
                  </ColBt>
              </RowBt>
          </RowBt>

          <RowBt className="mt-5">
            <LeafTable />
          </RowBt>
        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  )
}