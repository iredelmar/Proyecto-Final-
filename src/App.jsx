import { Route, Routes, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { useContext } from "react";
import UserIcon from "../src/components/icons/UserIcon";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
     <Navbar />
    <div className="contenedor-pagina">
      <UserIcon width="60px" fill="#999" />
      <h1>App test</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={ user ? <Dashboard /> : <Navigate to="login" />}  />
      </Routes>
    </div>
    <Footer />
    </>
  );
};

export default App;
