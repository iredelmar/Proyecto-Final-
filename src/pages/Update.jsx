import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Update = () => {
  const { id } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    const findProduct = products.find((item) => item.id === parseInt(id));
    setTitle(findProduct.title);
    setDescription(findProduct.description);
    setPrice(findProduct.price);
    setImg(findProduct.img);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      description,
      price,
      img,
      id: parseInt(id),
      user: user.email,
    };
    updateProduct(newProduct);
    console.log("editado");
  };

  return (
    <div className="form-container w-full max-w-lg">
      <h1 className="titulo-form text-gray-700 mb-6">Actualizar producto</h1>
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
              placeholder="title"
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
              placeholder="description"
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
            Descripción:
          </label>

          <div className="w-3/4">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              placeholder="price"
              value={price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
              onChange={(e) => setPrice(e.target.value)}
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
              placeholder="img url"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
        </div>
        <button
          className="shadow bg-gray-400 hover:bg-gray-300 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded w-24"
          type="submit"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
};
export default Update;
