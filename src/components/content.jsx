
import React, { useState } from 'react';


const Content = () =>{

    const [item, setNewItem] = useState([
        {
            id: 1,
            checked: true,
            item: "Item one"
        },
        {
            id: 2,
            checked: false,
            item: "this is another item on the list"
        },
        {
            id: 3,
            checked: true,
            item: "third item on the list here!"
        },
        {
            id: 4,
            checked: false,
            item: "My first, my last, my everything.."
        },
    ]);




    return(
        <>
        </>
    )
};

export default Content;