import { useState, useEffect } from "react";
import * as userService from '../../services/userService';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

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

    const submitHandler = async (e) => {
        const userData = {
            email,
            password,
        };

        try {
            await userService.loginUser(userData);
            console.log('Successful login!');
            resetLoginForm();
        } catch (error) {
            //Here will add notification message later
            console.log('Unsuccessful login!', error);
        };
        navigate('/latestTopics');
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
                        placeholder="email" />


                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={passwordChangeHandler}
                        name="password"
                        placeholder="password" />

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