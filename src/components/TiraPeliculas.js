import React from 'react';
import Pelicula from './Pelicula';
function TiraPeliculas() {
    return (
        <div>
            <Pelicula generos={['Fantasía', 'Aventuras']} rating={8.0} titulo='Harry Potter' />
            <Pelicula generos={['Familiar', 'Animación']} rating={7.5} titulo='Toy Story' />
            <Pelicula rating={1.0} generos={['Drama']} titulo='Her' />
            <Pelicula rating={9.0} titulo='Parasite' />
            <Pelicula generos={['Acción', 'Aventuras']} rating={4.0} titulo='Transformers' />
        </div>
    );
}
export default TiraPeliculas;