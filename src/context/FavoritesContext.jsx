// import { createContext, useState } from "react";

// export const FavoritesContext = createContext();

// const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorites = (product) => {
//     setFavorites([...favorites, product]);
//   };

//   const deleteFavorites = (id) => {
//     const newFavorites = favorites.filter((item) => item.id !== id);
//     setFavorites(newFavorites);
//   };

//   return (
//     <FavoritesContext.Provider
//       value={{ favorites, addFavorites, deleteFavorites }}
//     >
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesProvider;

// import React, { createContext, useState } from "react";

// export const FavoritesContext = createContext();

// const FavoritestProvider = (props) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (product) => {
//     setFavorites((prevFavorites) => [...prevFavorites, product]);
//   };

//   const removeFavorite = (productId) => {
//     setFavorites((prevFavorites) =>
//       prevFavorites.filter((product) => product.id !== productId)
//     );
//   };

//   return (
//     <FavoritesContext.Provider
//       value={{ favorites, addFavorite, removeFavorite }}
//     >
//       {props.children}
//     </FavoritesContext.Provider>
//   );
// };

// export default FavoritesContextProvider;

import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    setFavorites([...favorites, product]);
  };

  const deleteFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
