import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate(); // Hook para naveg
  const handleBackClick = () => {
    navigate('/');  // Navegar a la lista de productos
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/productos/productos/${id}`);
        setProducto(response.data);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={producto.img} alt={producto.titulo} className="img-fluid rounded shadow" />
      </div>
      <div className="col-md-6">
        <h1 className="display-4">{producto.titulo}</h1>
        <p className="lead"><strong>Descripción:</strong> {producto.descripcion}</p>
        <p className="lead"><strong>Características:</strong> {producto.caracteristicas}</p>
        <p className="lead"><strong>Precio:</strong> ${producto.price}</p>
        <p className="lead"><strong>Cantidad:</strong> {producto.cantidad}</p>
        
        <button onClick={handleBackClick} className="btn btn-secondary mt-3 ml-2">Volver</button>
    </div>
  </div>
  </div>
  );
};

export default ProductDetails;
