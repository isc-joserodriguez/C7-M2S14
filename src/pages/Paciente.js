import { useParams, Link } from "react-router-dom";

const Usuario = ({ pacientes }) => {
  let elementos;
  const { id = 0 } = useParams();
  if (pacientes.length < Number(id)) {
    elementos = (
      <h1>
        Usuario no existe <Link to="/pacientes">Volver</Link>
      </h1>
    );
  } else {
    const paciente = pacientes[id];
    elementos = (
      <>
        <ul>
          <li>{paciente.id}</li>
          <li>{paciente.nombre}</li>
          <li>{paciente.edad}</li>
        </ul>
        <Link to="/pacientes">Volver</Link>
      </>
    );
  }
  return elementos;
};

export default Usuario;
