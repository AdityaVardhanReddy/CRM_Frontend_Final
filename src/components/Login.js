// import React from 'react'
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Axios from 'axios'


// function Login() {
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()

//     Axios.defaults.withCredentials = true;
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         Axios.post('http://localhost:8000/login', {email, password})
//         .then((result)=>{
//             console.log(result)
//             if(result.data==="Success"){
//                 navigate("/");
//             }
//             else{
//               console.log("Data did'nt came back");
//             }
        
//         })
//         .catch(err=>console.log(err))
//     }
//     return(
//         <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             Login
//           </button>
//           </form>
//           <p>Already Have an Account</p>
//           <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
//             Sign Up
//           </Link>
        
//       </div>
//     </div>
//     )
// }

// export default Login;
// LoginPage.js
// import React from 'react';

// const LoginPage = () => {
//   // Your login component logic goes here
//   return (
//     <div>
//       <h2>Login Page</h2>
//       {/* Login form */}
//     </div>
//   );
// };

// export default LoginPage;

//gpt


// //gpt

// // Login.js
// import React from 'react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post('http://localhost:8000/register', { email, password })
//       .then((result) => {
//         console.log(result);
//         if (result.data === 'Success') {
//           // Use the navigate function to navigate to "/register"
//           navigate('/register');
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               className="form-control rounded-0"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-success w-100 rounded-0"
//           >
//             Login
//           </button>
//         </form>
//         <p>Already Have an Account</p>
//         <Link
//           to="/register"
//           className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;
// Login.js
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   axios.defaults.withCredentials = true;

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8000/login', {
//         email,
//         password,
//       });

//       if (response.data === 'Success') {
//         // Navigate to "/register" upon successful login
//         navigate('/crm');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               autoComplete="off"
//               name="email"
//               className="form-control rounded-0"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               name="password"
//               className="form-control rounded-0"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="btn btn-success w-100 rounded-0"
//           >
//             Login
//           </button>
//         </form>
//         <p>Already Have an Account</p>
//         <Link
//           to="/register"
//           className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Import your CSS file for additional styling

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://crm-backend-7ikk.onrender.com/login', {
        email,
        password,
      });

      if (response.data === 'Success') {
        // Navigate to "/crm" upon successful login
        navigate('/crm');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
          >
            Login
          </button>
        </form>
        <p>Don't have an account?</p>
        <Link
          to="/register"
          className="btn btn-light w-100 border rounded-0 text-decoration-none"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
