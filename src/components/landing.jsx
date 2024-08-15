import "../styles/landing.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingPic from "../Assets/problemSolving.jpg";
import ModalPop from "./ModalPop";

const Landing = () => {
  return (
    <section className="main-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            
            <Button variant="primary">
              <h1>Where to start?</h1>
            </Button>

            <div>
              <ModalPop />
            </div>

            <p>Click on the code challenges dropdown above to checkout how I solve various tasks using programming concepts.</p>
            <p> Each challenge presented here represents a unique problem-solving experience. Explore my work, see my progress, and get a
               glimpse into how I approach and solve real-world coding problems. Thank you for visiting, and I hope you enjoy exploring my code challenges as much as I enjoyed solving them!</p>
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
