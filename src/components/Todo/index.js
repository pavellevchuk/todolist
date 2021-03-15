import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faShare } from "@fortawesome/free-solid-svg-icons"
import { connect } from 'react-redux'
import { changeTodo, deleteTodo } from '../../actions';

import './index.scss'

const Todo = ({ shareList, onChange, handleDeleteTask, handleShareTask, text }) => {

    return (
        <li className="list__item">
            <input type="text" onChange={onChange} value={text} className="task-input"/>
            <span onClick={handleShareTask}>
                <FontAwesomeIcon icon={faShare}/>
            </span> 
            <span onClick={handleDeleteTask}>
                <FontAwesomeIcon icon={faTrash}/>
            </span>
            <div className="list__item-share">

            </div>
        </li>
        )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onChange: (e) => dispatch(changeTodo({...ownProps, text: e.currentTarget.value})),
        handleDeleteTask: (e) => dispatch(deleteTodo(ownProps.id)),
    }
}

const mapStateToProps = ({userReducer}) => {
    return {
        shareList: userReducer
    }
}


export default connect(null, mapDispatchToProps)(Todo)