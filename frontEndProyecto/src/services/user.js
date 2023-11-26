import { link } from "./generalLink"

const BASE_URL = link

export async function login (data) {
    const response = await fetch(`${BASE_URL}api/users/login`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              correo: data.correo,
             })
    })
    const respuesta = await response;
    return respuesta
}

export async function register (data) {
    const response = await fetch(`${BASE_URL}api/users/register`,{
        "method": "POST",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              nombre: data.nombre,
              usuario: data.usuario,
              correo: data.correo
             })
    })
    const respuesta = await response;
    return respuesta
}


export async function crearNoticia (data) {
    const response = await fetch(`${BASE_URL}api/users/register`,{
        "method": "POST",
        headers: {
            "Authorization": `Bearer ${data.token}`,
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
          
              nombre: data.nombre,
              usuario: data.usuario,
              correo: data.correo
             })
    })
    const respuesta = await response;
    return respuesta
}

export async function traerNoticias (token) {
    const response = await fetch(`${BASE_URL}api/noticias/traerTodasNoticias`,{
        "method": "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            },
    })
    const respuesta = await response;
    return respuesta
} 