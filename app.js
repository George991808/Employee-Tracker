
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
                return inquirer.prompt([{
                    message: "What is the new departments name?",
                    type: 'input',
                  
                    name: 'name'
                }]).then((answer) => {
                    createDepartment(answer.name)
                    askUser()
                });
              // code block
           break;
            case "Add Role":
                return inquirer.prompt([ {
                    type: "input",
                    name: "rolename",
                    message: "What is the name of the new role?"
                  },
                  {
                    type: "input",
                    name: "rolesalary",
                    message: "What is the salary of the new role?"
                  },
                  {
                    type: "list",
                    name: "roledepartment",
                    message: "What department number is the new role in?",
                    
                  },
            ]).then((answer) => {
                    createRole(answer.rolename,answer.rolesalary, answer.roledepartment)
                    askUser()
                });
                
              // code block
          break;
            case "Add Employee":
                return inquirer.prompt([ {
                    type: "input",
                    name: "firstname",
                    message: "What is the first name of the new employee?"
                  },
                  {
                    type: "input",
                    name: "lastname",
                    message: "WWhat is the last name of the new employee?"
                  },
                  {
                    type: "list",
                    name: "employeeRole",
                    message: "What employeeRole number does the new employee have?",
                    
                  },
            ]).then((answer) => {
                    createEmployee(answer.rolename,answer.rolesalary, answer.roledepartment)
                    askUser()
                });
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