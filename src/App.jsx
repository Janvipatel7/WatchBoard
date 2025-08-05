import { BrowserRouter, Route, Routes } from "react-router-dom"
import Watches from "./pages/Watches"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Login from "./pages/Login"
import { useEffect, useState } from "react"
import LoginRoute from "./components/LoginRoute"
import Watch from "./pages/Watch"


const App = () => {
  const [isLoggedin , setIsLoggedin] = useState(false);

  useEffect(() => {
    let loginStatus = JSON.parse(localStorage.getItem("isLoggedin")) || false
    setIsLoggedin(loginStatus)
  }, [])

  return (
    <>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/login" element={
                  <LoginRoute isLoggedin={isLoggedin}>
                      <Login setIsLoggedin={setIsLoggedin} />
                  </LoginRoute>
                } />
                <Route path="/watch" element={<Watch/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App