import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Comunidad from "./pages/Comunidad";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Update from "./pages/Update";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import CommunityInfo from "./pages/CommunityInfo";

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
            <Route path="/communityinfo/:id" element={<CommunityInfo/>} />
            <Route path="/productosyterapias" element={<Products />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/dashboard" />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/register"
              element={user ? <Register /> : <Navigate to="dashboard" />}
            />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="login" />}
            />
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
              path="/favorites"
              element={user ? <Favorites /> : <Navigate to="/login" />}
            />
            <Route
              path="/update/:id"
              element={user ? <Update /> : <Navigate to="/login" />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer className="bg-gray-300 p-4" />
    </>
  );
};

export default App;
