const {createDepartment, deleteAllDepartments} = require("../../src/departments");
const {faker} = require('@faker-js/faker');
const connectDb = require("../connect");

async function seed() {
    //seed departmnet
    

    await deleteAllDepartments();
    for (let index = 0; index <10; index++){
            await createDepartment(faker.commerce.department());
        }
    //seed roles

    //seed employees
}
seed();