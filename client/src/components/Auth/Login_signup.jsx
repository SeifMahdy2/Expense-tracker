import React from "react";
import * as Components from './Components';
import { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Login_Signup() {
  const [signIn, toggle] = React.useState(true);
  //for Login
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  //for Signup
  const [Name, setName] = useState()
  const [email_signup, setEmail_signup] = useState()
  const [password_signup, setPassword_signup] = useState()


  const navigate = useNavigate()
const validateSignup = () => {
  if (!username || !Name || !email_signup || !password_signup) {
    return false; 
  }
  return true;
};

  const handleSubmit_login =  (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/Login', {username,password})
    .then(result => {
      console.log(result)
      if (!username || !password){
        window.alert("Please enter an email and password.");
      }
      if (result.data.success){
        navigate('/Main')
        }
      else{
        console.log(result.data.message);
      }
      })
    .catch(err=> console.log(err))
};
const handleSubmit_signup = (e) => {
  e.preventDefault();

  if (!validateSignup()) {
    window.alert("Please fill out all fields");
    return;
  }

axios.post("http://localhost:4000/Signup", {
  username,
  Name,
  email: email_signup,
  password: password_signup,
})
  .then((response) => {
    console.log(response);
      toggle(true)
  })
  .catch((err) => console.log(err));
};

  return(
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
              <Components.Form onSubmit={handleSubmit_signup}>
                  <Components.Title>Create Account</Components.Title>
                  <Components.Input type='text' placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/>
                  <Components.Input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                  <Components.Input type='email' placeholder='Email' onChange={(e)=>setEmail_signup(e.target.value)} />
                  <Components.Input type='password' placeholder='Password' onChange={(e)=>setPassword_signup(e.target.value)} />
                  <Components.Button>Sign Up</Components.Button>
              </Components.Form>
          </Components.SignUpContainer>
          <Components.SignInContainer signinIn={signIn}>
              <Components.Form onSubmit={handleSubmit_login}>
                  <Components.Title>Sign in</Components.Title>
                  <Components.Input type='text' placeholder='Username'onChange={(e)=>setUsername(e.target.value)} />
                  <Components.Input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                  <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                  <Components.Button>Sign In</Components.Button>
              </Components.Form>
          </Components.SignInContainer>
          <Components.OverlayContainer signinIn={signIn}>
              <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                  <Components.Title>Welcome Back!</Components.Title>
                  <Components.Paragraph>
                      To keep connected with us please login with your personal info
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                      Sign In
                  </Components.GhostButton>
                  </Components.LeftOverlayPanel>
                  <Components.RightOverlayPanel signinIn={signIn}>
                    <Components.Title>Hello, Friend!</Components.Title>
                    <Components.Paragraph>
                        Enter Your personal details and start journey with us
                    </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton> 
                  </Components.RightOverlayPanel>
              </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
  )
}

  

export default Login_Signup;