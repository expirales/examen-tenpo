import * as userService from "../services/userService";
async function login(email: string, password: string) {
  // Aca se enviaría al back user y pass y se esperaria el token
  return await userService.login(email, password);
}
export { login };
