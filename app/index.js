const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { mainModule } = require("process");

// const employee = [
//     {
//         type: "input",
//         message: "Select Employee Position",
//         name: "employee type",
//         choices: [
//           "manager",
//           "engineer",
//           "intern",
//           "new"
//     ]},

 inquirer.prompt ([
      {
        type: "input",
        message: "Enter manager name",
        name: "managerName"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "managerID"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "managerEmail"
      },
      {
        type: "input",
        message: "Enter your office number",
        name: "managerOfficeNumber"
      },
      {
        type: "input",
        message: "Enter engineer name",
        name: "engineerName"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "engineerID",
      },
      {
        type: "input",
        message: "Enter your email?",
        name: "engineerEmail"
      },
      {
        type: "input",
        message: "Enter your GitHub username",
        name: "engineerGitHub"
      },
      {
        type: "input",
        message: "Enter intern name",
        name: "internName"
      },
      {
        type: "input",
        message: "Enter your id",
        name: "internID"
      },
      {
        type: "input",
        message: "Enter your email",
        name: "internEmail"
      },
      {
        type: "input",
        message: "Enter linkedin profile",
        name: "internLinkedin"
      }
      
    ])
    .then(function(response) {
      if (response.confirm === response.choices) {
        console.log("Choice Selected");
      }
      else {
        console.log("No selection has been made");
      }
    });



// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt()
    .then( answers => {
        // Use user feedback for... whatever!!
        writeToFile("team.html", ({...mainModule.html}))
      })

}

// function call to initialize program
init();



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
