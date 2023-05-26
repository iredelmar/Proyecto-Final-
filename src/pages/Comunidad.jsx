import React from "react";

const Comunidad = () => {
  return (
    <div>
      <h1 className="titulo-form  text-gray-700 font-bold mb-10">Comunidad</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            <h1 className="art-comunidad  text-violet-600 ">
              Eventos de la comunidad
            </h1>
          </div>

          <img
            className="img-comunidad"
            src="https://www.cronicamadrid.com/fotos/1433/mujeresendo_thumb_760.jpg"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>

        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            <h1 className="art-comunidad  mt-4 lg:mt-0 text-violet-600 ">
              Recomendaciones
            </h1>
          </div>

          <img
            className="img-comunidad"
            src="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/06/12/15287935200618.jpg"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>

        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            <h1 className="art-comunidad  mt-4 lg:mt-0 text-violet-600">
              Listado de Médicos 
              <br />
              Especialistas en Endometriosis
            </h1>
          </div>

          <img
            className="img-comunidad"
            src="https://i0.wp.com/aldiachile.microjuris.com/wp-content/uploads/2020/09/shutterstock_1121385623-1.jpg?resize=610%2C343&ssl=1"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>

        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            {" "}
            <h1 className="art-comunidad  mt-4 lg:mt-0 text-violet-600">
              Ley de Endometriosis
            </h1>
          </div>

          <img
            className="img-comunidad"
            src="https://fotos.perfil.com/2022/03/23/8-respuestas-sobre-la-endometriosis-1330915.jpg"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>

        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            <h1 className="art-comunidad  mt-4 lg:mt-0 text-violet-600 ">
              Descuentos en Laboratorio 
              <br />
              y Exámenes de Diagnóstico
            </h1>
          </div>

          <img
            className="img-comunidad"
            src="https://medicoplus.com/_next/image?url=https%3A%2F%2Fplustatic.com%2F6366%2Fconversions%2Ftipos-resonancia-magnetica-large.jpg&w=1280&q=75"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>
        <article className="shadow-md p-4 rounded">
          <div className="h-16 mb-6">
            <h1 className="art-comunidad  mt-4 lg:mt-0 text-violet-600">
              Fundaciones y cuentas aliadas
            </h1>
          </div>
          <img
            className="img-comunidad"
            src="https://www.laboratorioblanco.cl/wp-content/uploads/2022/03/2-1.jpg"
            alt="detalle"
          />

          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded mt-6">
            Ver más
          </button>
        </article>

        
      </div>
    </div>
  );
};

export default Comunidad;
