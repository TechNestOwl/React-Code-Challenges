import { Container, Row, Col } from 'react-bootstrap';
import ModalPop from './ModalPop';
import problemPic from '../Assets/problemSolving.jpg';



const LongestW = () =>{
    return(
        <div>
        <Container fluid>
            <Row className="custom-row">
                <Col md={5} className="custom-col">
                <div className="content">

                    <div class="col-12 col-md-6">
                        <h1>Longest String in an Array</h1>
                        <p class="lead">Given an array of coding languages, write a function that accepts the array of names.
                        <br /> The function should return the coding language with the longest name. <br /></p>
                        <p>
                            <h3>List of Coding Languages</h3>
                            <code>
                                [
                                "C#",
                                "Python",
                                "Go",
                                "Java",
                                "Kotlin",
                                "PHP",
                                "Swift",
                                "R",
                                "Ruby",
                                "C and C++",
                                "Matlab",
                                "Typescript",
                                "Scala",
                                "SQL",
                                "HTML",
                                "CSS",
                                "NoSQL",
                                "Rust",
                                "Perl",
                                ]
                            </code>
                        </p>
            
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

export default LongestW;