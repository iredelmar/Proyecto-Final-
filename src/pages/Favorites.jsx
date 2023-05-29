import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const Favorites = () => {
  const { favorites, deleteFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1 className="titulo-form text-gray-700 mb-6">Mis Favoritos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {favorites.map((item) => (
          <article key={item.id} className="shadow-md p-4 rounded">
            <div className="h-16 mb-6">
              <h1 className="art-comunidad  text-violet-600 ">{item.title}</h1>
            </div>

            <img className="img-comunidad" src={item.img} alt="producto" />
            <button
              onClick={() => deleteFavorite(item.id)}
              className="shadow bg-gray-400 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded w-24 mt-4"
            >
              Eliminar
            </button>
          </article>
        ))}
      </div>
      {favorites.length === 0 && (
        <p className="block tracking-wide text-gray-700 shadow font-bold text-center mt-10 text-xl">
          Aún no tienes favoritos
        </p>
      )}
    </div>
  );
};
export default Favorites;
