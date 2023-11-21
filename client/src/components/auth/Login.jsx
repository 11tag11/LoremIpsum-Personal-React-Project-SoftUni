import { useState, useEffect } from "react";
import * as userService from '../../services/userService';
import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

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
        <div className={styles.container}>
            <section className={styles.loginForm}>
                <h1 className={styles.loginHeading}>Log In</h1>
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

                    <div className={styles.loginButtonContainer}>
                        <button
                            type="button"
                            className={styles.loginButton}
                            onClick={submitHandler}>Log In</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;