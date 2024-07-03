import "dotenv/config";
import bcript from "bcryptjs";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";

const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    await userModel.create({
      email,
      password: bcript.hashSync(password, 10),
    });

    return res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    console.log(error);

    if (error.code === "23505") {
      return res.status(400).json({ message: "Usuario ya existe" });
    }

    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOneEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }

    const isMatch = bcript.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales inválidas" });
    }

    // payload
    const payload = {
      email,
      user_id: user.user_id,
    };

    // token
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(200).json({
      message: "Has ingresado correctamente",
      token,
      email,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const userController = {
  login,
  register,
};
