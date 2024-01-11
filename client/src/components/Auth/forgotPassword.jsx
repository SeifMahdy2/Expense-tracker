// import React from "react";
// import * as Components from './Components';
// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'



// import React from "react";
// import * as Components from './Components';
// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'
// // import { Link } from "react-router-dom";

// function forgotPassword() {
//     const [signIn, toggle] = React.useState(true);
//     //for Login
//     const [email, setEmail] = useState()
//     const [errors, setErrors] = useState({})

//     //for Signup
    
//     const navigate = useNavigate()

//   const handleSubmit_login = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3001/forgot-password', {email,password})
//     .then(result => {
//         navigate('/')
        
//       })
//     .catch(err=> console.log(err))


// }
// const handleSubmit_signup = (e) => {
//   e.preventDefault()
//   axios.post('http://localhost:3001/signup', {name,email_signup,password_signup})
//   .then(result => {
//     console.log(result)
//     if (result.data === "Success"){
//       navigate('/Login')
//       }
//     })
//   .catch(err=> console.log(err))
// }
//      return(
//         <Components.SignInContainer signinIn={signIn}>
//         <Components.Form onSubmit={handleSubmit_login}>
//             <Components.Title>forgot password</Components.Title>
//             <Components.Input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
//             <Components.Button>Send</Components.Button>
//         </Components.Form>
//    </Components.SignInContainer>
//      )
//     }
// export default forgotPassword;
