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

  //   function consulta() {
  //     enviar= document.getElementById('botonEnviar');
      
  
  // }
  //   const BOTON_ENVIAR=document.getElementById("botonEnviar");

  //   BOTON_ENVIAR.addEventListener("click",() => {
  //   {
  //      if("")
  //      {

  //       alert("Recibimos tu consulta, gracias!");
  //     } 
  //   }
  // }
  //   )   


  // ver

  function guardarDatos() {


}
 
    const BOTON_Guardar=document.getElementById("btnGuardar");

    BOTON_Guardar.addEventListener("click",() => {
    
          if (clave1.value == clave2.value) {
            alert("Se ha registrado correctamente");
          } else  {
           alert("La contraseña no coincide");
          }
          }
        
    ) 
  //  ver

 


  var checkbox = document.getElementById('TituloSecundarioNO');
  var miDiv = document.getElementById('secundarioVisible');

  // Agrega un event listener para el cambio del checkbox
  checkbox.addEventListener('change', function() {
      // Si el checkbox está marcado, muestra el div; de lo contrario, ocúltalo
      console.log("funco");
      miDiv.style.display = checkbox.checked ? 'none' : 'block';
  });

  
