import express from 'express';
import{ consultTable} from './src/mysql.js';

let all;

const app = express();
app.listen('8000', function(){
    console.log("App corriendo")
})

app.get('/', function(req, res){
    all = consultTable();
    res.render("index", {contacts: all})
})

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('./views'));
app.use(express.static('./src'));
app.use(express.static('./css'));