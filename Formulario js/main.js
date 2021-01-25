const nombre = document.getElementById("name")
const apellido = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repeatpassword = document.getElementById("repeat-password")
const phone = document.getElementById("phone")
const check = document.getElementById("check")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const ageDiv = document.getElementById("ageDiv");
const ageInput = document.getElementById("ageInput");

ageInput.addEventListener('change', function() {
  const birthday = new Date(ageInput.value)
  ageDiv.innerHTML= "Tienes " + ~~((Date.now() - birthday) / (31557600000)) + " años"
  
})

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	password: /^.{4,12}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ 
}


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""
    if(!expresiones.nombre.test(nombre.value)){
        warnings += `El nombre no es valido <br>`
        entrar = true        
    }
    if(!expresiones.apellido.test(apellido.value)){
        warnings += `El apellido no es valido <br>`
        entrar = true        
    }
    if(!expresiones.email.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(!expresiones.password.test(password.value)){
        warnings += `La constraseña debe tener entre 4 y 12 caracteres  <br>`
        entrar = true 
    }
    if(password.value != repeatpassword.value){
        warnings += `Las contraseñas no coinciden  <br>`
        entrar = true
    }
    if(!expresiones.telefono.test(phone.value)){
        warnings += `El telefono tienen que ser numeros entre 7 y 14 caracteres  <br>`
        entrar = true
    }
    if(!check?.checked){
         warnings += `Debe aceptar los terminos y condiciones  <br>`
         entrar = true
     }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
    const usersRef = dbRef.child('users');
    let newUser = {
    nombre: inputNombre.value,
    apellido: inputApellido.value
    };
    usersRef.push(newUser)

})