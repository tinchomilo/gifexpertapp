export const getGifs = async ( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=10&api_key=qP8rHo4FWUfNUp43HYrDikTUgmlsmIJz`;

    const resp = await fetch( url ); // Hago la peticion a la url
    const { data } = await resp.json(); // obtengo como respuesta un objeto del tipo json
    

    const gifs = data.map(img => { // al hacer destructuring de data cunado recibo la respuesta de la api, hago un mapeo de la data, y guardo en una variable los datos que me interesan, retornando(creando) un objeto
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs    
    }

    // esta funcion no obtiene las imagenes, devuelve una promesa que resuelve la coleccion de imagenes