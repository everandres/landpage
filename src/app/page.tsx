import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-36 h-36 bg-green-400"></div>{" "}
      {/* Cuadrado verde a la izquierda */}
      <div className="flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenidos a Orbis Geoscripting
        </h1>

        <Image
          src="https://media.tenor.com/4NKYe36DcE8AAAAj/taclan-world.gif"
          alt="Orbis Geoscripting"
          width={300}
          height={300}
          unoptimized={true}
        />

        {/* Simulación de consola de Python */}
        <div className="w-full max-w-lg mt-8 bg-black text-white font-mono text-sm rounded-md overflow-hidden">
          <div className="p-4">
            <div className="text-yellow-200"># Tu primer paso a un</div>
            <span className="text-green-400 mt-2">{">>> "}</span>Hola mundo
          </div>
        </div>
      </div>
      <div className="w-36 h-36 bg-blue-400"></div>{" "}
      {/* Cuadrado azul a la derecha */}
    </main>
  );
}
