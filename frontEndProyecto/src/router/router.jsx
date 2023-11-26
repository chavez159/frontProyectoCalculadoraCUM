import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";



const Location = () => {

    return (
        <Routes>
            {/*VISTAS PÚBLICAS*/ }
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registro/>} />
        </Routes>
    );
};

export const AppRouter = () => {
    return (
    <Router>
        <div>
            <Location/>
        </div>
    </Router>
    );
};

