const Paciente = ({ paciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className="bg-white shadow-md text-lg px-5 py-8 mb-5 rounded-md md:mr-2">
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
    </div>
  );
};

export default Paciente;
