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
                            <p>These javascript challenges were completed using Vanilla Javascript. A similar verison of this challenge wehre I implement React UseState can be found here. <br />
                            <a href="/converter">React UseState</a></p>
                
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

// my vanilla javascript
// document.getElementById("btnSubmit1").addEventListener("click", convertMi);
// document.getElementById("btnSubmit2").addEventListener("click", convertF);
// document.getElementById("btnSubmit3").addEventListener("click", convertCm);




function convertMi(){
    let kmValue = parseFloat(document.getElementById("InputValue1").value)

    if(isNaN(kmValue)){
        alert("please input a number value")
    }else{
        let milesValue = convertToMi(kmValue)

        document.getElementById("results").innerHTML = `${kmValue} kilometers is equivalent to ${milesValue.toFixed(2)} miles`
    }
}
function convertToMi(km){
    let milesValue = 0;

    milesValue = km * 0.621;
    return milesValue;
};


function convertF(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let cValue = parseFloat(document.getElementById("InputValue2").value)

    //checking to see if input is valid
    if(isNaN(cValue)){
        alert("please input a number value")
    }else{
        let fValue = convertToF(cValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${cValue} degrees celsius is equivalent to ${fValue} degrees farenheit`
    }
}

function convertToF(c){
    let fahrenheit = 0;

    fahrenheit = (c * 9/5) + 32;

    return fahrenheit;
}



function convertCm(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let cmValue = parseFloat(document.getElementById("InputValue3").value)

    //checking to see if input is valid
    if(isNaN(cmValue)){
        alert("please input a number value")
    }else{
        let inValue = convertToIn(cmValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${cmValue} centimeters is equivalent to ${inValue.toFixed(2)} inches`
    }
}

function convertToIn(cm){
    let inches = 0;

    inches = cm * 0.393 ;

    return inches;
}