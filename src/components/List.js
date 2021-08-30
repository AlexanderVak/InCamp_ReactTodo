import React from 'react';
import "./List.css"

const List = ({list, todoLists, selectedList, setSelectedList}) => {
    const selectedListHandler = (event) => {
        event.preventDefault()
        setSelectedList(todoLists.filter(item => item.id === list.id)[0])
    }

    return (
        <a className={`${selectedList.id === list.id ? 'list-selected' : ''}`} onClick={selectedListHandler} href="">
            {list.title}
        </a>
    );
}

export default List;
