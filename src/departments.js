const { restoreDefaultPrompts } = require("inquirer");
const connectDb = require("../database/connect");


/**
 * create a new department in db
 *  @param {String} name
 */
async function createDepartment(name){
    const connection =   await connectDb();

    const [rows] =  await connection.execute(
        'INSERT INTO `departments` (`name`) VALUES (?)', 
        [name]
    );
    return(1);
}
/**
 * getting all departments from db
 */
function getDepartments(id){

}

async function deleteAllDepartments(){
    const db= await connectDb();
    db.execute("SET FOREIGN_KEY_CHECKS=0;");
    
    const results = db.execute("TRUNCATE `employee_management`.`departments`;");
    db.execute("SET FOREIGN_KEY_CHECKS=1;");
    return results;
}



module.exports ={
    createDepartment,
    getDepartments,
    deleteAllDepartments,
}