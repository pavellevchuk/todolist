import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { connect } from 'react-redux'

import './index.scss'

import Todo from '../Todo'
import AddTask from '../AddTask'

function MyTodos({ todos, onChange }) {
    return (
        <div className="main-container">
            <div className="container">
                <Row>
                    <Col sm={12} xs={12}>
                        <div className="header">
                            <h1 className="header__name">Hello, Pavlo</h1>
                            <span className="header__subheader">Which tasks are you going to complete today?</span>
                        </div>
                    </Col>
                    <Col sm={12} xs={12}>
                        <div className="list-container">
                            <ul className="list">
                                {todos.map(( todo ) => <Todo key={todo.id} {...todo}/>)}
                            </ul>
                        </div>
                        <AddTask/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

const mapStateToProps = ({todos}) => {
    return {
        todos: todos
    }
}

export default connect(mapStateToProps)(MyTodos)