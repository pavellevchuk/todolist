import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import {Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import './index.scss'

import Todo from '../Todo'
import AddTask from '../AddTask'
import { setTodos } from '../../actions/index'

function MyTodos({ todos, user, setTodos}) {

    useEffect(() => {
        if(user.id !== null){
            setTodos(user);
        }
    },[setTodos, user])
    
    if(!user.loggedIn){
        return <Redirect to="/login"/>
    }

    return (
        <div className="main-container">
            <div className="container">
                <Row>
                    <Col sm={12} xs={12}>
                        <div className="header">
                            <h1 className="header__name">Hello, {user.name}</h1>
                            <span className="header__subheader">Which tasks are you going to complete today?</span>
                        </div>
                    </Col>
                    <Col sm={12} xs={12}>
                        <div className="list-container">
                            <ul className="list">
                                {todos.todos.map(( todo ) => <Todo key={todo.id} {...todo}/>)}
                            </ul>
                        </div>
                        <AddTask/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const mapStateToProps = ({todoReducer, userReducer}) => {
    return {
        todos: todoReducer,
        user: userReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTodos: (user) => dispatch(setTodos(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyTodos)