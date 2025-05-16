// import instance from "./axiosInstance";

import axios from "axios";

async function loadProducts(/* page: number */) {
  // instance.get('aca simularíamos el llamado con el token incluido')
  // y si hubiera page se lo enviaríamos también.
  return await axios.get("https://dummyjson.com/products?limit=100&skip=0");
}
export { loadProducts };
