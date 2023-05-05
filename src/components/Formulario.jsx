import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  
  return (
    <section className="md:w-1/2 lg:w-2/5">
      <h2 className="text-2xl text-center font-semibold">Seguimiento pacientes</h2>
      <p className="mt-5 text-lg text-center font-semibold my-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-semibold">administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-8 px-5 mb-5">
        <div>
          <label
            className="block text-lg text-gray-700 font-bold my-2"
            htmlFor="mascota"
          >
            Nombre mascota
          </label>
          <input
            className="border-2 w-full p-2 rounded placeholder-gray-500"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div>
          <label
            className="block text-lg text-gray-700 font-bold my-5"
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            className="border-2 w-full p-2 rounded placeholder-gray-500"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div>
          <label
            className="block text-lg text-gray-700 font-bold my-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 rounded placeholder-gray-500"
            id="email"
            type="email"
            placeholder="Email propietario"
          />
        </div>
        <div>
          <label
            className="block text-lg text-gray-700 font-bold my-2"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            className="border-2 w-full p-2 rounded placeholder-gray-500"
            id="alta"
            type="date"
          />
        </div>
        <div>
          <label
            className="block text-lg text-gray-700 font-bold my-2"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 rounded placeholder-gray-500"
            id="sintomas"
            placeholder="Describe los sintomas"
          />
        </div>
        <input
          className="bg-indigo-600 w-full text-white font-bold p-3 mt-5 rounded cursor-pointer transition-all ease-in-out duration-500 hover:bg-indigo-700"
          type="submit"
          value="Agregar paciente"
        />
      </form>
    </section>
  );
};

export default Formulario;
