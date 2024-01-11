import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Login_Signup from './components/Auth/Login_signup'
import Home from './components/Home_Page/Home'
import Main from './components/Main_Page/Main_Page'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login_Signup" element={<Login_Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
