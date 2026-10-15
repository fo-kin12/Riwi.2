

/*El parqueadero de la sede cobra según las horas que el vehículo permanece estacionado.
•Pide el número de horas y si el usuario es coder de Riwi (sí / no).
• La primera hora cuesta $3.000 y cada hora adicional $2.000.
• Si el total supera $20.000, se cobra la tarifa plena de $20.000.
• Si es coder, aplica un descuento del 15% sobre el valor final.
• Muestra el total a pagar.
*/

import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'number',
      name: 'horas',
      message: 'Ingrese el número de horas que permaneció el vehículo:'
    },
    {
      type: 'list',
      name: 'esCoder',
      message: '¿Es coder de Riwi?',
      choices: ['Sí', 'No']
    }
  ])
  .then((answers) => {
    let total = 0;

    if (answers.horas > 0) {
      if (answers.horas === 1) {
        total = 3000;
      } else {
        total = 3000 + (answers.horas - 1) * 2000;
      }
    }

    if (total > 20000) {
      total = 20000;
    }

    if (answers.esCoder === 'Sí') {
      total = total * 0.85;
    }

    console.log(`El total a pagar es: $${total.toLocaleString('es-CO')}`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('El prompt no pudo ser renderizado en este entorno.');
    } else {
      console.error('Algo salió mal:', error);
    }
  });

