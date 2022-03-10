
const inquirer = require('inquirer');
const mysql = require('mysql2');
const createDepartment = require("./src/roles");
 const createRole = require("./src/roles");
 const createEmployee = require("./src/employees")
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
                getRoles();
              // code block
           break;
            case "View All Employees":
                getEmployees();
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
 
    const [rows, fields] = await connection.execute('SELECT id, name FROM departments')
    console.table(rows);
    askUser();
   connection.end();
}
async function getRoles(){
    
    const connection= await connectDb();
    
       const [rows, fields] = await connection.execute('SELECT roles.id, roles.title, departments.name AS departments, salary FROM roles LEFT JOIN departments on roles.department_id = departments.id;');
       console.table(rows);
       askUser();
      connection.end();
   }
   async function getEmployees(){
    
    const connection= await connectDb();
    
       const [rows, fields] = await connection.execute('SELECT employees.id, employees.first_name, employees.last_name,  FROM employees;');
       console.table(rows);
       askUser();
      connection.end();
   }


module.exports = askUser;




askUser();


module.exports = askUser;