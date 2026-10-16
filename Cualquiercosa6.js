import inquirer from 'inquirer';

async function validarPassword() {
  
  const respuestas = await inquirer.prompt([
    {
      type: 'password',
      name: 'contrasena',
      message: 'Introduce tu nueva contraseña:',
      mask: '*'
    }
  ]);

  const password = respuestas.contrasena;
  
  
  let conteoNumeros = 0;
  let conteoMayusculas = 0;

  for (let i = 0; i < password.length; i++) {
    const caracter = password[i];

    // Contar números
    if (caracter >= '0' && caracter <= '9') {
      conteoNumeros++;
    } 
    
    else if (caracter >= 'A' && caracter <= 'Z') {
      conteoMayusculas++;
    }
  }

  
  const errores = [];

  if (password.length < 8) {
    errores.push("Tener un mínimo de 8 caracteres.");
  }
  if (conteoNumeros < 1) {
    errores.push("Tener al menos un número.");
  }
  if (conteoMayusculas < 1) {
    errores.push("Tener al menos una letra mayúscula.");
  }

  
  if (errores.length === 0) {
    console.log("\n✨ ¡Contraseña segura! ✨");
  } else {
    console.log("\n❌ La contraseña NO es segura. No cumple con:");
    errores.forEach(error => console.log(` - ${error}`));
  }
}

validarPassword();
