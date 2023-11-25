import { useState, useEffect, useContext } from "react";
import * as userService from '../../services/userService';
import { AuthContext } from '../../contexts/AuthContext';

import { useNavigate } from "react-router-dom";
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

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

    

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        }
        userService.loginUser(userData)
            .then(user => {
                setAuth(user);
                navigate('/latestTopics');

                console.log(user);
            })
            .catch(error => {
                setHasServerError(true);
                setServerError(error.message);
            });

        resetLoginForm();
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