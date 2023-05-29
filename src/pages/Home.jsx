import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const slides = [
    {
      url: "https://images.squarespace-cdn.com/content/v1/5b1d5b5489c172a502087318/1552950039800-K0MXRZHU0EZDTTKFD9K5/HEADER-endometriosis.jpg?format=1000w",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GM1PYEa4gU0XmUQ6t60r1yDmF3BEZ84oDg&usqp=CAU",
    },
    {
      url: "https://sa1s3optim.patientpop.com/assets/production/practices/bca61725a26329e3aed91cb612ccbe8e0cce2d8d/images/2460183.jpg",
    },
    {
      url: "https://static.wixstatic.com/media/724dfb_72d13e8857c14cc797e8e8f35fac2cfd~mv2.png/v1/fill/w_1021,h_378,al_c,lg_1,q_90,enc_auto/724dfb_72d13e8857c14cc797e8e8f35fac2cfd~mv2.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = slides.length - 1;
      const newIndex = prevIndex === 0 ? lastIndex : prevIndex - 1;
      return newIndex;
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = slides.length - 1;
      const newIndex = prevIndex === lastIndex ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="carrusel w-[100%] h-[500px] group mb-10">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500"
      ></div>

      <div className="arrow">
        {/* Left Arrow */}
        <div className="group-hover:block top-[50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="group-hover:block top-[50%]  text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>
      <div className="flex top-4 items-center justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-yellow-500" : ""
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
<div className=" p-20">
<h1 className="titulo-form text-gray-700 mb-6  ">¿Qué es la Endometriosis?</h1>
<p className="text-info text-justify leading-7 font-medium rounded bg-slate-50 p-5 ">La endometriosis es una condición común, en la cual tejido de origen endometrial crece fuera del útero. Generalmente
 esto ocurre sobre y alrededor de los órganos en la cavidad pélvica.
 <br />
 <br />
Sin embargo, se han encontrado casos de endometriosis en cualquier órgano y debido a que el tejido no puede salir del cuerpo, puede causar adherencias, nódulos y lesiones, y desencadenar una respuesta inflamatoria. 
<br />
<br />
En casos severos estas adherencias y nódulos pueden generar compromiso de otros órganos, como el diafragma, intestino, vejiga, estómago, incluso hay casos donde se han encontrado nódulos en el cerebro, generando ademásdolores incapacitantes, además de infertilidad.</p>

</div>
    </>
);
};

export default Home;
