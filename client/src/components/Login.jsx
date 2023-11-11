const Login = () => {
    return (
            <div className="container">
                <section className="login-form">
                    <h1 className="login-heading">Log In</h1>
                    <form action="#">
                        <input type="email" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <div className="login-button-container">
                            <button className="login-button">Log In</button>
                        </div>
                    </form>
                </section>
            </div>

    );
};

export default Login;