import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MyTodos from '../components/MyTodos'
import { Login, Register } from '../components/Auth'

const mainRoutes = [
    {
        path : '/',
        exact: true,
        render: () => <Redirect to="/login"/>
    },
    {
        path : '/login',
        exact: true,
        render: () => <Route component={Login}/>
    },
    {
        path : '/register',
        exact: true,
        render: () => <Route component={Register}/>
    },
    {
        path : '/mytodos',
        exact: true,
        render: () => <Route component={MyTodos}/>
    }
]

export default mainRoutes;