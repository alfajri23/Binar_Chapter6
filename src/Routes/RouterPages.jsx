import React from 'react'
import {
    BrowserRouter as Browser,
    Routes,
    Route,
} from "react-router-dom";
import Detail from '../Pages/Detail';
import Home from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
import Result from '../Pages/Result';

const RouterPages = () => {
  return (
    <div>
        <Browser>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>

            <Routes>
                <Route path="/cari" element={<Result/>}></Route>
            </Routes>
            
            <Routes>
                <Route path="cari/detail/:id" element={<Detail/>}></Route>
            </Routes>

            <Routes>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>

            <Routes>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </Browser>
    </div>
  )
}

export default RouterPages