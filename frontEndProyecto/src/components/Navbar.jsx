import '../assets/navBar.css';
import { CiUser } from "react-icons/ci";
import { FaNewspaper } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
export function NavBar() {
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, []);
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar">
                <div className="logo" onClick={() => {navigate('/')}} style={{cursor:"pointer"}}>Portal de estudiantes</div>
                <ul className="nav-links">
                    <li><a onClick={() => {navigate('/')}} style={{cursor:"pointer"}}><FaNewspaper/> Noticias</a></li>
                    <li><a href="calculadora"><CiCalculator1/> Calculadora</a></li>
                    <li><a onClick={() => {navigate('/FAQ')}}  style={{cursor:"pointer"}}><FaQuestion/> Preguntas y respuestas</a></li>
                    <li><a onClick={logout}  style={{cursor:"pointer"}}><CiUser></CiUser> Cerrar sesion</a></li>
                </ul>
            </nav>
        </>
    )
}