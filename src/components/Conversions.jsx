import '../styles/challenge.css';
import { Container, Row, Col } from 'react-bootstrap';
import ModalPop from './ModalPop';
import problemPic from '../Assets/problemSolving.jpg';


const Conversions = () => {
    return (
       <div>
            <Container fluid>
                <Row className="custom-row">
                    <Col md={5} className="custom-col">
                    <div className="content">

                        <div class="col-12 col-md-6">
                            <h1>Conversions</h1>
                
                             <p ><strong>Kilometers to Miles</strong> </p>
                            <div class="form-group">
                                <input type="number" class="form-control" id="InputValue1" aria-describedby="kmHelp"
                                    placeholder="Km value" />
                                <small id="kmHelp" class="form-text text-muted">Enter a number in kilometers</small>
                                <div class="mt-1 text-end">
                                    <button id="btnSubmit1" type="button" class="btn btn-warning">Convert</button>
                                </div>
                            </div>
                            <p ><strong>Celsius to Fahrenheit</strong> </p>
                            <div class="form-group">
                                <input type="number" class="form-control" id="InputValue2" aria-describedby="kmHelp"
                                    placeholder="Celsius value" />
                                <small id="kmHelp" class="form-text text-muted">Enter a number in Celsius</small>
                                <div class="mt-1 text-end">
                                    <button id="btnSubmit2" type="button" class="btn btn-warning">Convert</button>
                                </div>
                            </div>
                            <p ><strong>Centimeters to Inches</strong> </p>
                            <div class="form-group">
                                <input type="number" class="form-control" id="InputValue3" aria-describedby="kmHelp"
                                    placeholder="Cm value" />
                                <small id="kmHelp" class="form-text text-muted">Enter a number in Centimeters</small>
                            </div>
                            <div class="mt-1 text-end">
                                <button id="btnSubmit3" type="button" class="btn btn-warning">Convert</button>
                            </div>
                            <br />
                
                            <div class="col-12 order-last mt-4 mb-2">
                                <div id="results" class="languageName display-6">
                                    Results...
                                </div>
                                <div id="namelist"></div>
                            </div>
                        </div>

                    </div>
                    </Col>
                    <div className="divider"></div>
                    <Col md={5} className="custom-col">
                    <div className="content">
                        <img src={problemPic} />
                    </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <ModalPop />
       </div>
    )
};

export default Conversions;