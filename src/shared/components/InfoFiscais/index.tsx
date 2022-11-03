import { Col, Nav, Row, Tab, Card , Button } from 'react-bootstrap';
import { GeneralDataInfoFiscale } from './components/GeneralDataInfoFiscale';
import { GeneralinfoFiscale } from './components/GeneralinfoFiscale';
import { MainInfoFiscale } from './components/MainInfoFiscale';
import { CardInfoFiscale } from './styles';
import { IoCheckboxOutline } from 'react-icons/io5';
import { ButtonContent } from '../../../shared/components/Company/styles';
import { IconIoHome } from '../../../shared/components/Styles/bootstrap';
import { IcmsInfo } from './components/MainInfoFiscale/ICMS';
import { IpiInfo } from './components/MainInfoFiscale/IPI';
import { IssqnInfo } from './components/MainInfoFiscale/ISSQN';


export function InfoFiscaisGlobal() {
    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
        <CardInfoFiscale>
            <Card.Header>Dados Fiscais</Card.Header>
            <Card.Body style={{ height:"80vh" }}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
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
                            </Nav>
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
                        <Button variant="secondary" size='lg'>
                            <IconIoHome /> <span>Limpar Campos</span>
                        </Button>
                        <Button variant="" size='lg' style={{ background:"#8A2BE2" , color: "white" }}>
                            <IoCheckboxOutline /> Salvar alterações
                        </Button>
                    </ButtonContent>
                </Card.Footer>
        </CardInfoFiscale>
    </div>
    );
}

