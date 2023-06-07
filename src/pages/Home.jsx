import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Home = () => {
  const slides = [
    {
      url: "https://i.ytimg.com/vi/V1Ikdr3VRMw/maxresdefault.jpg",
    },
    {
      url: "https://www.jnjmedtech.com/sites/default/files/styles/crop_presets/public/2023-03/CARD_0.png?itok=_aGBp-y9",
    },
    {
      url: "https://sa1s3optim.patientpop.com/assets/production/practices/bca61725a26329e3aed91cb612ccbe8e0cce2d8d/images/2460183.jpg",
    },
    {
      url: "https://biotrend.com.ar/landing/images/easyblog_articles/4/EndometriosisBlog.jpg",
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
Este tejido puede llegar a infiltrar órganos, causar adherencias y nódulos, el 20% de las mujeres con endometriosis terminan  en cirugía por compromiso de algún órgano a causa de esta condición, los casos más comunes son endometriosis en el diafragma, intestino, vejiga, pulmones, incluso hay casos donde se ha encontrado tejido endometrial en el cerebro.</p>

</div>
    </>
);
};

export default Home;
