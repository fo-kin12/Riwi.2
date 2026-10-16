import inquirer from "inquirer";

const secreto = Math.floor(Math.random() * 20) + 1;
const maxIntentos = 5;
let acertado = false;

console.log("Adivina el número secreto entre 1 y 20. Tienes 5 intentos.");

try {
    for (let intento = 1; intento <= maxIntentos; intento++) {
        const { numero } = await inquirer.prompt([
            {
                type: "number",
                name: "numero",
                message: `Intento ${intento}/${maxIntentos}:`,
                validate: (valor) => {
                    return Number.isInteger(valor) && valor >= 1 && valor <= 20
                        ? true
                        : "Escribe un número entero entre 1 y 20.";
                },
            },
        ]);

        if (numero === secreto) {
            console.log(`¡Ganaste en ${intento} intentos!`);
            acertado = true;
            break;
        } else if (secreto > numero) {
            console.log("El número secreto es mayor.");
        } else {
            console.log("El número secreto es menor.");
        }
    }

    if (!acertado) {
        console.log(`Perdiste. El número secreto era ${secreto}.`);
    }
} catch (error) {
    console.log("\nJuego cancelado.");
}











