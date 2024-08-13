import React, { UseState, useEffect} from 'react';

const Counter = () =>{

    const [count, setCounter] = useState(0);

    const handleCounter = () => {
        setCounter(prevState => prevState + 1)
    }


    return(
        <div>
            <button>Click Me</button>
            <p>Count</p>
            <button>Reset Button</button>
        </div>
    )
};

export default Counter;