function comprobarClave() {
    clave1= document.getElementById('clave1');
    clave2= document.getElementById('clave');

}
 
    const BOTON_REGISTRO=document.getElementById("botonRegistro");

    BOTON_REGISTRO.addEventListener("click",() => {
    
          if (clave1.value == clave2.value) {
            alert("Se ha registrado correctamente");
          } else  {
           alert("La contraseña no coincide");
          }
          }
        
    )   

  //   function enviarConsulta() {
  //     enviar= document.getElementById('botonEnviar');
      
  
  // }
  //   const BOTON_ENVIAR=document.getElementById("botonEnviar");

  //   BOTON_ENVIAR.addEventListener("click",(enviar) => {
  //   {
        
  //           alert("Se ha registrado tu consulta");
       
          
  //         }
  //       }
        
  //   )   


   
   