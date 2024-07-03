import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

/* const BASE_URL = import.meta.env.VITE_BASE_URL; */

const initialStateToken = sessionStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
    const [token, setToken] = useState(initialStateToken);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", token);
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  const loginWithEmailAndPassword = async (email, password) => {
    // const response = await fetch(`${BASE_URL}/users/login`, {
     const response = await fetch(`http://localhost:3000/usuarios/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setToken(data.token || null);

    return data;
  };

  const registerWithEmailAndPassword = async (email, password) => {
    // const response = await fetch(`${BASE_URL}/users/register`, {
    const response = await fetch(`http://localhost:3000/usuarios/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  };

  const logout = () => {
    setToken(null);
  };


  return (
    <UserContext.Provider
      value={{
        loginWithEmailAndPassword,
        registerWithEmailAndPassword,
        token,
        logout}}
        >{children}
    </UserContext.Provider>
  );
};

export default UserProvider;
