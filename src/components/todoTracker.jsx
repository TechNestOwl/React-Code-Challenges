


const TodoTracker = () =>{

    let trackerStyle = {
        fontFamily: "Monospace",
        color: "white",
        // feature to work on: pass dynamic value to color. defualt value of zero
    }
   
    return(
        // in todoCount, set default value zero and background color to invisible)
        // when count is updated to abouve 0, color will now trasition to white.
        <div className="todoCount">
            <p style={trackerStyle}>To-Do: 0</p>
        </div>

    )
};

export default TodoTracker;