import { model } from "../models/model.js";
import pkg from "jsonwebtoken";
const { verify, sign } = pkg;

const test = async (req, res) => {
  try {
    res.send("Hola Mundo desde expresssss");
  } catch (error) {
    console.log(error);
  }
};
const readProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const results = await model.getProductById(id);
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const readProduct = async (req, res) => {
  try {
    const results = await model.getProductos();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res) => {
  const {titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id} = req.body;
  const consulta = await model.createProductos(titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id);
  res.send("Producto agregado");
};

const updateProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const { codigo, descripcion } = req.body;
    await model.updateProductos(codigo, descripcion, id);
    res.send("Producto actualizado");
  } catch (error) {
    console.log(error);
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteProductos(id);
    res.send("Usuario eliminado con exito");
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { nombre, email, contrasena } = req.body;
    const consulta = await model.createUsuarios(nombre, email, contrasena);
    res.send("Usuario agregado");
  } catch (error) {
    console.log(error);
  }
};

const readUsers = async (req, res) => {
  try {
    const results = await model.getUsuarios();
    res.json(results);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre, email, contrasena } = req.body;
    await model.updateUsuarios(nombre, email, contrasena, id);
    res.send("Usuario actualizado");
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await model.deleteUsuarios(id);
    res.send("Usuario eliminado con exito");
  } catch (error) {
    console.log(error);
  }
};

// Las paginas autorizadas deben ser manejadas por el middleware de autenticacion
const token = (req, res) => {
  const token = null;
  res.json({ token });
};

const publica = (req, res) => {
  res.send("Pagina pública");
};

const privada = (req, res) => {
  try {
    const token = req.header.authorization.split("Bearer ")[1];
    verify(token, process.env.SECRET);
    res.send("Pagina privada");
  } catch (error) {
    res.status(500).json({ message: "Acceso no autorizado" });
  }
};

const login = async (req, res) => {
  try {
    const { email, contrasena } = req.body;
    await verificaCredencial(email, contrasena);
    const token = sign({ email }, process.env.SECRET, { expiresIn: "10m" });
    res.json({ token });
  } catch (error) {
    res.status(404), res.json({ message: error.message });
  }
};

export const controller = {
  test,
  readProductById,
  readProduct,
  createProduct,
  updateProductById,
  deleteProductById,
  createUser,
  readUsers,
  updateUser,
  deleteUser,
  token,
  publica,
  privada,
  login,
};
