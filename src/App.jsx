import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Comunidad from "./pages/Comunidad";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { useContext } from "react";


const App = () => {
  const { user } = useContext(UserContext);
  
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
      <div className="contenedor-pagina flex-grow">

        <h1></h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/productosyterapias" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="login" />}
          />
        </Routes>
      </div>
      </div>
      <Footer className="bg-gray-300 p-4" />
    </>
  );
};

export default App;
