import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons"
import { connect } from 'react-redux'
import { changeTodo, deleteTodo } from '../../actions';

import './index.scss'

const Todo = ({ onChange, handleDeleteTask, completed, text }) => {

    return (
        <li className="list__item">
            <input type="text" onChange={onChange} value={text} className="task-input"/>
            <span onClick={handleDeleteTask}>
                <FontAwesomeIcon icon={faTrash}/>
            </span> 
        </li>
        )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (e) => dispatch(changeTodo({...ownProps, text: e.currentTarget.value})),
        handleDeleteTask: (e) => dispatch(deleteTodo(ownProps.id))
    }
}


export default connect(null, mapDispatchToProps)(Todo)