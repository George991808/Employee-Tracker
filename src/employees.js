const connectDb = require("../database/connect");
/**
 * create a new Employee in db
 *  @param {String} firstName
 *   @param {String} lastName
 *   @param {number} roleId
 *   @param {number} managerId
 */
async function createEmployee(firstName, lastName, roleId, managerId){
    const connection =   await connectDb();

    const [rows] =  await connection.execute(
        'INSERT INTO `employees` (`first_name`, `last_name`, `role_id`, manager_id) VALUES (?, ?, ?, ?)'
        , [firstName, lastName, roleId, managerId]
    
    );
    return(1);
}
/**
 * getting all Employees from db
 */
function getEmployees(){

}
/**
* create a new Employee in db
*  @param {number} id
*   @param {number} newRoleId

*/
function updateEmployeeRole(id, newRoleId){

}

async function deleteAllEmployees(){
    const db= await connectDb();
    db.execute("SET FOREIGN_KEY_CHECKS=0;");
    
    const results = db.execute("TRUNCATE `employee_management`.`employees`;");
    db.execute("SET FOREIGN_KEY_CHECKS=1;");
    return results;
}


module.exports ={
    createEmployee,
    getEmployees,
    updateEmployeeRole,
    deleteAllEmployees
}