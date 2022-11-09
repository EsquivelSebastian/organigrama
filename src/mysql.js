import mysql from 'mysql';

let all;
let allB;
let allC;
let allD;
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
const consultTableA = () =>{
    const sql = 'SELECT * FROM basetest.orgTable WHERE basetest.orgTable.column = "a"';
    connector.query(sql, function(err, result, field){
         all = result
    })
    return all
}
const consultTableB = () =>{
    const sql = 'SELECT * FROM basetest.orgTable WHERE basetest.orgTable.column = "b"';
    connector.query(sql, function(err, result, field){
         allB = result
    })
    return allB
}
const consultTableC = () =>{
    const sql = 'SELECT * FROM basetest.orgTable WHERE basetest.orgTable.column = "c"';
    connector.query(sql, function(err, result, field){
         allC = result
    })
    return allC
}
const consultTableD = () =>{
    const sql = 'SELECT * FROM basetest.orgTable WHERE basetest.orgTable.column = "d"';
    connector.query(sql, function(err, result, field){
         allD = result
    })
    return allD
}
const hc = () =>{
    const sql = 'SELECT count(*) as hc from orgTable';
    connector.query(sql, function(err, result, field){
         beta = result
    })
    return beta
}






export  {connectSQL, consultTableA,consultTableB,consultTableC,consultTableD, hc};