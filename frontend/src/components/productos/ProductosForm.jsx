import { useState } from "react";

const urlBase = "http://localhost:3000/productos"
const ProductosForm = () => {
  const [titulo, setTitulo] = useState("");

  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState("");
  const [caracteristicas, setCaracteristicas] = useState("");
  const [price, setPrice] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [usuario_id, setUsuario_id] = useState("");


const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const body = { titulo, descripcion, img, caracteristicas, price, cantidad, usuario_id }
        fetch(`${urlBase}/productos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)

        })
        setTitulo('')
        setDescripcion('')
        setImg('')
        setCaracteristicas('')
        setPrice('')
        setCantidad('')
        setUsuario_id('')
        
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div className="container">
      <h1 className="text-center mt-5">Agregar Producto</h1>

      <form onSubmit={handleSubmit}>
      
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Titulo
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
                      placeholder="Ej. Ingresa titulo"
                      value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput3" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
                      placeholder="Ej. Ingresa descripción"
                      value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput4" className="form-label">
          Caracteristicas
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput4"
                      placeholder="Ingresa caracteristicas"
                      value={caracteristicas}
            onChange={(e) => setCaracteristicas(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput5" className="form-label">
            Cantidad
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput5"
                      placeholder="Ingresa cantidad"
                      value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput7" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput7"
                      placeholder="Valor"
                      value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput6" className="form-label">
            Link imagen
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput6"
                      placeholder="Ingresa link de la imagen"
                      value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="exampleFormControlInput7" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput7"
                      placeholder="Ingresa Usuario"
                      value={usuario_id}
            onChange={(e) => setUsuario_id(e.target.value)}
          />
        </div>


        <button className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductosForm;