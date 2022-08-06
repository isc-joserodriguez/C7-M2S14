import { useState } from "react";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import Pacientes from "./pages/Pacientes";
import Paciente from "./pages/Paciente";
import NuevoPaciente from "./pages/NuevoPaciente";
import SignIn from "./pages/SignIn";
import Nav from "./components/Nav";

import { Routes, Route } from "react-router-dom";

function App() {
  const cadena = "Hola";
  const [pacientes, setPacientes] = useState([
    {
      id: 0,
      nombre: "Laura",
      edad: 14,
    },
    {
      id: 1,
      nombre: "Mario",
      edad: 30,
    },
    {
      id: 2,
      nombre: "Pedro",
      edad: 50,
    },
    {
      id: 3,
      nombre: "Roberto",
      edad: 10,
    },
    {
      id: 4,
      nombre: "Mauricio",
      edad: 25,
    },
    {
      id: 5,
      nombre: "Juan",
      edad: 20,
    },
    {
      id: 6,
      nombre: "Paty",
      edad: 80,
    },
  ]);
  const [token, setToken] = useState(null);

  const addPacientes = (nuevoPaciente) => {
    const pacientesList = [...pacientes];
    pacientesList.push({
      ...nuevoPaciente,
      id: Number((Math.random() * 500000).toFixed()),
    });
    setPacientes(pacientesList);
  };

  const changeToken = (nuevoToken) => {
    setToken(nuevoToken);
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route
          path="/pacientes"
          element={<Pacientes mensaje={cadena} pacientes={pacientes} />}
        />
        <Route
          path="/pacientes/:id"
          element={<Paciente pacientes={pacientes} />}
        />
        <Route
          path="/pacientes/nuevo"
          element={<NuevoPaciente addPacientes={addPacientes} />}
        />
        {!token && (
          <Route
            path="/signin"
            element={<SignIn changeToken={changeToken} />}
          />
        )}
        <Route path="/" element={<h1>Sin ruta</h1>} />
      </Routes>
      <h1>FOOTER</h1>
    </>
  );
}

export default App;
