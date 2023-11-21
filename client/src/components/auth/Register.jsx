import { useEffect, useState } from "react";
import * as userService from '../../services/userService';
import { useNavigate } from "react-router-dom";
import styles from './Register.module.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const resetRegisterForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const confirmPasswordChangeHandler = (e) => {
        setConfirmPassword(e.target.value);
    };

    const submitHandler = async (e) => {
        const userData = {
            username,
            email,
            password,
        };

        try {
            await userService.createUser(userData);
            console.log('Successful registration!');
            resetRegisterForm();
        } catch (error) {
            //Here will add notification message later
            console.log('Unsuccessful registration!', error);
        };
        navigate('/latestTopics');
    };

    return (
        <div className={styles.container}>
            <section className={styles.registerForm}>
                <h1 className={styles.registerHeading}>Sign Up</h1>
                <form action="#" method="">
                    <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={usernameChangeHandler}
                    name="username" 
                    placeholder="username" />
                
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
                    placeholder="password"  />

                    <input 
                    type="password" 
                    id="confirm-password"
                    value={confirmPassword} 
                    onChange={confirmPasswordChangeHandler} 
                    name="confirm-password" 
                    placeholder="confirm password" />

                    <div className={styles.registerButtonContainer}>
                        <button 
                        type="button" 
                        className={styles.registerButton}
                        onClick={submitHandler}>Sign Up</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Register;