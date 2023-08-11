import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  //const [listadoState, setListadoState] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    console.log("Componentes del listado de peliculas");
    conseguirPeliculas();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    //Conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas();
    // Filtrar esas peliculas para que elimine del array lo que no quiero
    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    console.log(pelis_almacenadas, nuevo_array_pelis);
    //actualizar el estado del listado
    setListadoState(nuevo_array_pelis);
    // actualizar los datos del localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {listadoState.length > 0 ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button onClick={() => setEditar(peli.id)} className="edit">
                Editar
              </button>
              <button onClick={() => borrarPeli(peli.id)} className="delete">
                Borrar
              </button>

              {/*Aparece formulario para editar*/}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2 className="noHayPeli">No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
