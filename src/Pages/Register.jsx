import Logins from '../Assets/Img/Login.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

import React, { useState } from 'react'

export const Register = () => {
    const [success, setSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        let result;
        
        try {
            let register = await axios.post('http://localhost:8080/api/auth/signup', {
            // let register = await axios.post('http://localhost:8000/api/register', {
                username: username,
                email: email,
                password: password
            });

            result = await register;
            console.log(result);
            setSuccess(true);

            setTimeout(() => {
                navigate("/login");
            },2000);

        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }

    }


  return (
    <div>
        <div className="row">
            <div className="col-7">
                <div className="images">

                    <img src={Logins} alt="" style={{height: `100%`}}/>
                </div>
            </div>
            <div className="col-5 d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center align-content-center" style={{width:`18rem`}}>
                    <h4 className="mb-5 fw-bold">Create new Account</h4>
                    {success && (
                    <div class="alert alert-success" role="alert">
                        Sukses mendaftar
                    </div>
                    )}
                    <form onSubmit={Auth}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="row px-3">
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </div>
                        <p className="fw-lighter text-center"><small>Already have an account? <Link to="/login">Login</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
