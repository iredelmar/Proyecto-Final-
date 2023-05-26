import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";



const Register = () => {
  const { register } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      return alert("no coinciden las contraseñas");
    }

    register({
      name,
      email,
      phone,
      password,
      id: Date.now(),
    });
  };

  return (
<form className="form-container w-full max-w-lg">
  <h1 className="titulo-form text-gray-700 font-bold mb-10">Registro de usuario</h1>
  <div className="flex flex-wrap -mx-10 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-first-name">
        Primer Nombre
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-violet-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Emilia" />
      <p className="text-violet-600 text-xs italic">Por favor completa tus datos</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-last-name">
        Apellido
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Hernández" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-10 mb-6">
    <div className="w-full px-3">
      <label className="block  tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-password">
        Password
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p className="text-gray-600 text-xs italic">Crea un password de al menos 8 caracteres</p>
    </div>
  </div>
  <div className="flex flex-wrap -mx-10 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-city">
        Comuna
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Santiago" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-state">
        Región
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Metropolitana</option>
          <option>Los Lagos</option>
          <option>Valparaíso</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-zip">
        Código Postal
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
    </div>
  </div>
  <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6" 
      type="submit">
       Quiero Registrarme
      </button>
</form>
);
}











//     <div>
//       <h1>Registro</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="tel"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Repita Contraseña"
//           value={repassword}
//           onChange={(e) => setRepassword(e.target.value)}
//         />
//         <button type="submit">Quiero registrarme</button>
//       </form>
//     </div>
//   );
// };
export default Register;
