function InfoApp() {
  return (
    <>
      <p>
        Aplicación de ejemplo que consume una API pública de productos y muestra
        un listado similar a un e-commerce, con UI responsive básica para
        tarjetas de producto, navbar y modal.
      </p>
      <b>↓ Desplázate hacia abajo para cargar más productos. ↓</b>
      <h4>Tecs</h4>
      <small>ReactJs, TypeScript, ViteJs, Sass, React Router</small>
      <h4>Comentarios sobre:</h4>
      <p>
        ● Definir la mejor forma bajo su criterio para mostrar la lista de la
        home argumentando en unas pocas líneas su solución.
        <br />
        <small>
          Se usó un hook de scroll para implementar carga infinita de productos,
          evitando cargar todos de una vez y mejorando el rendimiento y la
          experiencia del usuario
        </small>
      </p>
      <p>
        ● Defina una estrategia de logout que haga sentido con el diseño de
        context público/privado.
        <br />
        <small>
          La lógica de autenticación se centralizó en un store con Zustand y
          persist para manejar la sesión. Se validan las rutas públicas y
          privadas según la presencia del token, redirigiendo si corresponde.
        </small>
      </p>
      <p>
        ● Proponer una mejora teórica sobre las llamadas usadas al backend para
        que nuestra app sea más eficiente.
        <ul>
          <li>
            <small>Pagination por backend</small>
          </li>
          <li>
            <small>
              Pagination + Scroll infinito o on demand (lo que se implemento)
            </small>
          </li>
          <li>
            <small>Caching desde el back para evitar llamadas repetidas</small>
          </li>
        </ul>
      </p>
    </>
  );
}

export default InfoApp;
