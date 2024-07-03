import { useContext, useState } from "react";
import { UserContext } from "../providers/UserProvider";

const RegisterPage = () => {
  const { registerWithEmailAndPassword } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await registerWithEmailAndPassword(email, password);
    alert(response?.message || "Algo ha salido mal");
  };

  return (
    <div className="container" style={{ width: '100%', padding: "150px" }}>
      <h1 style={{ color: "#5B1B68"}}>Registro</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: "#5B1B68"}}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Ingresa tu email"
            style={{ background: "#fff3" , border: "none"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ color: "#5B1B68"}}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Ingresa tu contraseña"
            style={{ background: "#fff3" , border: "none"}}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ background: "#64467e" , border: "none"}} >
          Create account
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
