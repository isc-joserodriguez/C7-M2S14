import axios from "axios";

export const signIn = async (credenciales) => {
  /* const {
    data: {
      detail: { token },
    },
  } */
  const respuesta = await axios.post(
    "https://todo-app-bs.herokuapp.com/v1/user/login",
    credenciales
  );
  /* const data = respuesta.data;
  const detail = data.detail;
  const token = detail.token; */

  const token = respuesta.data.detail.token;
  return token;
};
