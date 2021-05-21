import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// la funcion getGifs hace la peticion a la url de las imagenes. Para hacerlo utiliza promesa. la promea es una funcion normal, que tiene agregado delante del () el async. Este lo que hace es que al estar acompañado del await, transforma la peticion como si fuera sincrona, esto quiere decir, que hasta que no obtenga la respuesta de la url no siga.
export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category )    
   
    return (
        <>
            <h3 className='animate__animated animate__bounce'>{ category }</h3>

            { loading && <p>'Loading'</p> }

            <div className='card-grid animate__animated animate__zoomIn'>                               
                    {
                        images.map( img => (
                            <GifGridItem 
                            key ={ img.id }                            
                            { ...img }/>
                        ))
                    }                            
            </div>
        </>
    )
}


