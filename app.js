const inquirer = require('inquirer');

function askUser(){
    return inquirer.prompt([{
        message: "What would you like to do",
        type: 'list',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add Department',
            'exit'
        ],
        name: 'option'
    }]).then((ans) => {

    })
}
askUser();