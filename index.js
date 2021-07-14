const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const genHtml = require('./generateHtml');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const allIDS = [];

function createManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Enter your team manager's name:",
        validate: (answer) => {
          if (answer !== "") return true;
          else {
            console.log("Please enter at least one character for the name");
            return false;
          }
          // answer !== ""
          //   ? return true
          //   : console.log("Please enter at least one character for the name");
          //   return false
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Enter your id",
        // validate: (answer) => {
        //   const number = parseInt(answer)
        //   const pass = number.match(/^[1-9]\d*S/);
        //   if (pass) return true
        //   else {
        //     console.log("Please enter a positive number greater than zero");
        //     return false;
        //   }
        // const pass = answer.match(/^[1-9]\d*S/);
        // pass ? true : console.log("Please enter a positive number greater than zero");
        // },
      },
      {
        type: "input",
        name: "office",
        message: "Enter your office number",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email ",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.email,
        answers.office,
        answers.teamnumber
      );
      teamMembers.push(manager);
      allIDS.push(answers.managerId);
      createTeam();
    });
}
function addEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your Name",
        name: "engName",
      },
      {
        type: "input",
        name: "engId",
        message: "Enter your id",
        // validate: (answer) => {
        //   const pass = answer.match(/^[1-9]\d*S/);
        //   if (pass) {
        //     if (allIDS.includes(answer)) {
        //       console.log("ID taken. Please choose a different ID");
        //       return false
        //     } else {
        //       return true;
        //     }
        //   }
        //   return "Please enter a number greater than zero";
        // },
      },
      {
        type: "input",
        message: "Enter your github profile name",
        name: "github",
      },
      {
        type: "input",
        message: "Enter your email ",
        name: "engEmail",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engName,
        answers.engId,
        answers.engEmail,
        answers.github
      );
      teamMembers.push(engineer);
      allIDS.push(answers.engId);
      createTeam();
    });
}
function addIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter your Name",
        name: "internName",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter your id",
        // validate: (answer) => {
        //   const pass = answer.match(/^[1-9]\d*S/);
        //   if (pass) {
        //     if (allIDS.includes(answer)) {
        //       console.log("ID taken. Please choose a different ID");
        //       return false
        //     } else {
        //       return true;
        //     }
        //   }
        //   return "Please enter a number greater than zero";
        // },
      },
      {
        type: "input",
        message: "Enter your school name",
        name: "school",
      },
      {
        type: "input",
        message: "Enter your email ",
        name: "internEmail",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.school
      );
      teamMembers.push(intern);
      allIDS.push(answers.internId);
      createTeam();
    });
}
function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add a team member?",
        name: "teamChoice",
        choices: ["Engineer", "Intern", "No more team members"],
      },
    ])
    .then((team) => {
      switch (team.teamChoice) {
        case "Engineer":
          addEngineer();
          break;

        case "Intern":
          addIntern();
          break;

        default:
          console.log("good bye");
          writeToFile("./teamArray.html", genHtml(teamMembers));
      }
    })
  
}

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

createManager();

