import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from '../components/usuarios/UserForm';
import UserGrid from '../components/usuarios/UserGrid';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = async () => {
        const res = await axios.get('http://localhost:3000/usuarios/usuarios');
        setUsers(res.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="User">
            <h1>Usuario del sistema</h1>
            <UserForm fetchUsers={fetchUsers} editingUser={editingUser} setEditingUser={setEditingUser} />
            <UserGrid users={users} fetchUsers={fetchUsers} setEditingUser={setEditingUser} />
        </div>
    );
};

export default Users;
