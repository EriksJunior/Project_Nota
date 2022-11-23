import  { useContext } from "react"
import { IResultSearchLeaf, ISearch } from "../../../../../../interface/ILeaf"
import { LeafContext } from "../../../../../context/leaf/leaf"
import { LeafTable } from "../../LeafTable"

import { OffcanvasBt, OffcanvasHeaderBt, OffcanvasTitleBt, OffcanvasBodyBt, FormControlBt, ButtonBt, RowBt, ColBt, FormSelectBt, FloatingLabelBt } from "./styles"

export function ModalSearch() {
  const { handleClose, show, handleChangeSeachLeaf, searchLeaf, search, resultSearchLeaf } = useContext(LeafContext) as { handleShow: () => void, handleClose: () => void, show: Boolean, handleChangeSeachLeaf: (e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void, searchLeaf: () => void, search: ISearch, resultSearchLeaf: IResultSearchLeaf[] }

  return (
    <>
      <OffcanvasBt show={show} onHide={handleClose} placement={'end'}>
        <OffcanvasHeaderBt closeButton>
          <OffcanvasTitleBt>Pesquisar Notas</OffcanvasTitleBt>
        </OffcanvasHeaderBt>
        <OffcanvasBodyBt>
          <RowBt xs={12} className="gap-3">
            <RowBt>
              <ColBt xs={6} sm={6} md={6} lg={6} xl={6}>
                <FloatingLabelBt label="DT. Inicial">
                  <FormControlBt name="startDate" type="date" value={search.startDate || ""} onChange={handleChangeSeachLeaf}/>
                </FloatingLabelBt>
              </ColBt>

              <ColBt xs={6} sm={6} md={6} lg={6} xl={6}>
                <FloatingLabelBt label="DT. Fim">
                  <FormControlBt name="endDate" type="date" value={search.endDate || ""} onChange={handleChangeSeachLeaf}/>
                </FloatingLabelBt>
              </ColBt>
            </RowBt>

            <RowBt>
              <ColBt xs={6} sm={6} md={6} lg={6} xl={6}>
                <FloatingLabelBt label="Pesquisar">
                  <FormControlBt name="text" type="text" value={search.text || ""} onChange={handleChangeSeachLeaf}/>
                </FloatingLabelBt>
              </ColBt>

              <ColBt xs={6} sm={6} md={6} lg={6} xl={6}>
                <FloatingLabelBt label="Filtro">
                  <FormSelectBt name="filter" value={search.filter}  onChange={handleChangeSeachLeaf}>
                    <option value={"nome"}>Nome</option>
                    <option value={"cpfCnpj"}>Cpf/Cnpj</option>
                  </FormSelectBt>
                </FloatingLabelBt>
              </ColBt>
            </RowBt>

            <RowBt className="justify-content-end">
              <ColBt className="btnPesquisar" xs={2} sm={2} md={2} lg={2} xl={2}>
                <ButtonBt variant="secondary" onClick={searchLeaf}>Pesquisar</ButtonBt>
              </ColBt>
            </RowBt>
          </RowBt>

          <RowBt className="mt-3">
            <ColBt sm={12} md={12} lg={12} xl={12}>
              <LeafTable data={resultSearchLeaf}/>
            </ColBt>
          </RowBt>
        </OffcanvasBodyBt>
      </OffcanvasBt>
    </>
  )
}