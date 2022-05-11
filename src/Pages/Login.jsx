import Logins from '../Assets/Img/Login.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";

import React, { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        let result;

        try {
            let register = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password
            });

            result = await register;
            //console.log(result.data.data.role);
            console.log(result.data.token);
            //const decoded = jwt_decode(result.data.token);
            //console.log(decoded);
            //navigate("/");

            localStorage.setItem('login', true);

            if(result.data.data.role != 'admin'){
                navigate("/");
            }else{
                navigate("/admin");
            }


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
                    <h4 className="mb-5 fw-bold">Welcome,Admin BCR</h4>
                    <form onSubmit={Auth}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="row px-3">
                            <button type="submit" className="btn btn-primary">Sign In</button>
                            <button className="btn btn-outline-success btn-sm mt-2">Sign In with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
