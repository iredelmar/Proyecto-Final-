import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, updateUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [comuna, setComuna] = useState("");
  // const [region, setRegion] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setName(user.name);
    setLastname(user.lastname);
    setEmail(user.email);
    setPhone(user.phone);
    setPassword(user.password);
    // setComuna(user.comuna);
    // setRegion(user.region);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(handleSubmit);
    updateUser({
      email: email,
      name: name,
      lastname: lastname,
      // comuna: comuna,
      // region: region,
      phone: phone,
      password: password,
      id: user.id,
    });

    Swal.fire("Datos actualizados");
  };

  return (
    <div>
      <h1 className="titulo-form text-gray-700 mb-6">Editar mi perfil</h1>
      <form onSubmit={handleSubmit} className="form-container w-full max-w-lg">
        <div className="flex flex-wrap -mx-10 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Apellido
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Apellido"
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
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-10 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Contraseña
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block tracking-wide text-gray-700 text-s font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Teléfono
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="+569........"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6"
        >
          Actualizar Mis Datos
        </button>
      </form>
    </div>
  );
};
export default Profile;
