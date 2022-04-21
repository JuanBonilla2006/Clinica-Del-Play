let bandera=true
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    console.log("hace click")
    let buscador=document.getElementById("buscador")
        if(bandera==true){
            buscador.classList.remove("invisible")
        }else{
            buscador.classList.add("invisible")
        }
    bandera=!bandera
        

})
