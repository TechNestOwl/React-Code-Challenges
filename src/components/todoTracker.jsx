


const TodoTracker = ({ length }) =>{

    let trackerStyle = {
        fontFamily: "Monospace",
        color: "black",
        // feature to work on: pass dynamic value to color. defualt value of zero
    }
   
    return(
        // in todoCount, set default value zero and background color to invisible)
        // when count is updated to abouve 0, color will now trasition to white.
        <div className="todoCount">
            <p style={trackerStyle}>Counter:{length}</p>
        </div>

    )
};

export default TodoTracker;