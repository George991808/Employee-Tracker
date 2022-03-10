

const connectDb = require("../database/connect");
const mysql = require('mysql2/promise');


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
     connection.end();

}
/**
 * getting all departments from db
 */
 function getDepartments(){
    
    // const connection= await connectDb();

    // console.log("3")
    //  db.query('SELECT * FROM departments;', function (err, results) {
    // if (err) console.log(err);   
    // const [rows, fields] = await connection.execute('SELECT * FROM `departments`');
    // console.table(rows);
    // connection.end();
    // test();
    
    //   });
    // const results = db.execute("SELECT * FROM `employee_management`.`departments`;");
    // console.log("4")
    // return results;
}

async function deleteAllDepartments(){
    const db= await connectDb();
    db.execute("SET FOREIGN_KEY_CHECKS=0;");
    
    const results = db.execute("TRUNCATE `employee_management`.`departments`;");
    db.execute("SET FOREIGN_KEY_CHECKS=1;");
    connection.end();
 
    // return results;
}

// getDepartments()

module.exports = {
    createDepartment,
    getDepartments,
    deleteAllDepartments,
};