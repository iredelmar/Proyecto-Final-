import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comunidad from "./Comunidad";

const CommunityInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const articles = Comunidad().props.children.props.children.map(
    (child) => child.props.article
  );

  const articulo = articles.find((article) => article.id === parseInt(id));

  if (!articulo) {
    return <div>Artículo no encontrado</div>;
  }

  const handleClicBack = () => {
    navigate("/comunidad");
  };

  return (
    <>
      <div>
        <h1>Detalle del Artículo {articulo.id}</h1>
        <h2>{articulo.title}</h2>
        <img src={articulo.img} alt={articulo.title} />
        <p>Aquí va la descripción del artículo</p>
      </div>
      <div className="boton-detalle">
        <button
          onClick={handleClicBack}
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mt-6"
        >
          Volver a Comunidad
        </button>
      </div>
    </>
  );
};

export default CommunityInfo;





























// import CommunityInfo from "./CommunityInfo"

// import { useParams, useNavigate } from "react-router-dom";
// // import { ProductContext } from "../context/ProductContext";

// export default function ProductInfo() {
//   const params = useParams();
//   // const { products } = ProductContext();
//   // const { addProduct } = ProductContext();
//   const navigate = useNavigate();

 
//   const handleClicAdd = () => {
//     addProduct(product);
//     navigate('/cart');
//   };

//   return (
//     <>
//       <div className="detalle-container">
//         <img className="img-detalle" src={product.img} alt="product" />
//         <div className="texto-detalle">
//           <h1 className="product-detalle">product {product.title}</h1>
//           <p className="texto-detalle">{product.desc}</p>
//           <p className="ingredientes">Ingredientes:</p>
//           <div>
//             {/* <ul>
//               {product.ingredients.map((ingrediente) => (
//                 <li>* {ingrediente}</li>
//               ))}
//             // </ul> */}
//             <div className="precio">Precio: {product.price.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'})}</div>
//           </div>       
//         </div>
//       </div>
//       <div className="boton-detalle">
//           <button
//             onClick={handleClicAdd}
//             className="py-2 px-4 bg-rose-800 text-white rounded ml-auto"
//           >
//             🛒  Agregar
//           </button></div>
//     </>
//   );
// }