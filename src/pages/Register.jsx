import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("Submit clicked!");

    const validations = [];

    if (
      !name.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !repassword.trim()
    ) {
      validations.push("Faltan datos por completar");
    }

    if (email.trim() && !emailRegex.test(email)) {
      validations.push("Por favor ingresa un email válido");
    }

    if (password.trim() && password.length < 8) {
      validations.push("La contraseña debe tener al menos 8 caracteres");
    }

    if (password.trim() && repassword.trim() && password !== repassword) {
      validations.push("Las contraseñas ingresadas no coinciden");
    }

    if (validations.length > 0) {
      validations.forEach((message) => {
        Swal.fire(message);
      });
      return;
    }

    const user = register({
      name,
      lastname,
      email,
      // phone,
      password,
      id: Date.now(),
      // el date now no se usa, es un truco para generar un numnero que representa el tiempo en que se hizo clic usando la hora del computador
    });

    if (user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email ya está registrado",
      });
    }

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container w-full max-w-lg">
      <h1 className="titulo-form text-gray-700 font-bold mb-10">
        Registro de usuario
      </h1>
      <div className="flex flex-wrap -mx-10 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Primer Nombre
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Emilia"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="text-violet-600 text-xs italic">
            Por favor completa tus datos
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Apellido
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Hernández"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-10 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="grid-password"
          >
            Correo electrónico
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            placeholder="correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-10 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="grid-password"
          >
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-gray-600 text-xs italic">
            Crea un password de al menos 8 caracteres
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-10 mb-6">
        <div className="w-full px-3">
          <label
            className="block  tracking-wide text-gray-700 text-s font-bold mb-2"
            htmlFor="grid-password"
          >
            Confirma tu Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="********"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
      </div>

      <button
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6"
        type="submit"
      >
        Quiero Registrarme
      </button>
    </form>
  );
};
export default Register;
