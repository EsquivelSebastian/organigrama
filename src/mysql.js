import mysql from 'mysql';

let all;

const connector = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database:'basetest'
})

const connectSQL = () =>{
    connector.connect(err => {
        if(err) throw err
        console.log("Conectado BBDD ")
    })
}
const consultTable = () =>{
    const sql = 'SELECT * FROM basetest.agendaa where legajo_reporta = 13758';
    connector.query(sql, function(err, result, field){
         all = result
    })
    return all
}








export  {connectSQL, consultTable};