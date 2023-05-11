import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-auto">
      {pacientes.length > 0 ? (
        <>
          <h2 className="text-2xl text-center font-bold">Listado pacientes</h2>
          <p className="mt-5 mb-10 text-lg text-center font-semibold">
            Administra tus {""}
            <span className="text-indigo-600 font-semibold">
              pacientes y citas
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
              key={paciente.id}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-2xl text-center font-bold">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-lg text-center font-semibold">
            Comienza agregando {""}
            <span className="text-indigo-600 font-semibold">pacientes</span>
          </p>
        </>
      )}
    </section>
  );
};

export default ListadoPacientes;
