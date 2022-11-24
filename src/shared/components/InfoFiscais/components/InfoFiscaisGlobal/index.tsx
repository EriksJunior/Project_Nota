import { Col, Nav, Row, Tab, Card , Button } from 'react-bootstrap';

import { GeneralDataInfoFiscale } from '../GeneralDataInfoFiscale';
import { GeneralinfoFiscale } from '../GeneralinfoFiscale';
import { MainInfoFiscale } from '../MainInfoFiscale';
import { CardInfoFiscale , NavFiscale } from './styles';

import { IoCheckboxOutline } from 'react-icons/io5';
import { ButtonContent } from '../../../Company/styles';
import { IconBsPen } from '../../../Styles/bootstrap';

import { IcmsInfo } from '../MainInfoFiscale/ICMS';
import { IpiInfo } from '../MainInfoFiscale/IPI';
import { IssqnInfo } from '../MainInfoFiscale/ISSQN';

import { useContext } from 'react';
import { ImpostosContext } from '../../../../context/impostos/impostos';
import { IImpostos } from '../../../../../interface/IImpostos';


export function InfoFiscaisGlobal() {
    const { impostos , handleChange , handleSaveOrUpdate } = useContext(ImpostosContext) as { impostos: IImpostos , handleChange: React.ChangeEventHandler , handleSaveOrUpdate: () => void }
   
    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
        <CardInfoFiscale>
            <Card.Header style={{ justifyContent: "center", display: "flex" , fontWeight:"bold" , fontSize:"22px" , background:"#8A2BE2" , color:"whitesmoke" }} >Dados Fiscais</Card.Header>
            <Card.Body style={{ height:"auto" }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <NavFiscale variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Informações Gerais</Nav.Link>
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
                                    <Nav.Link eventKey="seventh">Informações Complementares</Nav.Link>
                                </Nav.Item>
                            </NavFiscale>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
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
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
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
                        <Button variant="" style={{ background:"#8A2BE2" , color: "white" }}>
                            <IconBsPen />Limpar Campos
                        </Button>
                        <Button onClick={handleSaveOrUpdate} variant="" style={{ background:"#8A2BE2" , color: "white" }}>
                            <IoCheckboxOutline /> Salvar alterações
                        </Button>
                    </ButtonContent>
                </Card.Footer>
        </CardInfoFiscale>
    </div>
    );
}


