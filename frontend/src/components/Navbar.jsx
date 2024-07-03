import { useContext } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../providers/UserProvider";
import { RiLogoutBoxLine } from "react-icons/ri";

const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const Navbar = () => {
  const { token, logout } = useContext(UserContext);
  //{token ? (<> a </> ):() <> b </>)}
  return (
    
      <nav className="navbar navbar-expand-xl" style={{ position:'fixed', top:'0', width:'100%', backgroundImage: "radial-gradient(circle, rgb(174, 200, 238) 0%, rgb(171, 158, 247) 100%)", fontFamily: 'Roboto, sans-serif' }}>
        <Link className="navbar-brand" to="/" style={{ color: "#fff" }}><img 
              src="Logo.png"
              className="d-block"
              alt="..."
              style={{ width: "80px", height: "80px", borderRadius: "100%"}} 
            /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: "#fff" }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users" style={{ color: "#fff" }}>Usuarios</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/productos" style={{ color: "#fff" }}>Mis Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/privada" style={{ color: "#fff" }}>Mi Cuenta</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn " to="/" onClick={logout}><RiLogoutBoxLine style={{Zoomin:'100%', color: "#fff"}}/></Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: "#fff" }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={{ color: "#fff" }}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register" style={{ color: "#fff" }}>Registro</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    
  );
};

export default Navbar;
