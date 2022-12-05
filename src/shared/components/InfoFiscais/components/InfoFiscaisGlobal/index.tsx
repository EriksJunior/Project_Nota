import { Col, Nav, Row, Tab, Card , Button } from 'react-bootstrap';

import { GeneralDataInfoFiscale } from '../GeneralDataInfoFiscale';
import { GeneralinfoFiscale } from '../GeneralinfoFiscale';
import { IcmsInfo } from '../MainInfoFiscale/ICMS';
import { IpiInfo } from '../MainInfoFiscale/IPI';
import { IssqnInfo } from '../MainInfoFiscale/ISSQN';
import { PisInfo } from '../MainInfoFiscale/PIS';
import { CofinsInfo } from '../MainInfoFiscale/COFINS';

import { IoCheckboxOutline, IoRefresh } from 'react-icons/io5';
import { ButtonContent } from '../../../Company/styles';
import { CardInfoFiscale , NavFiscale } from './styles';

import { useContext } from 'react';
import { ImpostosContext } from '../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../interface/IImpostos';


export function InfoFiscaisGlobal() {
    const { impostos , handleSaveOrUpdate , clearInputs } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler , handleSaveOrUpdate: () => void , clearInputs: () => void }
   
    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
        <CardInfoFiscale>
            <Card.Header style={{ justifyContent: "center", display: "flex" , fontWeight:"bold" , fontSize:"22px" , background:"#1b022e" , color:"whitesmoke" }} >Dados Fiscais</Card.Header>
            <Card.Body style={{ maxHeight:"75vh", width:"100%"}}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <NavFiscale variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Info. Gerais</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ICMS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="terciary">IPI</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">PIS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">COFINS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">ISSQN</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh">Info. Complementares</Nav.Link>
                                </Nav.Item>
                            </NavFiscale>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content style={{ height: "57vh" }} >
                                <Tab.Pane eventKey="first">
                                    <GeneralDataInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <IcmsInfo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="terciary">
                                    <IpiInfo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <PisInfo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <CofinsInfo/>
                                </Tab.Pane>
                                <Tab.Pane  eventKey="sixth">
                                    <IssqnInfo/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                    <GeneralinfoFiscale/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
            <Card.Footer className="text-muted">
                    <ButtonContent>
                        <Button onClick={clearInputs} variant="" style={{ background:"#C0C0C0" , color: "black" }}>
                            <IoRefresh />Limpar Campos
                        </Button>
                        <Button onClick={handleSaveOrUpdate} variant="" style={{ borderRight: "3px solid #8A2BE2" , borderLeft: "3px solid #8A2BE2" , background:"#C0C0C0" , color: "black" }}>
                            <IoCheckboxOutline /> Salvar alterações
                        </Button>
                    </ButtonContent>
                </Card.Footer>
        </CardInfoFiscale>
    </div>
    );
}


