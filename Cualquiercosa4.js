import inquirer from "inquirer";
const {n} = await inquirer.prompt([
    {
        type: "number",
        name: "n",
        message: "Enter a number:"
    }
]);
    if (Number.isNaN(n) || n <= 0) {
        console.log("Please enter a valid positive number.");
    } else {
        evaluarNumero(n);
    }
 function evaluarNumero(numero) {
    if(numero % 3 === 0 && numero % 5 === 0) {
        console.log("riwi coder");
    } else if (numero % 3 === 0) {
        console.log("riwi");    
    } else if (numero % 5 === 0) {
            console.log("coder");

    } else {
        console.log(numero);
    }
        }
        