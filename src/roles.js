const connectDb = require("../database/connect");
/**
 * create a new role in db
 *  @param {String} title
 *   @param {String} salary
 *   @param {number} departmentId
 */
 async function createRole(title, salary, departmentId){
    const connection =   await connectDb();

    const [rows] =  await connection.execute(
        'INSERT INTO `roles` (`title`, `salary`, `department_id`) VALUES (?, ?, ?)'
        , [title, salary, departmentId]
    
    );
    return(1);
}
/**
 * getting all Roles from db
 */
function getRoles(){

}

async function deleteAllRoles(){
    const db= await connectDb();
    db.execute("SET FOREIGN_KEY_CHECKS=0;");
    
    const results = db.execute("TRUNCATE `employee_management`.`roles`;");
    db.execute("SET FOREIGN_KEY_CHECKS=1;");
    return results;
}

module.exports ={
    createRole,
    getRoles,
    deleteAllRoles,
}