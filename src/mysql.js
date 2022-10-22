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
    const sql = 'SELECT * FROM basetest.agenda';
    connector.query(sql, function(err, result, field){
         all = result
         console.log(all)
    })
    return all
}








export  {connectSQL, consultTable};