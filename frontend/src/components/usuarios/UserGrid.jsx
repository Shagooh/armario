import React from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserGrid = ({ users, fetchUsers, setEditingUser }) => {
    const deleteUser = async (id) => {
        await axios.delete(`${BASE_URL}/usuarios/${id}`);
        fetchUsers();
    };

    const editUser = (user) => {
        setEditingUser(user);
    };

    return (
        <div className="container">
            <h2 className="text-center mt-5">Lista de Usuarios</h2>
            <table className="table table-hover">
                <thead>
                    <tr className="justify-content-md-end">
                        <th>ID</th>
                       {/*  <th>Nombre</th> */}
                        <th>Email</th>
                        <th style={{paddingLeft: "25%"}}>Acciones</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.usuario_id}</td>
                            {/* <td>{user.nombre}</td> */}
                            <td>{user.email}</td>
                            <td>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn btn-danger me-md-2"onClick={() => deleteUser(user.id)}>Eliminar</button>
                                <button className="btn btn-success" onClick={() => editUser(user)}>Editar</button>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserGrid;
