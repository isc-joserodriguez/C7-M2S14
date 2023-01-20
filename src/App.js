import { useState } from "react";
import Home from "./pages/Home";
import Usuario from "./pages/Usuario";
import Pacientes from "./pages/Pacientes";
import Paciente2 from "./pages/Paciente2";
import Paciente from "./pages/Paciente";
import NuevoPaciente from "./pages/NuevoPaciente";
import EditarPaciente from "./pages/EditarPaciente";
import SignIn from "./pages/SignIn";
import Nav from "./components/Nav";

import { Routes, Route, Link } from "react-router-dom";

import imagenPerro from './assets/img/perro.jpg';

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

  const editarPaciente = (nuevo, indice) => {
    const newPac = [...pacientes];
    newPac[indice] = nuevo;
    setPacientes(newPac);
  };

  const changeToken = (nuevoToken) => {
    setToken(nuevoToken);
  };

  return (
    <>
      <img src= {imagenPerro} />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        {token && <Route path="/usuario" element={<Usuario />} />}

        <Route
          path="/pacientes"
          element={<Pacientes mensaje={cadena} pacientes={pacientes} />}
        />
        <Route
          path="/pacientes1/:id"
          element={<Paciente pacientes={pacientes} />}
        />
        <Route
          path="/pacientes2/:id"
          element={<Paciente2 pacientes={pacientes} />}
        />
        <Route
          path="/pacientes/nuevo"
          element={<NuevoPaciente addPacientes={addPacientes} />}
        />
        <Route
          path="/pacientes/editar/:id"
          element={
            <EditarPaciente
              pacientes={pacientes}
              editarPaciente={editarPaciente}
            />
          }
        />
        {!token && (
          <Route
            path="/signin"
            element={<SignIn changeToken={changeToken} />}
          />
        )}
        <Route path="/" element={<h1>Sin ruta</h1>} />
        <Route
          path="*"
          element={
            <div>
              <h1>Error, esta ruta no existe</h1>
              <Link to="/">Volver</Link>
            </div>
          }
        />
      </Routes>
      <h1>FOOTER</h1>
    </>
  );
}

export default App;
