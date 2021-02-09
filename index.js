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

//////////////////////////
//Add Departments
function addDepartment() {
  inquirer
    .prompt({
      type: "input",
      name: "departmentName",
      message: 'Enter the name of the "Department" you want to add: ',
    })

    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?",
        { department_name: answer.departmentName },
        function (err) {
          if (err) throw err;
          console.log("Department added successfully");
          runSearch();
        }
      );
    });
}

//////////////////////////
//Add Role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "roleName",
        message: "Enter the role you want to add: ",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the salary for the role you added: ",
      },
      {
        type: "input",
        name: "departmentID",
        message: "Enter the department ID for the role you added: ",
      },
    ])

    .then((answer) => {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: answer.roleName,
          salary: answer.salary,
          department_id: answer.departmentID,
        },
        function (err) {
          if (err) throw err;
          console.log("Role added successfully");
          runSearch();
        }
      );
    });
}

//////////////////////////
//Add Employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter First Name: ",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter Last Name: ",
      },
      {
        type: "input",
        name: "roleID",
        message: "Enter Role id: ",
      },
      {
        type: "input",
        name: "managID",
        message: "Enter Manager's id: ",
      },
    ])

    .then((answer) => {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: answer.roleID,
          manager_id: answer.managID,
        },
        function (err) {
          if (err) throw err;
          console.log("Employee added successfully");
          runSearch();
        }
      );
    });
}

//////////////////////////
  //View Departments
  const viewDepartments = () => {
    const query = "SELECT * from department";
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.log('\n');
      console.log('VIEW DEPARTMENTS');
      console.log('\n');
      console.table(res);
      runSearch();
    })
  };

//////////////////////////
//View Roles
const viewRoles = () => {
  connection.query(
    `SELECT roles.id, title, salary, department_id FROM employeetracker_DB.roles
    LEFT JOIN department ON roles.department_id = department.id`,
    (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.log("VIEW ALL ROLES");
      console.log("\n");
      console.table(res);
      runSearch();
    }
  );
};

//////////////////////////
//View All Employees
function viewAllEmployees() {
  console.log("worked");
  const query = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, department.department_name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employees
      LEFT JOIN employees manager on manager.id = employees.manager_id
      LEFT JOIN roles ON (roles.id = employees.role_id  )
      LEFT JOIN department ON (department.id = roles.department_id)`;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.log("\n");
    console.log("VIEW ALL EMPLOYEES");
    console.log("\n");
    console.table(res);
    runSearch();
  });
}

//
// function readColleges() {
//   connection.query("SELECT name FROM colleges", function(err, res) {
//     if (err) throw err;

//     // Log all results of the SELECT statement
//     console.table(res);
//     connection.end();
//   });
// }
//

// function multiSearch() {
//   var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
//   connection.query(query, function(err, res) {
//     for (var i = 0; i < res.length; i++) {
//       console.log(res[i].artist);
//     }
//     runSearch();
//   });
// }

// function rangeSearch() {
//   inquirer
//     .prompt([
//       {
//         name: "start",
//         type: "input",
//         message: "Enter starting position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       },
//       {
//         name: "end",
//         type: "input",
//         message: "Enter ending position: ",
//         validate: function(value) {
//           if (isNaN(value) === false) {
//             return true;
//           }
//           return false;
//         }
//       }
//     ])
//     .then(function(answer) {
//       var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
//       connection.query(query, [answer.start, answer.end], function(err, res) {
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             "Position: " +
//               res[i].position +
//               " || Song: " +
//               res[i].song +
//               " || Artist: " +
//               res[i].artist +
//               " || Year: " +
//               res[i].year
//           );
//         }
//         runSearch();
//       });
//     });
// }

// function songSearch() {
//   inquirer
//     .prompt({
//       name: "song",
//       type: "input",
//       message: "What song would you like to look for?"
//     })
//     .then(function(answer) {
//       console.log(answer.song);
//       connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
//         console.log(
//           "Position: " +
//             res[0].position +
//             " || Song: " +
//             res[0].song +
//             " || Artist: " +
//             res[0].artist +
//             " || Year: " +
//             res[0].year
//         );
//         runSearch();
//       });
//     });
// }

// function songAndAlbumSearch() {
//   inquirer
//     .prompt({
//       name: "artist",
//       type: "input",
//       message: "What artist would you like to search for?"
//     })
//     .then(function(answer) {
//       var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
//       query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
//       query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year, top_albums.position";

//       connection.query(query, [answer.artist, answer.artist], function(err, res) {
//         console.log(res.length + " matches found!");
//         for (var i = 0; i < res.length; i++) {
//           console.log(
//             i+1 + ".) " +
//               "Year: " +
//               res[i].year +
//               " Album Position: " +
//               res[i].position +
//               " || Artist: " +
//               res[i].artist +
//               " || Song: " +
//               res[i].song +
//               " || Album: " +
//               res[i].album
//           );
//         }

//         runSearch();
//       });
//     });
// }
