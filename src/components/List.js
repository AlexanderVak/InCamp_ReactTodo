import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/List.css"

const List = ({list, todoLists, selectedList, setSelectedList}) => {
    const selectedListHandler = () => {
        setSelectedList(todoLists.filter(item => item.id === list.id)[0])
    }

    return (
        <Link
        to={`/lists/${list.id}`}
        className={`${selectedList.id === list.id ? 'list-selected' : ''}`}
        onClick={selectedListHandler}
        >
            {list.title}
        </Link>
    );
}

export default List;
