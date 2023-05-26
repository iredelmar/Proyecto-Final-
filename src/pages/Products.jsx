import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container ">
      <h1 className=' titulo-form text-gray-700 font-bold mb-10'>Terapias y Productos</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
         
          <article key={product.id} className="shadow-md p-4 rounded">
            <h2 className="titulo-form flex mt-4 lg:inline-block lg:mt-0 text-violet-600 mr-4">{product.title}</h2>
           
            <img className="img-product"
              src={product.img}
              alt="productos"
            />
           <div className="precio  text-gray-700 font-bold ">${product.price.toLocaleString()}</div>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">Comprar</button>
          </article>
        ))}
      </div>
    </div>
    
   );
};

export default Products;
