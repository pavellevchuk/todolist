import React, { useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import InputField from '../InputField'
import './index.scss'

import { login , setUser} from '../../actions/user'
import { connect } from 'react-redux'

function Login({userProfile, loginUser}) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {status, description, user} = login({email, password});

        if(status === 'error'){
            alert(description);
            return;
        }
        loginUser(user);
    }

    if(userProfile.loggedIn){
        return <Redirect to="/mytodos"/>;
    }

    return (
        <div className="main-container">
            <div className="container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <InputField name="email" label="Enter your email" value={email} onChange={setEmail}/>
                    <InputField name="password" label="Enter your password" value={password} onChange={setPassword}/>
                    <button className="login-form__button" type="submit">Login</button>
                    <Link to="/register">Do not have an account?</Link>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = ({userReducer}) => {
    return {
        userProfile: userReducer
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (user) => dispatch(setUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
