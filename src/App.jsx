import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Watch from "./pages/Watch"
import { ToastContainer } from "react-toastify"
import AddWatch from "./pages/AddWatch"
import EditDetails from "./pages/EditDetails"
import Shop from "./pages/Shop"
import LoginRoute from "./components/LoginRoute"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/watch" element={<LoginRoute Component={Watch} />} />
          <Route path="/watch/:id" element={<LoginRoute Component={Watch} />} />
          <Route path="/login" element={<LoginRoute Component={Login} />} />
          <Route path="/add-watch" element={<LoginRoute Component={AddWatch} />} />
          <Route path="/edit-watch/:id" element={<LoginRoute Component={EditDetails} />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App
