import { signIn } from "../services/users";

const SignIn = ({ changeToken }) => {
  let credenciales = {};
  const eventoChange = (e) => {
    credenciales[e.target.name] = e.target.value;
  };

  const signInEvent = async () => {
    const token = await signIn(credenciales);
    changeToken(token);
  };

  const buttonClick = () => {
    signInEvent();
  };
  return (
    <>
      <label>Correo:</label>
      <input type="email" onChange={eventoChange} name="email" />
      <br />
      <br />
      <label>contraseña:</label>
      <input type="password" onChange={eventoChange} name="password" />
      <br />
      <br />
      <button onClick={buttonClick}>Iniciar sesión</button>
    </>
  );
};

export default SignIn;
