
// import {AppBar,Toolbar,styled}from '@mui/material';
// import { NavLink } from 'react-router-dom';
// const Header=styled(AppBar)`
//     background :#111111
// `;

// const Tabs=styled(NavLink)`
//     font-size:20px;
//     margin-right:20px;
//     color:inherit;
//     text-decoration:none;
// `
// const NavBar=()=>{
//     return(
//         <Header position="static">
//             <Toolbar>
//                 <Tabs to="./crm" exact>CRM</Tabs>
//                 <Tabs to="all" exact>All Customers</Tabs>
//                 <Tabs to="add" exact>Add Customer</Tabs>
//                 <Tabs to="admin" exact>Add Admin</Tabs>
//                 <Tabs to="alladmin" exact>All Admin</Tabs>
//                 <Tabs to="/" exact align="right">Logout</Tabs>
//             </Toolbar>
//         </Header>
//     );
// }

// export default NavBar;


import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #111111;
`;

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    color: inherit;
    text-decoration: none;
`;

const RightAlignedTabs = styled('div')`
    margin-left: auto;
`;

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs to="./crm" exact>CRM</Tabs>
                <Tabs to="all" exact>All Customers</Tabs>
                <Tabs to="add" exact>Add Customer</Tabs>
                <Tabs to="admin" exact>Add Admin</Tabs>
                <Tabs to="alladmin" exact>All Admin</Tabs>
                
                {/* Use RightAlignedTabs to align the "Logout" tab to the right */}
                <RightAlignedTabs>
                    <Tabs to="/" exact>Logout</Tabs>
                </RightAlignedTabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;
