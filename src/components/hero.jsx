import "../styles/jumbotron.css";

const Hero = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="jumbotron-text">
                    <h1 className="display-4">Thinking in Javascript</h1>
                    <p className="lead">
                    "I built this webpage to demonstrate proficiency in JavaScript with code challenges. These serve as a showcase 
                        of problem-solving skills and deep understanding of JavaScript concepts and logic." <br/>- Gill G.
                    </p>
                    <a href="#" className="stylish-button">Learn More</a>
                </div>
            </div>
        </div>
    )
};

export default Hero;