const connectDb = require("../database/connect");


/**
 * create a new department in db
 *  @param {String} name
 */
async function createDepartment(name){
    const connection =   await connectDb();

    const [rows] =  await connection.execute('INSERT INTO `departments` (`name`) VALUES (?)', [name]);
    console.log(rows);
}
/**
 * getting all departments from db
 */
function getDepartments(id){

}



module.exports ={
    createDepartment,
    getDepartments
}