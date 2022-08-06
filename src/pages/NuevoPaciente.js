import { useState } from "react";

const NuevoPaciente = ({ addPacientes }) => {
  const [formValido, setFormValido] = useState(false);
  const [pacienteNuevo, setPacienteNuevo] = useState({});
  const eventoChange = (e) => {
    /* setPacienteNuevo((prevPaciente) => {
        console.log(prevPaciente);
        return {
          ...prevPaciente,
          [e.target.name]: e.target.value,
        };
      }); */

    const newState = { ...pacienteNuevo };

    newState[e.target.name] = e.target.value;
    setPacienteNuevo(newState);

    setFormValido(newState.nombre && Number(newState.edad));
  };

  const buttonClick = () => {
    addPacientes(pacienteNuevo);
  };
  return (
    <>
      <label>Nombre:</label>
      <input type="text" onChange={eventoChange} name="nombre" />
      <br />
      <br />
      <label>Edad:</label>
      <input type="number" onChange={eventoChange} name="edad" />
      <br />
      <br />
      {!!formValido && <button onClick={buttonClick}>Guardar</button>}
    </>
  );
};

export default NuevoPaciente;
