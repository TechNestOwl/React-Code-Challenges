import "../styles/landing.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingPic from "../Assets/problemSolving.jpg";

const Landing = () => {
  return (
    <section className="main-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Where to start..</h1>
            <p>Thank you for being here. <br /> Click on the code challenges dropdown above to checkout how I solve various tasks using programming concepts.</p>
            <Button variant="primary">Get Started</Button>
          </Col>
          <Col md={6}>
            <img
              src={landingPic}
              alt="placeholder"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Landing;
