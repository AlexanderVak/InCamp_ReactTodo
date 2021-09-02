import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectList } from '../store/dashboard/actions';
import "../styles/List.css"

const List = ({list}) => {
    
    const dispatch = useDispatch()
    const selectedList = useSelector(state => state.selectedList)

    return (
        <Link
        to={`/lists/${list.id}`}
        className={`${selectedList.id === list.id ? 'list-selected' : ''} list-content`}
        onClick={() => dispatch(selectList(list.id))}
        >
            {list.title}
        </Link>
    );
}

export default List;
