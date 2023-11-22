import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../service/api';
const initialValue = {
    adminname: '',
    adminemail:'',
    password:''
}
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const AddUser= () => {
    const [user, setUser] = useState(initialValue);
    const { adminname,adminemail,password} = user;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Admin</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">AdminName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adminname' value={adminname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">AdminEmail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='adminemail' value={adminemail} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='password' value={password} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Admin</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;