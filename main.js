import inquirer from "inquirer";
let user = await inquirer.prompt([{
        type: "input",
        name: "userName",
        message: "What is your name?",
    },

    {
        type: "number",
        name: "useAge",
        message:"What is your age?",
    },
    {
        type: "list",
        name: "userHobby",
        message: "What is your hobby?",
        choice: ["cirket", "footbal", "gaming"],
        defult: "nothing"
    },
    {
        type: "checkbox",
        name: "userEmail",
        message: "Please select your valid email?",
        choice: ["cirket@types.com", "footbal@types.com", "gaming@types.com"],
        defult: "nothing"
    }
]);
console.log(user);
