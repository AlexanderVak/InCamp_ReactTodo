import React from 'react';

const Lists = ({Lists, setLists}) => {

    const listsHandler = (event) => {
        console.log(event.target.value);
    }
    return (
        <ul className="lists-menu">
            <li><a onClick={listsHandler} value="all" href="#">All</a></li>
            <li><a onClick={listsHandler} value="done" href="#">Done</a></li>
            <li><a onClick={listsHandler} value="unfinished" href="#">Unfinished</a></li>
        </ul>

        
    );
}

export default Lists;
