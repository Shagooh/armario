import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductosList.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

//const urlBase = "http://localhost:3000/productos/productos";
const ProductosListPrivada = () => {
  const [allProductos, setAllProductos] = useState([]);
  const [productos, setProductos] = useState([]);

  // Función para manejar la eliminación del producto
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/productos/productos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Filtra el producto eliminado del estado allProductos
        const updatedProductos = allProductos.filter(
          (producto) => producto.id !== id
        );
        // Actualiza el estado allProductos
        setAllProductos(updatedProductos);
        alert("Producto eliminado con éxito");
      } else {
        alert("Error al eliminar el producto");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al eliminar el producto");
    }
  };

  const getProductos = async () => {
    
    try {
      const resuLtado = await fetch(`${BASE_URL}/productos/productos`);
      const data = await resuLtado.json();
      if (data) {
        setProductos(data);
      }
    } catch (error) {
      console.error("Error al cargar información", error);
    }
  };
  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5" style={{ color: "#5B1B68" }}>Lista de Productos</h1>
      <div className=" container mx-auto gap-10 grid-productos text-center">
      {productos.map((producto) => {
        return (
          <div className="mb-5" key={producto.id} style={{ width: 250 }}>
            <img
              src={producto.img}
              className="card-img-top img-fluid"
              alt="..."
              style={{ borderRadius: 66 }}
            />
            <div className="card-body mb-3">
              <div />
              <h5 className="card-title">{producto.titulo}</h5>
              <p className="card-text">Precio: ${producto.price}</p>
              <p className="card-text">Stock: {producto.cantidad}</p>

              <Link
                to={`/producto/${producto.id}`}
                className="btn btn-primary m-3 rounded-xl"
                style={{ background: "#64467e" , border: "none"}}
              >
                Caracteristicas
              </Link>
              <button
                className="btn btn-primary m-3"
                onClick={() => alert("no puedes editar")}
                style={{ background: "#ff86c3", border: "none" }}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(producto.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};
export default ProductosListPrivada;


