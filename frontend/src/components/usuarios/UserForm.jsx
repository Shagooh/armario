import { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
        const [nombre, setNombre] = useState('');
        const [email, setEmail] = useState('');
        const [contrasena, setContrasena] = useState('');

    useEffect(() => {
        if (editingUser) {
            setNombre(editingUser.nombre);
            setEmail(editingUser.email);
            setContrasena(editingUser.contrasena);
        }
    }, [editingUser]);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (editingUser) {
            await axios.put(`http://localhost:3000/usuarios/${editingUser.id}`, { nombre, email, contrasena });
            setEditingUser(null);
        } else {
            await axios.post('http://localhost:3000/usuarios', { nombre, email, contrasena });
        }
        setNombre('');
        setEmail('');
        setContrasena('');
        fetchUsers();
    };

    return (
        <div className="container">
        <h1 className="text-center mt-5">Agregar Usuario</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Contraseña</label>
                    <input type="text" className="form-control" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                </div>
                <button className="btn btn-primary" type="submit">{editingUser ? "Actualizar Usuario" : "Agregar Usuario"}</button>
            </form>
        </div>
    );
};

export default UserForm;
