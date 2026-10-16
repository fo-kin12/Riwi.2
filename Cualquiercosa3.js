import inquirer from "inquirer";
const {n} = await inquirer.prompt([
    {
        type: "number",
        name: "n",
        message: "Enter a number:"
  },
]);
if (Number.isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
} else {
  for (let i = n; i >= 1; i--) {
        console.log(i);
    }
    console.log("Countdown complete!");
} 
















