import cors from "cors";
import express from "express";
import "dotenv/config";
import productosRoute from './routes/productos.route.js'; //donde estan las rutas http que se llaman desde browse
import userRoute from "./routes/user.route.js";

export const app = express() //app

//middleware
app.use(express.json())
app.use(cors());
app.use("/productos", productosRoute)
app.use("/usuarios", userRoute);

const PORT = process.env.PORT || 3000 //sino encuentra el PORT en el Server, trabajará con el 3005
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))
