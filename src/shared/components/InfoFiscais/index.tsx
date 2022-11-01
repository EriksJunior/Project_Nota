import { Col, Nav, Row, Tab, Card } from 'react-bootstrap';
import { GeneralDataInfoFiscale } from './components/GeneralDataInfoFiscale';
import { GeneralinfoFiscale } from './components/GeneralinfoFiscale';
import { MainInfoFiscale } from './components/MainInfoFiscale';
import { CardInfoFiscale } from './styles';



export function InfoFiscaisGlobal() {
    return (
        <div style={{ justifyContent: "center", display: "flex" }}>
        <CardInfoFiscale>
            <Card.Header>Dados Fiscais</Card.Header>
            <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
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
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <GeneralDataInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <GeneralinfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="terciary">
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <MainInfoFiscale/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                    <GeneralinfoFiscale/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Card.Body>
        </CardInfoFiscale>
    </div>
    );
}


