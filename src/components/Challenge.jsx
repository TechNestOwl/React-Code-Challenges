import '../styles/challenge.css';
import { Container, Row, Col } from 'react-bootstrap';
import Modal from './components/Modal'


const Challenge = () => {
    return (
       <div>
            <Container fluid>
                <Row className="custom-row">
                    <Col md={5} className="custom-col">
                    <div className="content">Challenge component</div>
                    </Col>
                    <div className="divider"></div>
                    <Col md={5} className="custom-col">
                    <div className="content">Column 2, Row 1</div>
                    </Col>
                </Row>
            </Container>
            <Modal />
       </div>
    )
};

export default Challenge;