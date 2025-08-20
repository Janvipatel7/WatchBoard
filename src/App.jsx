import { BrowserRouter, Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Login from "./pages/Login"
import Watch from "./pages/Watch"
import { ToastContainer } from "react-toastify"
import AddWatch from "./pages/AddWatch"
import EditDetails from "./pages/EditDetails"


const App = () => {
  return (
    <>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/watch" element={<Watch/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/add-watch" element={<AddWatch/>} />
                <Route path="/edit-watch/:id" element={<EditDetails/>} />
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    </>
  )
}

export default App