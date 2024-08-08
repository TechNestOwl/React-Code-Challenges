import { Container, Row, Col, Button } from 'react-bootstrap';

const MainSection = () => {
  return (
    <section className="main-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Your Heading</h1>
            <p>Your catchy tagline or description goes here.</p>
            <Button variant="primary">Get Started</Button>
          </Col>
          <Col md={6}>
            <img
              src="src/Assets/problemSolving.jpg"
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MainSection;
