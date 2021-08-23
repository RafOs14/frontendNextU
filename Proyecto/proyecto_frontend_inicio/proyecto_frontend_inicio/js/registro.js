function validar(formulario) {

    //Expresion regular del correo
  
    var mail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!mail.test(formulario.email.value)) {
      errorEmail.innerHTML = "Email inválido";
      return false;
    }
  
    if (formulario.contrasena.value.trim().length < 8) {
      errorContrasena.innerHTML = "Contraseña invalida. Debe tener al menos 8 caracteres"
      return false;
    }
  
    if (formulario.contrasena.value !== formulario.confirmacion.value) {
      errorConfirmacion.innerHTML = "Confirmación no coincide con contraseña";
      return false;
    }
  
    if (formulario.tipo.value === "-1") {
     errorTipo.innerHTML = "Debe seleccionar un genero";
     return false;
    }

    /*if (!formulario.radio.checked) {
      errorRadio.innerHTML = "Debe seleccionar un rango de edad";
      return false;
    }*/
  
    if (!formulario.acepto.checked) {
      errorAcepto.innerHTML = "Debe aceptar los terminos";
      return false;
    }
  
    return true;
  
  }