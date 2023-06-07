import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { createProduct, products, deleteProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit clicked!");

    if (!title.trim() || !description.trim() || !price.trim() || !img.trim()) {
      Swal.fire("Faltan datos por completar");
      return;
    }

    const priceRegex = /^\d+$/;
    if (!priceRegex.test(price)) {
      Swal.fire("El precio debe contener solo números");
      return;
    }

    const newProduct = {
      title,
      description,
      price,
      img,
      id: Date.now(),
      user: user.email,
    };
    createProduct(newProduct);
  };

  return (
    <div className="form-container w-full max-w-lg">
      <h1 className="titulo-form text-gray-700 font-bold mb-10">
        Bienvenid@: {user.name}
      </h1>
      <h1 className=" text-gray-700 font-bold mb-12 text-lg text-center">
        Publica aquí tu artículo o servicio con precio solidario
        <br /> para la comunidad
      </h1>

      <form onSubmit={handleSubmit} className="form mb-2">
        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 text-start font-bold"
            htmlFor="inline-full-name"
          >
            Artículo:
          </label>
          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="Título de publicación"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 text-start font-bold"
            htmlFor="inline-full-name"
          >
            Descripción:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 text-start font-bold"
            htmlFor="inline-full-name"
          >
            Precio:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <label
            className="w-1/4 text-gray-500 text-start font-bold"
            htmlFor="inline-full-name"
          >
            Coloca la url <br />
            de tu imagen:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="img url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded w-24"
        >
          Agregar
        </button>
      </form>
      <h1 className=" text-gray-700 font-bold mb-12 text-lg text-center mt-10">
        Mis Artículos publicados: </h1>
      <div>
        {products
          .filter((product) => product.user === user.email)
          .map((product) => (
            <article
              key={product.id}
              className="art-edition shadow-md p-4 rounded  gap-4"
            >
              <h2 className="text-xl text-gray-700 font-bold mt-6 mb-6">
                {product.title}
              </h2>
              <div className="space-x-3">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="shadow bg-gray-400 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded w-24"
                >
                  Eliminar
                </button>
                <button className="shadow bg-gray-400 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded w-24">
                  <Link to={`/update/${product.id}`}>Editar</Link>
                </button>
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
