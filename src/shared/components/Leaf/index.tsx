import { Accordion, Card } from "react-bootstrap";

import { DataLeafProducts } from "./components/DataLeafProducts";
import { GeneralLeafInformation } from "./components/GeneralLeafInformation";
import { HeaderLeaf } from "./components/HeaderLeaf";
import { HeaderLeafButtons } from "./components/HeaderLeafButtons";
import { ModalSearch } from "./components/Modals/ModalSearch";

import { ContentLeaf } from "../Styles/general";
import { StyledAccordion } from "./styles";

export function Leaf() {
  return (
    <div>
      <ContentLeaf>
        <Card>
          <Card.Body>
            <HeaderLeafButtons />
            <HeaderLeaf />

            <StyledAccordion
              defaultActiveKey="0"
              style={{ width: "80vw", height: "auto" }}
            >
              <Accordion.Item eventKey="0">
                <DataLeafProducts />
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <GeneralLeafInformation />
              </Accordion.Item>
            </StyledAccordion>

            <ModalSearch />
          </Card.Body>
        </Card>
      </ContentLeaf>
    </div>
  );
}
