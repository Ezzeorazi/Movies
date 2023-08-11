export const GuardarEnStorage = (clave, elemento) => {
            
    //Conseguir los elementos que ya tenemos en localStorage
    let elementos = JSON.parse(localStorage.getItem(clave));
    
    console.log(elementos)
    //Comprobar si es un array
    if(Array.isArray(elementos)){

        //añadir dentro del array un elemento nuevo
        elementos.push(elemento);
    }else {
        //Crear un array con la nueva lista
        elementos = [elemento]
    };

    //Guardar en el LocalStorage
        localStorage.setItem(clave, JSON.stringify(elementos));
        
    // Devolver objeto
    return elemento;

}