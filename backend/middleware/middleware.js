import "dotenv/config";
import jwt from "jsonwebtoken";

export const authmiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }
    
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ error: "Invalid token" });
    }
};

// import { query } from "../config/db.js";
// import "dotenv/config";
// import jwt from "jsonwebtoken";

// export const authmiddleware = async (email, contrasena) => {
//     const consulta = "SELECT * FROM usuarios WHERE email = $1 AND contrasena = $2";
//     const values = [email, contrasena];
//     const { rowCount } = await query(consulta, values);
//     if (!rowCount)
//         throw (
//                 {   code: 404,
//                     message: "Credencial Invalida"
//                 })
// }