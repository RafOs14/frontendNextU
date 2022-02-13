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
  
    return true;
  
  }