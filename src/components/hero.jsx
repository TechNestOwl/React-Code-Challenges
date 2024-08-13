import "../styles/jumbotron.css";

const Hero = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="jumbotron-text">
                    <h1 className="display-4">Thinking in Javascript</h1>
                    <p className="lead">
                    "I built this react app to demonstrate proficiency in JavaScript with code challenges. These serve as a showcase 
                        of problem-solving skills and deep understanding of programming concepts and logic." <br/>- Gill G.
                    </p>
                    <a href="/aboutme" className="stylish-button">Learn More</a>
                </div>
            </div>
        </div>
    )
};

export default Hero;