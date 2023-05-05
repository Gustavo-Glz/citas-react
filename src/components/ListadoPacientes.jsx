import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <section className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
      <h2 className="text-2xl text-center font-bold">Listado pacientes</h2>
      <p className="mt-5 mb-10 text-lg text-center font-semibold">
        Administra tus {""}
        <span className="text-indigo-600 font-semibold">pacientes y citas</span>
      </p>
      <Paciente />
    </section>
  );
};

export default ListadoPacientes;
