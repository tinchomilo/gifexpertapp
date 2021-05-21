import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

     // useEffect recibe una funcion, y el segundo parametro es un arreglo
    // esto hace que cuando el componente se  renderize se ejecute solo 1 vez, y no haga la llamada a la api cada vez que toco el boton
    useEffect( () => {          
            getGifs( category ) 
                .then( imgs => {                   
                        setState({
                            data: imgs,
                            loading: false
                        });                                      
                })
            }, [ category ])
            
    return state; // {data: [], loading: true}
}

// (1) ====> .then( setImages ). como la el primer argumento de la funcion es el mismo que envia a la otra funcion se puede obviar el parametro imgs         