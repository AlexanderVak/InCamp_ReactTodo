import React from 'react';
import List from './List';
import "../styles/Lists.css"

const Lists = ({todoLists, selectedList, setSelectedList}) => {

    return (
        <ul className="lists-menu">
            <li>
                {todoLists.map(list => 
                    <List key={list.id} list={list} todoLists={todoLists} selectedList={selectedList} setSelectedList={setSelectedList}/>
                )}
            </li>
        </ul>        
    );
}

export default Lists;
