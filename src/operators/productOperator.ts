import * as productService from "../services/productService";
async function loadProducts(/* page: number */) {
  // Aca se enviaría por pagination el page al servicio de backend.
  return await productService.loadProducts(/* page */);
}
export { loadProducts };
