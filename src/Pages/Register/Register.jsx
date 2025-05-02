import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="font-semibold text-center text-2xl py-5">Register your account</h2>
                <div className="card-body">
                  <fieldset className="fieldset">
                  <label className="label">Your Name</label>
                  <input type="text" className="input" placeholder="Enter your name" />
                  <label className="label">Photo URL</label>
                  <input type="text" className="input" placeholder="Enter your password" />
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Enter your password" />
                    
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className="font-semibold text-center pt-4">Dont’t Have An Account ? <Link className="text-secondary" to={"/auth/login"}>Register</Link></p>
                  </fieldset>
                </div>
              </div>
            </div>
    );
};

export default Register;