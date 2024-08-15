import "../styles/landing.css";
import { Container, Row, Col, Button } from 'react-bootstrap';
import landingPic from "../Assets/problemSolving.jpg";
import ModalPop from "./ModalPop";

const Landing = () => {

  // modalPop props
  const modalBtn = "Where to start?";
  const modalTitle = "Where to start?";
  const modalBody = "In the Nav bar, click on the code challenges dropdown to checkout how I solved various tasks using Javascript.";


  return (
    <section className="main-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            
            {/* <Button variant="primary">
              <h1>Where to start?</h1>
            </Button> */}

            <div>
              <ModalPop
               modalBtn={modalBtn}
               modalTitle={modalTitle}
               modalBody={modalBody}
               />
            </div>
            <br/>
            <p> Each challenge presented here represents a unique problem-solving experience. Explore my work, see my progress, and get a
               glimpse into how I approach and solve real-world coding problems. Thank you for visiting, and I hope you enjoy exploring this React App as much as I did building it!</p>
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

// Navigation, use the dropdown menu in the navbar to jump around and see the various code chalenges. 