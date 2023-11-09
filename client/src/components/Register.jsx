// 07.11. Successful :)
import { useEffect, useState } from "react";
import * as userService from '../services/userService';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
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

    const submitHandler = () => {
        const userData = {
            username,
            email,
            password,
        };

        userService.createUser(userData)
        .then((response) => {
            console.log('Successful registration!', response);
            resetRegisterForm();
        })
        .catch((error) => {
            console.log('Unsuccessful registration!', error);
        })
    }

    return (
        <div className="container">
            <section className="register-form">
                <h1 className="register-heading">Sign Up</h1>
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

                    <div className="register-button-container">
                        <button 
                        type="button" 
                        className="register-button"
                        onClick={submitHandler}>Sign Up</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Register;