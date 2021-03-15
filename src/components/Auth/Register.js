import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import InputField from '../InputField'
import './index.scss'

import {register , setUser} from '../../actions/user'
import { connect } from 'react-redux'

function Register({ userProfile, loginUser}) {
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== repeatPassword){
            alert('Passwords don\'t match');
            return;
        }
        
        const {status, description, user} = register({email, name, password});
        console.log(user)
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
                <form className="register-form" onSubmit={handleSubmit}>
                    <InputField name="name" label="Enter your name" value={name} onChange={setName}/>
                    <InputField name="email" label="Enter your email" value={email} onChange={setEmail}/>
                    <InputField name="password" label="Create your password" value={password} onChange={setPassword}/>
                    <InputField name="password" label="Repeat your password" value={repeatPassword} onChange={setRepeatPassword}/>
                    <button className="register-form__button" type="submit">Register</button>
                    <Link to="/login">Have an account?</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)
