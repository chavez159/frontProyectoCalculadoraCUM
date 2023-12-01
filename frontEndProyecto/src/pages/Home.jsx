import { NavBar } from "../components/Navbar";
import '../assets/home.css';
import { useEffect, useState } from "react";
import { traerNoticias } from "../services/user";
import { Noticias } from "../components/Noticia";
export function Home() {
    const [noticias, setNoticias] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        const getNoticias = async () => {
            const response = await traerNoticias(token);
            const data = await response.json();
            console.log(data);
            if(response.status === 400){
                localStorage.clear();
                window.location.href = '/login';
            }else{

            
            setNoticias(data);
            }
        }
        getNoticias();
      
    }, []);
    return (
        <div>
            <NavBar />
            <div className="banner">
                <img src="https://comunica.edu.sv/wp-content/uploads/2019/09/Snapchat-550427629-1024x648.jpg" alt="Banner" />
            </div>
                <center><h3 >Noticias</h3></center>
            <div className="noticias">
                {noticias.map((noticia) => {
                    return (
                       <Noticias
                       title={noticia.titulo}
                          content={noticia.cuerpo}
                            imageUrl={noticia.imagen}
                       />
                    )
                })}
            </div>
        </div>
    )
}