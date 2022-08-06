import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pacientes = ({ pacientes }) => {
  return (
    <ul>
      {pacientes.map((paciente) => {
        return (
          <li key={paciente.id}>
            <Link to={`/pacientes1/${paciente.id}`}>{paciente.nombre}1</Link>
            <Link to={`/pacientes2/${paciente.id}`}>{paciente.nombre}2</Link>
          </li>
        );
      })}
    </ul>
  );
};

Pacientes.propTypes = {
  pacientes: PropTypes.array,
};

export default Pacientes;
