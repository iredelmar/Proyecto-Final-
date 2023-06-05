import { useNavigate } from "react-router-dom";

const AddProduct = ({ product, addProduct }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    addProduct(product);
    navigate("/cart");
  };

  return (
    <button
      onClick={handleClick}
      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded"
    >
      Comprar
    </button>
  );
};

export default AddProduct;