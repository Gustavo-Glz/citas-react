import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex md:gap-8">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes pacientes={pacientes} />
      </div>
    </div>
  );
};
export default App;
