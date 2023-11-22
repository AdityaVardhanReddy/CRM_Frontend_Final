import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>AdminName</TableCell>
                    <TableCell>AdminEmail</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    user.password && (
                        <TRow key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.adminname}</TableCell>
                            <TableCell>{user.adminemail}</TableCell>
                            <TableCell>{user.password}</TableCell>
                            <TableCell>
                            <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/admin/${user._id}`}>
                                Edit Admin
                            </Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TRow>
                    )
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;