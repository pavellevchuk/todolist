import React, { useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { connect } from 'react-redux'

import './index.scss'

import {addTodo} from '../../actions'


function AddTask({ onCreateTask }) {
    const [isCreatingTask, setIsCreatingTask] = useState(false);
    const [taskText, setTaskText] = useState('');
    
    const handleAddButtonClick = (e) => {
        if (taskText.length && isCreatingTask) {
            onCreateTask(taskText);
            setTaskText('');
        }
        setIsCreatingTask(!isCreatingTask);
    }

    const handleBlur = (e) => {
        if (!taskText.length) setIsCreatingTask(false);
    }

    const handleChange = (e) => {
        setTaskText(e.currentTarget.value);
    }

    return (
        <div className="add-task">
            {
                isCreatingTask
                ? (
                        <>
                            <input type="text" className="task-input" autoFocus onBlur={handleBlur} onChange={handleChange}/>
                            <div className="add-button-save">
                                <span onClick={handleAddButtonClick}>Save</span>
                            </div>
                        </>
                    )
                : (
                    <div className="add-button" onClick={handleAddButtonClick}>
                        <div className="add-button__plus">
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <span>Add task</span>
                    </div>
                )
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        onCreateTask: (text) => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTask);