import axios from 'axios';

// const usersUrl = 'http://localhost:3003/users';
const usersUrl = 'https://crm-backend-7ikk.onrender.com';

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}


export const addUser = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}


// export const getAdmins = async (id) => {
//     id = id || '';
//     return await axios.get(`${usersUrl}/${id}`);
// }


// export const addAdmin = async (admin) => {
//     return await axios.post(`${usersUrl}/add`, admin);
// }

// export const deleteAdmin = async (id) => {
//     return await axios.delete(`${usersUrl}/${id}`);
// }

// export const editAdmin = async (id, admin) => {
//     return await axios.put(`${usersUrl}/${id}`, admin)
// }