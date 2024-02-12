import { useState, useContext } from "react";
import * as userService from '../../services/userService';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styles from './Register.module.css';

const formInitialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    const resetFormHandler = () => {
        setFormValues(formInitialState);
        setErrors({});
    };

    const submitHandler = (values) => {
        userService.createUser(values)
            .then(user => {
                setAuth(user);
                navigate('/latestTopics');
            })
            .catch(error => {
                setHasServerError(true);
                setServerError(error.message);
            });
        resetFormHandler();
    };

    const userNameValidation = () => {
        if (values.username.length < 3) {
            setErrors(state => ({
                ...state,
                username: 'Username should be at least 3 characters'
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }));
            }
        }
    };

    function validationEmail(email) {
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegExp.test(email);
    };

    const emailValidation = () => {
        if (!validationEmail(values.email)) {
            setErrors(state => ({
                ...state,
                email: 'Email is not valid format',
            }));
        } else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    };

    const passwordValidation = () => {
        if (values.password.length < 5) {
            setErrors(state => ({
                ...state,
                password: 'Password must be at least 5 characters',
            }));
        } else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: '' }));
            }
        }
    };

    const confirmPasswordValidation = () => {
        if (values.confirmPassword != values.password) {
            setErrors(state => ({
                ...state,
                confirmPassword: 'Password and confirm password must match',
            }));
        } else {
            if (errors.confirmPassword) {
                setErrors(state => ({ ...state, confirmPassword: '' }));
            }
        }
    };

    const { values, onChange, onSubmit } = useForm(submitHandler, formValues);

    return (
        <div className={styles.container}>
            <section className={styles.registerForm}>
                <h1 className={styles.registerHeading}>Sign Up</h1>
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="username"
                        value={values.username}
                        onChange={onChange}
                        onBlur={userNameValidation}
                    />
                    {errors.username && (
                        <p className={styles.usernameErrorMessage}>{errors.username}</p>
                    )}

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={emailValidation}
                    />
                    {errors.email && (
                        <p className={styles.emailErrorMessage}>{errors.email}</p>
                    )}

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="password"
                        value={values.password}
                        onChange={onChange}
                        onBlur={passwordValidation}
                    />
                    {errors.password && (
                        <p className={styles.passwordErrorMessage}>{errors.password}</p>
                    )}

                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="confirm password"
                        value={values.confirmPassword}
                        onChange={onChange}
                        onBlur={confirmPasswordValidation}
                    />
                    {errors.confirmPassword && (
                        <p className={styles.confirmPasswordErrorMessage}>{errors.confirmPassword}</p>
                    )}

                    <div className={styles.registerButtonContainer}>
                        <button
                            type="submit"
                            disabled={(Object.values(errors).some(x => x)
                                || (Object.values(values).some(x => x == '')))}
                            className={styles.registerButton}
                        >Sign Up</button>
                    </div>
                </form>
            </section>
        </div>
    );
}
export default Register;