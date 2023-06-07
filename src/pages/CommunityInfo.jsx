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















