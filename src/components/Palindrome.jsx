import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




const UserInputForm = () => {
}


const Palindrome = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(inputValue);
    }
    return(
        <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center">Palindrom Check</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="userInput" className="form-label mt-3">
                    Enter a String:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="userInput"
                    placeholder="Type something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-3 w-100">
                  Submit
                </button>
              </form>
              <div className="results mt-4 p-3 border rounded bg-light">
                <h5>Results:</h5>
                <p>{result}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export default Palindrome;