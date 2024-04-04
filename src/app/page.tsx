"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = `"""
  En la medida en que más profesionales capacitados
  han ido actualizando las herramientas de los SIG y los modelos
  de referencia de la información espacial a nivel mundial,
  se ha aumentado la necesidad de respuesta
  a los nuevos retos tecnológicos y de talento humano
  con aplicaciones e ideas novedosas en el campo geográfico.
  
  En Orbis Geoscripting S.A.S. buscamos capacitar a los profesionales
  colombianos en el uso de las herramientas de
  los SIG de la forma óptima que está exigiendo el mundo actual."""`;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setTypedText((typed) => typed + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(intervalId);
    }, 80);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-[#377b80] flex flex-col items-center justify-center p-4">
      {/* Contenedor del GIF en la parte superior izquierda */}
      <div className="absolute top-0 left-0 p-4">
        <Image
          src="/tierra.gif"
          alt="Orbis Geoscripting"
          width={100}
          height={100}
          unoptimized={true}
        />
      </div>

      {/* Botón de acción o contacto en la parte superior derecha */}
      <button className=" absolute top-0 right-0 mt-4 mr-4 bg-teal-700 text-white py-2 px-4 rounded hover:bg-[#377b80] transition duration-300 ease-in-out">
        Conoce más
      </button>

      {/* Contenido principal centrado */}
      <main className="flex flex-col items-center w-full max-w-4xl text-center z-10">
        <div className="mb-6 md:mb-10">
          <Image
            src="/logo.svg"
            alt="Logo de Orbis Geoscripting"
            width={220}
            height={220}
            unoptimized={true}
          />
        </div>

        {/* Simulación de consola de Python con sombra sutil y mejor espaciado */}
        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-2/5 bg-black text-white font-mono text-xs sm:text-sm rounded-md shadow-xl p-4 mb-6">
          <div className="text-left">
            <div className="text-yellow-200">#Inicio</div>
            <span className="text-green-400">{">>> "}</span>Hola mundo
            <br />
            <br />
            <pre className="text-green-400 whitespace-pre-wrap">
              {typedText}
              <span className="cursor"></span>
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}
