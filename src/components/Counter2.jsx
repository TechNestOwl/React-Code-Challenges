// This component is used to test out new ideas and features. For devlopment use only; /dev


import ModalPop from './ModalPop';
import photo from "../Assets/logo_weatherBooth.png"


const DoubleTap = ({ items, id, length, handleAdd, handleSubtract}) => {
    

    
    const modalTitle = "Counter Challenge";
    const modalBody = "This counter was very fun to build. I implemented so many new ideas and concpets. I hit a road block when I this function wasn't working, this was solved by doing implenting that.";

    return(
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{ length }</span>
            <button onClick={handleSubtract}>-</button>
            <br />
            <br />
            <br />
            <ModalPop img={photo} title={modalTitle} body={modalBody} />
        </div>
    )
};

export default DoubleTap;