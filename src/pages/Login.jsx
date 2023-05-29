import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      setAlertType("success");
      setAlertMessage("Iniciando sesión...");
      setShowAlert(true);
      setEmail("");
      setPassword("");
      return navigate("/dashboard");
    } else {
      setAlertType("error");
      setAlertMessage("Los datos ingresados son incorrectos");
      setShowAlert(true);
    }
  };

  return (
    <div className="form-container w-full max-w-lg">
      <h1 className="titulo-form text-gray-700 font-bold mb-10">
        Inicio de sesión
      </h1>
      <form className="form mb-2" onSubmit={handleSubmit}>
        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 text-start font-bold"
            for="inline-full-name"
          >
            Email:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 font-bold text-start"
            for="inline-password"
          >
            Password:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Suscribirme al newsletter!</span>
          </label>
        </div>
      </form>
      <button
        onClick={handleSubmit}
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded"
        type="submit"
      >
        Ingresar
      </button>
      {showAlert && (
        <Alert
          type={alertType}
          message={alertMessage}
          setShowAlert={setShowAlert}
        />
      )}
    </div>
  );
};

export default Login;
