import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import MyTodos from '../components/MyTodos'

const mainRoutes = [
    {
        path : '/',
        exact: true,
        render: () => <Redirect to="/mytodos"/>
    },
    // {
    //     path : '/login',
    //     exact: true,
    //     render: () => <Route component={Login}/>
    // },
    // {
    //     path : '/register',
    //     exact: true,
    //     render: () => <Route component={Register}/>
    // },
    {
        path : '/mytodos',
        exact: true,
        render: () => <Route component={MyTodos}/>
    }
]

export default mainRoutes;