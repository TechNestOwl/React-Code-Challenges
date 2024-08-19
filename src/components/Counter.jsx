import React, { useState } from 'react';
import ModalPop from "./ModalPop";

const Counter = () =>{

    const [count, setCount] = useState(0);
    // Here I am decalring the state and assigning it a default value of -

    function decrementCount(){
        setCount(prevCount => prevCount - 1);
    };
// decremmenting the count by setting the count to the previous count and subtracting 1
    function incrementCount()    {
        setCount(prevCount => prevCount + 1);
    };
// doing the same here
    function resetCount(){
        setCount(0);
    };

    return(
        <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Counter with useState</h2>
                <h3 className="display-4 my-4">{count}</h3>
                <div className="btn-group" role="group" aria-label="Counter controls">
                  <button className="btn btn-outline-primary" onClick={incrementCount}>
                    +
                  </button>
                  <button className="btn btn-outline-danger" onClick={decrementCount}>
                    -
                  </button>
                  <button
                    className="btn btn-outline-secondary" onClick={resetCount}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <ModalPop />
        {/* Whenever I am  modifying state where I am using the previous value of the state to update the new value.
         Make sure I am using the function version of setting my state. EX when decrementingCount I used setCount(prevCount => prevCount - 1 ) */}
        {/* Important to know, when I pass the state directly into useState, it is going to run everytime the componenet
        re-renders. If I pass it a function, it will only run the first time the component is rendered. Keep this in mind if 
        passing a complex state with heavy computation. This could slow down performance of the app. */}
        {/* If using an object isinde of my state, it is important to know that updating the object will directly override
        previous value it not re-listed. I can do this by using a spread operator, this will include other values from the previous state object  */}
      </div>

    )
 
};

export default Counter;