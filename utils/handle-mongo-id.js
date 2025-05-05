const handleMongoId = (elemento) => { 
    const clave = '_id'
    
    elemento = JSON.parse(JSON.stringify(elemento))

    if ( Array.isArray(elemento) ) {
        console.log('Llego un array de productos')

        for (let i = 0; i < elemento.length; i++) {
            elemento[i].id = elemento[i][clave] 
            delete elemento[i][clave] 
        }

    } else {
        console.log('Llegó un documento')
        elemento.id = elemento[clave] 
        delete elemento[clave] 
    }

    return elemento 


}

export default handleMongoId