const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Desea eliminar este paciente");
    respuesta && eliminarPaciente(id);
  };
  return (
    <div className="bg-white shadow-md text-lg px-5 py-8 mb-5 rounded-md">
      <p className="mb-4 text-gray-700 font-semibold">
        Nombre: {""}
        <span className="text-base font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Propietario: {""}
        <span className="text-base font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Email: {""}
        <span className="text-base font-normal normal-case">{email}</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Fecha alta: {""}
        <span className="text-base font-normal normal-case">{fecha}</span>
      </p>
      <p className="mb-4 text-gray-700 font-semibold">
        Síntomas: {""}
        <span className="text-base font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex gap-5">
        <button
          className="bg-indigo-600 py-1 px-4 text-white font-bold rounded transition-all ease-in-out duration-300 hover:bg-indigo-700"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="bg-red-600 py-1 px-4 text-white font-bold rounded transition-all ease-in-out duration-300 hover:bg-red-700"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
