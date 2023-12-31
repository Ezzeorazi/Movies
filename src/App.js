import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section id="content" className="content">

        {/* Aquí va el listado de peliculas */}
      <Listado listadoState={listadoState} setListadoState={setListadoState}/>
      </section>

      {/*Aqui va la barra lateral*/}
      <aside className="lateral">
      <Buscador listadoState={listadoState} setListadoState={setListadoState}/>
      <Crear setListadoState={setListadoState}/>
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Copyright by <a href="https://www.linkedin.com/in/ezequiel-orazi32/">Ezequiel Orazi</a>
      </footer>
    </div>
  );
}

export default App;
