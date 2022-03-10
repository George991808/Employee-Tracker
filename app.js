
const inquirer = require('inquirer');
const mysql = require('mysql2');
const {createRole, getRoles} = require("./src/roles");
const {createEmployee, getEmployees} = require("./src/employees")
const connectDb = require("./database/connect");
// const askUser = require("./src/questions");

function askUser(){
    return inquirer.prompt([{
        message: "What would you like to do",
        type: 'list',
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role",
            'exit'
        ],
        name: 'option'
    }]).then((ans) => {
   
        switch(ans.option) {
            case "View All Departments":
             
                getDepartments();
               break;
            case "View All Roles":
              // code block
           break;
            case "View All Employees":
              // code block
          break;
            case "Add Department":
              // code block
           break;
            case "Add Role":
              // code block
          break;
            case "Add Employee":
                // code block
               break;
            case "Update Employee Role":
                // code block
               break;
            default:
              // code block
          }
    });
}
async function getDepartments(){
    
 const connection= await connectDb();

    // console.log("3")
    //  db.query('SELECT * FROM departments;', function (err, results) {
    // if (err) console.log(err);   
    const [rows, fields] = await connection.execute('SELECT * FROM `departments`');
    console.table(rows);
    askUser();
   connection.end();
    // test();
    
    //   });
    // const results = db.execute("SELECT * FROM `employee_management`.`departments`;");
    // console.log("4")
    // return results;
}

// function viewDepartments() {
//     getDepartments();
//  //   console.log(getDepartments())
//  //       console.table(getDepartments());
//         // askUser();
   
   
//    }
module.exports = askUser;




askUser();


module.exports = askUser;