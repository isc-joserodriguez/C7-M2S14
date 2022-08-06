import { useState } from "react";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import Pacientes from "./pages/Pacientes";
import Paciente from "./pages/Paciente";

import { Routes, Route, Link } from "react-router-dom";

function App() {
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

  return (
    <>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/usuario">Usuario</Link>
        </li>
        <li>
          <Link to="/pacientes">Pacientes</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route
          path="/pacientes"
          element={<Pacientes pacientes={pacientes} />}
        />
        <Route
          path="/pacientes/:id"
          element={<Paciente pacientes={pacientes} />}
        />
        <Route path="/" element={<h1>Sin ruta</h1>} />
      </Routes>
      <h1>FOOTER</h1>
    </>
  );
}

export default App;
