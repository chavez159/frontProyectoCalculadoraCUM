import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Registro } from "../pages/Registro";
import { Calculadora } from "../pages/Calculadora";
import { FAQ } from "../pages/FAQ";
import { CrearFAQ } from "../pages/CrearFAQ";
import { MisFAQ } from "../pages/misFAQ";



const Location = () => {

    return (
        <Routes>
            {/*VISTAS PÚBLICAS*/ }
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registro/>} />
            <Route path="/calculadora" element={<Calculadora/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/FAQ" element={<FAQ/>} />
            <Route path="/crearFAQ" element={<CrearFAQ/>} />
            <Route path="/misFAQ" element={<MisFAQ/>} />
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

