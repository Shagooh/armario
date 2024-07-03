import ProductosListPrivada from "../components/productos/ProductosListPrivada";
import ProductosForm from "../components/productos/ProductosForm";

const Productos = () => {


    return (
        <div className="App">
            <ProductosForm  />
            <ProductosListPrivada />
            {/* <ProductGrid products={products} fetchProducts={fetchProducts} setEditingProduct={setEditingProduct} /> */}
        </div>
    );
};

export default Productos;
