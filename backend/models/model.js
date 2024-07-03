import "dotenv/config";
import { pool } from '../config/connection.js'

//----( Consultas Productos

const getProductById = async (id) => {
    try {
      const consulta = "SELECT * FROM productos WHERE id = $1";
      const values = [id];
      const { rows } = await pool.query(consulta, values);
      return rows[0];
    } catch (error) {
      console.log(error);
    }
  };

//---crear
const createProductos = async(titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id) => {
    try { 
            const consulta = "INSERT INTO productos VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)"
            const values = [titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id]
            const { rows } = await pool.query(consulta, values)
    } catch (error) 
    {
            console.log(error)
    }   
}

//Obtener-consultar
//mvc
const getProductos = async() => {
    try {
        const consulta = "SELECT * FROM productos"
        const { rows } = await pool.query(consulta)
        return rows
    } catch (error) {
        console.log(error)
    }
}

//actualiza-modifica
const  updateProductos = async(codigo, descripcion, id) => {
    try {
        const consulta = "UPDATE productos SET codigo=$1, descripcion=$2 WHERE id=$3";
        const values = [codigo, descripcion, id];
        const results = await pool.query(consulta, values);
        console.log(results)
        
    } catch (error) {
        console.log(error)
        
    }
}
//Delete
const deleteProductos = async(id) => {
    try {
        const consulta = "DELETE FROM productos WHERE id = $1";
        const values = [id];
        const results = await pool.query(consulta, values);
        console.log("Producto Eliminado")  
    } catch (error) {
        console.log(error)        
    }
}
//----) Consultas Productos
//----( Consultas Usuario
//---crear
const createUsuarios = async(nombre, email, contrasena) => {
    try { 
            const consulta = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3)"
            const values = [nombre, email, contrasena]
            const { rows } = await pool.query(consulta, values)
    } catch (error) 
    {
            console.log(error)
    }   
}
//Obtener-consultar
const getUsuarios = async() => {
    try {
        const consulta = "SELECT * FROM usuarios"
        const { rows } = await pool.query(consulta)
        return rows
    } catch (error) {
        console.log(error)
    }
 
}
//actualiza-modifica
const  updateUsuarios = async(nombre, email, contrasena, id) => {
    try {
        const consulta = "UPDATE usuarios SET nombre=$1, email=$2, contrasena=$3 WHERE id=$4";
        const values = [nombre, email, contrasena, id];
        const results = await pool.query(consulta, values);
        console.log(results)
        
    } catch (error) {
        console.log(error)
        
    }
}
//Delete
const deleteUsuarios = async(id) => {
    try {
        const consulta = "DELETE FROM usuarios WHERE id = $1";
        const values = [id];
        const results = await pool.query(consulta, values);
        console.log("Producto Eliminado")  
    } catch (error) {
        console.log(error)        
    }
}
//----) Consultas Usuarios

export const model = {
    getProductById,
    getProductos,
    createProductos,
    updateProductos,
    deleteProductos,

    getUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios,
}