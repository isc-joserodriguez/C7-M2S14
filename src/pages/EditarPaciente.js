//Con un enrutamiento vamos a crear una nueva página para intercambiar las vistas
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NuevoPaciente = ({ pacientes, editarPaciente }) => {
  const { id } = useParams();
  const [paciente, setPaciente] = useState({
    id: 0,
    nombre: "",
    edad: "",
  });
  const [indicePaciente, setIndicePaciente] = useState({
    id: 0,
    nombre: "",
    edad: "",
  });

  const eventoChange = (e) => {
    const newState = { ...paciente };

    newState[e.target.name] = e.target.value;
    setPaciente(newState);
  };

  const buscar = () => {
    setPaciente(pacientes.find((paciente) => paciente.id === Number(id)));
    setIndicePaciente(
      pacientes.findIndex((paciente) => paciente.id === Number(id))
    );
  };

  useEffect(() => {
    buscar();
  }, []); //Si el array está vacío, se ejecuta al cargar

  const buttonClick = () => {
    editarPaciente(paciente, indicePaciente);
  };
  return (
    <>
      <ul>
        <li>{id}</li>
        <li>
          <input
            type="text"
            onChange={eventoChange}
            name="nombre"
            value={paciente.nombre}
          />
        </li>
        <li>
          <input
            type="number"
            onChange={eventoChange}
            name="edad"
            value={paciente.edad}
          />
        </li>
      </ul>

      <button onClick={buttonClick}>Guardar</button>
    </>
  );
};

export default NuevoPaciente;
