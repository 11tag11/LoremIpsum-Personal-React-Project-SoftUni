// 11.11.
import { useState, useEffect } from "react";
import * as userService from '../services/userService';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetLoginForm = () => {
        setEmail('');
        setPassword('');
    };

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = () => {
        const userData = {
            email,
            password,
        };

        userService.loginUser(userData)
        .then((response) => {
            console.log('Successful login!', response);
            resetLoginForm();
        })
        .catch((error) => {
            console.log('Unsuccessful login!', error);
        })
    };

    return (
            <div className="container">
                <section className="login-form">
                    <h1 className="login-heading">Log In</h1>
                    <form action="#" method="">
                        <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={emailChangeHandler}
                        name="email"
                        placeholder="Enter your email" />


                        <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={passwordChangeHandler}
                        name="password"
                        placeholder="Enter your password" />

                        <div className="login-button-container">
                            <button 
                            type="button"
                            className="login-button"
                            onClick={submitHandler}>Log In</button>
                        </div>
                    </form>
                </section>
            </div>
    );
};

export default Login;