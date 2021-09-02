import React, { useEffect } from 'react';
import List from './List';
import "../styles/Lists.css"
import { useDispatch, useSelector } from 'react-redux';
import { getLists } from '../store/dashboard/actions';

const Lists = () => {

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getLists)
    }, [dispatch]);
  
    const lists = useSelector(state => state.dashboard)
    
    return (
        <ul className="lists-menu">
            <li>
                {lists.map(list => 
                    <List key={list.id} list={list} />
                )}
            </li>
        </ul>        
    );
}

export default Lists;
