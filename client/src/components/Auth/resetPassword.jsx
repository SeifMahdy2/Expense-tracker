
// import React from "react";
// import * as Components from './Components';
// import { useState } from "react";
// import axios from "axios"
// import { useNavigate, useParams } from 'react-router-dom'



// import React from "react";
// import * as Components from './Components';
// import { useState } from "react";
// import axios from "axios"
// import { useNavigate } from 'react-router-dom'
// // import { Link } from "react-router-dom";

// axios.defaults.withCredentials = true;
// function resetPassword() {
//     const [signIn, toggle] = React.useState(true);
//     //for Login
//     const [password, setPassword] = useState();
//     const [errors, setErrors] = useState({});
//     const [id,token] =useParams();

//     //for Signup
    
//     const navigate = useNavigate()


//   const handleSubmit_login = (e) => {
//     e.preventDefault()
//     axios.post(`http://localhost:3001/reset-password${id}${token}`, {password})
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
//             <Components.Title>reset password</Components.Title>
//             <Components.Paragraph>new password</Components.Paragraph>
//             <Components.Input type='password' placeholder='password' autoComplete="off" Change={(e)=>setPassword(e.target.value)}/>
//             <Components.Button>update</Components.Button>
//         </Components.Form>
//    </Components.SignInContainer>
//      )
//     }
// export default resetPassword;
