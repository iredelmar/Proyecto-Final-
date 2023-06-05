import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { FavoritesContext } from "../context/FavoritesContext";
import { IconHeartFilled } from "@tabler/icons-react";
import  AddProduct  from "../components/AddProduct";


const Products = () => {
  const { products, addProduct } = useContext(ProductContext);

  const { favorites, addFavorite, deleteFavorite } =
    useContext(FavoritesContext);
  const [filtro, setFiltro] = useState("");
  const [orden, setOrden] = useState("");

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handleOrdenChange = (e) => {
    setOrden(e.target.value);
  };

  const productosFiltrados = products.filter((product) =>
    product.title.toLowerCase().includes(filtro.toLowerCase())
  );

  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (orden === "precio-asc") {
      return a.price - b.price;
    } else if (orden === "precio-desc") {
      return b.price - a.price;
    }
    return 0;
  });

  const isFavorite = (productId) => {
    return favorites.some((favorite) => favorite.id === productId);
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      deleteFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <div className="products-container ">
      <h1 className="titulo-form text-gray-700 font-bold mb-10">
        Terapias y Productos
      </h1>

      <div className="filter-container">
        <div>
          <input
            type="text"
            value={filtro}
            onChange={handleFiltroChange}
            placeholder="Filtrar por título..."
            className="w-56 px-4 py-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="flex items-center space-x-4">
            <span className="text-gray-700 font-bold">Ordenar por precio:</span>
            <select
              value={orden}
              onChange={handleOrdenChange}
              className="w-56 px-4 py-2 rounded border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Seleccionar</option>
              <option value="precio-asc">Menor a mayor</option>
              <option value="precio-desc">Mayor a menor</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {productosOrdenados.map((product) => (
          <article key={product.id} className="shadow-md p-4 rounded">
            <h2 className="titulo-form flex mt-4 lg:inline-block lg:mt-0 text-violet-600 mr-4">
              {product.title}
            </h2>

            <img className="img-comunidad" src={product.img} alt="productos" />
            <div className="precio text-gray-700 font-bold">
              {product.price.toLocaleString("es-CL", {
                style: "currency",
                currency: "CLP",
              })}
            </div>
            <div className="products-buttons flex items-center mt-4">

            <AddProduct product={product} addProduct={addProduct} />
          
              <button
                className={`mr-2 ${
                  isFavorite(product.id) ? "text-red-500" : "text-gray-500"
                }`}
                onClick={() => toggleFavorite(product)}
              >
                {isFavorite(product.id) ? (
                  <IconHeartFilled size={24} strokeWidth={2} color="red" />
                ) : (
                  <IconHeartFilled
                    size={24}
                    strokeWidth={2}
                    color="currentColor"
                  />
                )}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Products;
