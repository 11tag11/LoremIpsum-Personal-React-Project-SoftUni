import { useState, useContext } from "react";
import * as userService from '../../services/userService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import styles from './Login.module.css';

const formInitialState = {
    email: '',
    password: '',
};

const Login = () => {
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
        userService.loginUser(values)
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

    const { values, onChange, onSubmit } = useForm(submitHandler, formValues);

    return (
        <div className={styles.container}>
            <section className={styles.loginForm}>
                <h1 className={styles.loginHeading}>Log In</h1>
                <form action="#" method="POST" onSubmit={onSubmit}>
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

                    <div className={styles.loginButtonContainer}>
                        <button
                            type="submit"
                            disabled={(Object.values(errors).some(x => x)
                                || (Object.values(values).some(x => x == '')))}
                            className={styles.loginButton}
                        >Log In</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Login;