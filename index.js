import express from 'express';
import{ consultTable, hc} from './src/mysql.js';

let all;
let beta;

const app = express();
app.listen('8000', function(){
    console.log("App corriendo")
})


app.get('/', function(req, res){
    beta = hc();
    all = consultTable();
    res.render("beta",{contacts: all, cant: beta})
})
app.get('/headNreports', function(req, res){
    res.render("headNreports");
});

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('./css'));