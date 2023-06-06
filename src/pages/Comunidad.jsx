import React from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Comunidad = () => {
  const articles = [
    {
      id: 1,
      title: "Eventos de la comunidad",
      img: "https://www.cronicamadrid.com/fotos/1433/mujeresendo_thumb_760.jpg",
    },
    {
      id: 2,
      title: "Recomendaciones",
      img: "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/06/12/15287935200618.jpg",
    },

    {
      id: 6,
      title: "Descuentos en Laboratorio e Imagenología",
      img: "https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F6366%2Fconversions%2Ftipos-resonancia-magnetica-large.jpg&w=1280&q=75",
    },
    {
      id: 4,
      title: " Listado de Médicos Especialistas en Endometriosis",
      img: "https://i0.wp.com/aldiachile.microjuris.com/wp-content/uploads/2020/09/shutterstock_1121385623-1.jpg?resize=610%2C343&ssl=1",
    },
    {
      id: 5,
      title: "  Fundaciones y cuentas aliadas",
      img: "https://www.laboratorioblanco.cl/wp-content/uploads/2022/03/2-1.jpg",
    },

    {
      id: 6,
      title: "Ley de Endometriosis",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel1b8DuPP9gt5b4Ur2LSjiChnrU22hP2h1mCUPl_B71Wx6CFz8VrCUbY7FPM2OCazrek&usqp=CAU",
    },

  ];


  const handleSeeMore = () => {
    Swal.fire({
      title: 'Próximamente',
      text: 'Sección en Construcción',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  };


  return (
    <div>
      <h1 className="titulo-form  text-gray-700 font-bold mb-10">Comunidad</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map((article) => (
          <article key={article.id} className="shadow-md p-4 rounded">
            <div className="h-16 mb-6">
              <h1 className="art-comunidad text-violet-600 ">
                {article.title}
              </h1>
            </div>

            <img className="img-comunidad" src={article.img} alt="detalle" />
            {/* <Link to={{ pathname: `/communityinfo/${article.id}` }}> </Link> */}
              <button
               onClick={handleSeeMore}
               className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mt-6">
                Ver más
              </button>
           
          </article>
        ))}
      </div>
    </div>
  );
};

export default Comunidad;
