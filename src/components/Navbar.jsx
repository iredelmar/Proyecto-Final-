import { NavLink } from "react-router-dom";
import UserIcon from "./icons/UserIcon";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { FavoritesContext } from "../context/FavoritesContext";

const Navbar = () => {
  const { user, logout } = useContext(UserContext);
  const { favorites } = useContext(FavoritesContext);

  const handleMenu = () => {
    console.log("me diste click");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="navbar flex items-center justify-between flex-wrap">
      <div className="titulo-principal marker:flex items-center flex-shrink-0 text-black mr-6">
        <NavLink className={"flex"} role="button" to="/">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm114.6 226.4l-113 152.7-112.7-152.7c-8.7-11.9-19.1-50.4 13.6-72 28.1-18.1 54.6-4.2 68.5 11.9 15.9 17.9 46.6 16.9 61.7 0 13.9-16.1 40.4-30 68.1-11.9 32.9 21.6 22.6 60 13.8 72z" />
          </svg>
          Viviendo en Amarillo
        </NavLink>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-violet-500 hover:text-violet-400 hover:border-white"
          onClick={() => handleMenu()}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="menu"
        className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center hidden"
      >
        <div className="titulo-vistas text-sm lg:flex-grow space-x-10">
          <NavLink
            className={
              "flex mt-4 lg:inline-block lg:mt-0 text-violet-500 hover:text-white mr-4"
            }
            role="button"
            to="/blog"
          >
            Blog
          </NavLink>

          <NavLink
            className={
              "flex mt-4 lg:inline-block lg:mt-0 text-violet-500 hover:text-white mr-4"
            }
            role="button"
            to="/comunidad"
          >
            Comunidad
          </NavLink>

          <NavLink
            className={
              "flex mt-4 lg:inline-block lg:mt-0 text-violet-500 hover:text-white mr-4"
            }
            role="button"
            to="/productosyterapias"
          >
            Terapias y Productos
          </NavLink>
        </div>

        {user ? (
          <>
            <div className=" space-x-6 text-xl font-bold">
              <NavLink to="/dashboard" role="button">
                Mis Publicaciones
              </NavLink>
              <NavLink to="/profile" role="button">
                Mi perfil
              </NavLink>
              <NavLink to="/favorites" role="button">
                {favorites.length}
                <i>❤️</i>
                Mis Favoritos
              </NavLink>
              <button
                className={
                  "boton-sesion-registro inline-block px-4 py-2 leading-none border rounded text-white border-violet-500 hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0"
                }
                role="button"
                onClick={logout}
              >
                Cerrar Sesión
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-x-3">
              <UserIcon className={"inline-block"} width="20px" fill="black" />
              <NavLink
                className={
                  "boton-sesion-registro inline-block px-4 py-2 leading-none border rounded text-white border-violet-500 hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0"
                }
                role="button"
                to="/Login"
              >
                Inicio de sesión
              </NavLink>
              <NavLink
                className={
                  "boton-sesion-registro inline-block px-4 py-2 leading-none border rounded text-white border-violet-500 hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0"
                }
                role="button"
                to="/Register"
              >
                Registro
              </NavLink>
            </div>
          </>
        )}
        {/* Activar en la sesion de usuario unicamente */}
        {/* <NavLink className={"nav-carrito"} to="/carrito"> */}
        {/* {" "}
            Carrito 🛒 */}
        {/* {sumaTotalPizzasCarrito.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})} */}
        {/* </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
