const checkComplete = () =>{
    const i = document.createElement("i") ; 
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click",completTask)
    return i ;
}

//Arrow Function ó funcion anónima
const completTask = (event) =>{
    const element = event.target ; 
    element.classList.toggle("fas") ;  //toggle mira si la clase existe, si existe la quita si no existe la agrega
    element.classList.toggle("completeIcon")
    element.classList.toggle("far") ;
}

export default checkComplete ; 