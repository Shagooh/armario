import { useState, useEffect } from "react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Cuenta (){

    const [usuarios, setUsuarios] = useState([]);

    const getUsuarios = async () => {
        try {
          const resuLtado = await fetch(`${BASE_URL}/usuarios/usuarios/1`);
          const data = await resuLtado.json();
          console.log(data)
          if (data) {
            setUsuarios(data);
          }
        } catch (error) {
          console.error("Error al cargar información", error);
        }
      };
      useEffect(() => {
        getUsuarios();
    }, []);


    return (
        <>
        <h1>Mi cuenta</h1>
        {usuarios.map((usuario) => {
            return (
            <ul className="list-group" key={usuario.id}>
                <li className="list-group-item">Nombre: {usuario.username}</li>
                <li className="list-group-item">Correo: {usuario.email}</li>
                <li className="list-group-item">Direccion: </li>
            </ul>
            )})}
        </>
    )
}