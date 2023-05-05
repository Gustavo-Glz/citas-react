import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl mt-20">
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  );
};
export default App;
