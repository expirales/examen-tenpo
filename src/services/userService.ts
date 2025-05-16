// import instance from "./axiosInstance";

import axios from "axios";

async function login(email: string, password: string) {
  // instance.get('aca simularíamos el llamado con el token incluido')
  // y si hubiera page se lo enviaríamos también.
  return await axios.post("https://api.del.backend.com/login", {
    email,
    password,
  }); // supongamos que devuelve el token-id y mas data del usuario.
}
export { login };
