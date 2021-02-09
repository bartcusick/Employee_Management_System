var mysql = require("mysql");
var inquirer = require("inquirer");
// var console.table = require("console.table");
const chalk = require("chalk");
const figlet = require("figlet");
//

const clear = require("clear");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your usernameclear
  user: "root",

  // Your password
  password: "Prostone!",
  database: "employeetracker_db",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});
// console.log(figchalk.mix("figchalk", "blueBright", "Graffiti"));
console.log(
  chalk.blue(
    figlet.textSync("Employee Tracker ///", {
      font: "slant",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: "default",
      whitespaceBreak: true,
    })
  )
);
//      ______                __
//     / ____/___ ___  ____  / /___  __  _____  ___
//    / __/ / __ `__ \/ __ \/ / __ \/ / / / _ \/ _ \
//   / /___/ / / / / / /_/ / / /_/ / /_/ /  __/  __/
//  /_____/_/ /_/ /_/ .___/_/\____/\__, /\___/\___/
//         ______  /_/           _/____/          __ __ __
//        /_  __/________ ______/ /_____  _____ _/_//_//_/
//         / / / ___/ __ `/ ___/ //_/ _ \/ ___//_//_//_/
//        / / / /  / /_/ / /__/ ,< /  __/ / _/_//_//_/
//       /_/ /_/   \__,_/\___/_/|_|\___/_/ /_//_//_/
//

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View Departments",
        "View Roles",
        "View all Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role"
      ],
    })
    .then(function (answer) {
      switch (answer.action) {

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "View Departments":
          viewDepartments();
          break;

        case "View Roles":
          viewRoles();
          break;

          case "View all Employees":
            viewAllEmployees();
            break;

        case "Update Employee Position":
          updateJobs();
          break;

      }
    });
}