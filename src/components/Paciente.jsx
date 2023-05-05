const Paciente = () => {
  return (
    <div className="bg-white shadow-md text-lg px-5 py-8 mb-5 rounded-md md:mr-2">
      <p className="mb-4 text-gray-700 font-semibold">
        Nombre: {""}
        <span className="text-base font-normal normal-case">Hook</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Propietario: {""}
        <span className="text-base font-normal normal-case">Gustavo</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Email: {""}
        <span className="text-base font-normal normal-case">
          gustavo@gmail.com
        </span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Fecha alta: {""}
        <span className="text-base font-normal normal-case">
          05 Mayo de 2023
        </span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Síntomas: {""}
        <span className="text-base font-normal normal-case">
          Quis mollit aliqua aliquip ex. Ipsum deserunt laboris enim fugiat
          pariatur sit occaecat incididunt aute adipisicing amet. Eiusmod nisi
          minim laboris amet.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
