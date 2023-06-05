import React, { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


export const ProductContext = createContext();

const initialProductState = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(initialProductState);


  const getProducts = async () => {
    const res = await fetch("./products.json");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const createProduct = (product) => {
    setProducts([product, ...products]);
  };

  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  const updateProduct = (newProduct) => {
    const newProducts = products.map((product) => {
      if (product.id === newProduct.id) {
        return newProduct;
      }
      return product;
    });

    setProducts(newProducts);
  };


  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };



  const calculateTotalPrice = () => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };
  
  const calculateItems = () => {
    return cart.length;
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        deleteProduct,
        updateProduct,
        cart,
        setCart,
        addProduct,
        calculateTotalPrice,
        calculateItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
