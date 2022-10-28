import mysql from 'mysql';

let all;
let beta;

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
const hc = () =>{
    const sql = 'SELECT count(*) as hc from agendaa';
    connector.query(sql, function(err, result, field){
         beta = result
    })
    return beta
}






export  {connectSQL, consultTable, hc};