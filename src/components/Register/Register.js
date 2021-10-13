import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h3>Please Register</h3>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" /> <br />
                    <input type="password" name="" id="" placeholder="Your Password" /> <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" /> <br />
                </form>
                <button className="btn-regular">Create Account</button>
                <p>Already User? <Link to="/login">Login</Link></p>
                <button className="btn-regular">Login with Google</button>
            </div>
        </div>
    );
};

export default Register;