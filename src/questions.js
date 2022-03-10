const inquirer = require('inquirer');
const { getDepartments, deleteAllDepartments} = require("./departments");
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

// function viewDepartments() {
//     getDepartments();
//  //   console.log(getDepartments())
//  //       console.table(getDepartments());
//         // askUser();
   
   
//    }
module.exports = askUser;