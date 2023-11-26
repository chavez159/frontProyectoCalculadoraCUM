import '../assets/navBar.css';
import { CiUser } from "react-icons/ci";
import { FaNewspaper } from "react-icons/fa";
import { CiCalculator1 } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
export function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">Portal de estudiantes</div>
                <ul className="nav-links">
                    <li><a href="#"><FaNewspaper/> Noticias</a></li>
                    <li><a href="#"><CiCalculator1/> Calculadora</a></li>
                    <li><a href="#"><FaQuestion/> Preguntas y respuestas</a></li>
                    <li><a href="#"><CiUser></CiUser> Cerrar sesion</a></li>
                </ul>
            </nav>
        </>
    )
}