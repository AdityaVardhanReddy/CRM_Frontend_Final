import './App.css';
import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import CRM from './components/CRM';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import AddAdmin from './components/AddAdmin';
import AllAdmin from './components/AllAdmin';
import EditAdmin from './components/EditAdmin';
import SignUp from './components/SignUp.js';
import Login from './components/Login.js';

import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/register" />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <NavBar/>
    <Routes>
      <Route path="/crm" element={<CRM />} />
      <Route path="/all" element={<AllUsers />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/admin" element={<AddAdmin />} />
      <Route path="/alladmin" element={<AllAdmin />} />
      <Route path="/edit/admin/:id" element={<EditAdmin />} />
      <Route path="/edit/user/:id" element={<EditUser />} />
    </Routes>
    
  </BrowserRouter>
  );
}

export default App;



