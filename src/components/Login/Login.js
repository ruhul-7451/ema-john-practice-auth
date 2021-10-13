import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'

    const handleSignInGoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    // console.log('came from', location.state?.from);

    return (
        <div className="login-form">
            <div>
                <h3>Please Login</h3>
                <form>
                    <input type="email" placeholder="Your Email" /> <br />
                    <input type="password" placeholder="Your Password" /> <br />

                </form>
                <p>New User? <Link to="/register">Create Account</Link></p>
                <button className="btn-regular" onClick={handleSignInGoogle}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;