const {createDepartment, deleteAllDepartments} = require("../../src/departments");
const {createRole, deleteAllRoles} = require("../../src/roles");
const {createEmployee, deleteAllEmployees} = require("../../src/employees");
const {faker} = require('@faker-js/faker');
const connectDb = require("../connect");

async function seed() {
   
    

    await deleteAllDepartments();
    await deleteAllRoles();
    await deleteAllEmployees();
     //seed department
     const numOfDepartments = 4
    for (let index = 0; index <numOfDepartments; index++){
            await createDepartment(faker.name.jobArea());
        }
    //seed roles
    const numOfRoles = 6
    for (let index = 0; index <numOfRoles; index++){
        await createRole(faker.name.jobTitle(),Math.random()*100000+35000,getRandomInt(numOfDepartments));
    }
    

    // //create managers
    const numOfManagers = 3
    for (let index = 0; index <numOfManagers; index++){
        await createEmployee(faker.name.firstName(),faker.name.lastName(),getRandomInt(numOfRoles),null);
    }
    // //seed employees
    const numOfEmployees = 8
    for (let index = 0; index <numOfEmployees; index++){
        await createEmployee(faker.name.firstName(),faker.name.lastName(),getRandomInt(numOfRoles),getRandomInt(numOfManagers));
    }
}
function getRandomInt(max) {
    return Math.max(Math.round(Math.random() * max),1);
  }
seed();