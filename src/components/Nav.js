import { Link } from "react-router-dom";

const Nav = () => {
  return (
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
      <li>
        <Link to="/pacientes/nuevo">Nuevo Paciente</Link>
      </li>
    </ul>
  );
};

export default Nav;
