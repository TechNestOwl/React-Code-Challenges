
import React, { useState } from 'react';



const DoubleTap = () => {
    
    const [count, setCount] = useState(0);

    function doubleTapUP(){
        setCount(prevCount => prevCount + 2)
    };

    function doubleTapDown(){
        setCount(prevCount => prevCount -2)
    };

    return(
        <div>
            <button onClick={doubleTapUP}>+</button>
            <span>{count}</span>
            <button onClick={doubleTapDown}>-</button>
        </div>
    )
};

export default DoubleTap;