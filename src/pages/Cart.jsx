import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Swal from "sweetalert2";


const Cart = () => {

  const { cart, addProduct, calculateTotalPrice, calculateItems, products, setCart } =
    useContext(ProductContext);
    console.log(cart);

  const handleAddQuantity = (product) => {
    const index = cart.findIndex((el) => el.id === product.id);
    const newProduct = { ...product, quantity: product.quantity + 1 };
    const newCart = [...cart];
    newCart[index] = newProduct;
    addProduct(newProduct, "add");
  };

  const handleRemoveQuantity = (product) => {
    const index = cart.findIndex((el) => el.id === product.id);
    const newProduct = { ...product, quantity: product.quantity - 1 };
    const newCart = [...cart];
    newCart[index] = newProduct;
    if (newProduct.quantity >= 1) {
      setCart(newCart, "substract");
    }
  };

  const handleDeleteItem = (product) => {
    const index = cart.findIndex((el) => el.id === product.id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleGoToPayment = () => {
    Swal.fire({
      title: 'Próximamente',
      text: 'Esta funcionalidad aún no está disponible.',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  };


  return (
    <>
      <div  className="container-carrito my-2 gap-y-4">
        <h1 className="titulo-form text-gray-700 font-bold mb-10">Mi Carrito</h1>
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div>
          {cart.map((product) => (
            <div key={product.id} className="item-carrito flex gap-x-4 my-2">
              <img className="img-cart" width={"20%"} src={product.img} alt="Product" />
              <h3 className="flex-1 font-bold text-2xl" >{product.title}</h3>
              <p>
                {(product.quantity * product.price).toLocaleString("es-CL", {
                  style: "currency",
                  currency: "CLP",
                })}
              </p>

              <button
                className="bg-purple-500 text-white p-2"
                onClick={() => handleRemoveQuantity(product)}
              >
                {" "}
                -{" "}
              </button>

              <p>{product.quantity}</p>

              <button
                className=" bg-purple-500 text-white p-2"
                onClick={() => handleAddQuantity(product)}
              >
                +
              </button>

              <button onClick={() => handleDeleteItem(product)}>            
              <ion-icon name="trash-outline"></ion-icon>
              </button>



            </div>
          ))}
        </div>
      )}
    </div>
    <div >
      <h2 className="pago mt-4 total-carrito">
        Total:{" "}
        {calculateTotalPrice().toLocaleString("es-CL", {
          style: "currency",
          currency: "CLP",
        })}
      </h2>
      <button
        className="mt-6 py-2 px-4 bg-purple-500 text-white rounded"
        onClick={handleGoToPayment}
        >
        Ir a Pagar
      </button>
    </div>
  </>
);
};

export default Cart;
