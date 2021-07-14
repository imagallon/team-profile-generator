const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const teamMembers = [];
const allIDS = [];

// const questions = [
//   {
//     type: "confirm",
//     message: "Are you a manager?",
//     name: "manager",
//   },
//   {
//     type: "input",
//     message: "Enter your id",
//     name: "id",
//   },
//   {
//     type: "input",
//     message: "How many team members do you want in your team",
//     name: "teamnumber",
//   },
//   {
//     type: "input",
//     message: "Enter your office number",
//     name: "office",
//   },
//   {
//     type: "input",
//     message: "Enter your email ",
//     name: "usage",
//   },
//   {
//     type: "list",
//     message: "Would you like to add a team member?",
//     name: "team",
//     choices: [
//       "Engineer",
//       "Intern",
//       {
//         name: "No new employee",
//         value: "",
//       },
//     ],
//   },
// ];

function init() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "Enter your team manager's name:",
          validate: (answer) => {
            answer !== ""
              ? true
              : "Please enter at least one character for the name";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "Enter your id",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*S/);
            pass ? true : "Please enter a positive number greater than zero";
          },
        },
        {
          type: "input",
          message: "How many team members do you want in your team",
          name: "teamnumber",
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
    inquirer
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
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*S/);
            if (pass) {
              if (allIDS.includes(answer)) {
                return "ID taken. Please choose a different ID";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero";
          },
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
    inquirer
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
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*S/);
            if (pass) {
              if (allIDS.includes(answer)) {
                return "ID taken. Please choose a different ID";
              } else {
                return true;
              }
            }
            return "Please enter a number greater than zero";
          },
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
            buildTeam();
        }
      });
  }

  function buildTeam() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile("./sample/README.md", genMarkdown({ ...answers }));
    });
  }
}

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}









//     Check if output directory exists if the output path doesn't exist.
//     existsSync, writeFileSync, mkdirSync
// if (fs.existsSync("OUTPUT_DIR"))

//     IF it doesn't exist create one
//     otherwise write into your file with the new team members you created above

//     create your manager
