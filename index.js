import express from 'express';
import{ consultTableA,consultTableB,consultTableC,consultTableD, hc} from './src/mysql.js';

let all;
let columB;
let columC;
let columD;

let beta;

const app = express();
app.listen('8000', function(){
    console.log("App corriendo")
})


app.get('/', function(req, res){
    beta = hc();
    all = consultTableA();
    columB = consultTableB();
    columC = consultTableC();
    columD = consultTableD();
    res.render("beta",{columnA: all, columnB: columB, columnC: columC, columnD: columD, cant: beta})
})
app.get('/headNreports', function(req, res){
    res.render("headNreports");
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('./css'));