import inquirer from 'inquirer';

const {} = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'temperaturaInput',
      message: 'Introduce la temperatura actual:',
    }
  ])
  .then((answers) => {
const {temperaturaInput} = answers;
    let temperatura = Number(temperaturaInput);

    if (isNaN(temperatura) || temperaturaInput.trim() === "") {          
        console.log("❌ Error: El valor ingresado no es un número válido."); 
    } else if (temperatura < 10) {          
        console.log("🧥 Hace frío, lleva chaqueta"); 
    } else if (temperatura >= 10 && temperatura <= 24) {          
        console.log("🌤️ Clima templado"); 
    } else {          
        console.log("🥵 Hace calor, hidrátate"); 
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Error: El prompt no se pudo renderizar aquí.");
    } else {
      console.log("Ocurrió un error:", error);
    }
  });







