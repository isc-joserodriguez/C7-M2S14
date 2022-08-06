import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Pacientes = ({ pacientes }) => {
  return (
    <ul>
      {pacientes.map((paciente) => {
        return (
          <li key={paciente.id}>
            <Link to={`/pacientes/${paciente.id}`}>{paciente.nombre}</Link>
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
