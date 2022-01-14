require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.CONECTION_STRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((res) => {
    console.log("Conectado ao mongo!");
    app.emit("pronto");
}).catch((err) => {
    console.log(err);
})

const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended : true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, ()=>{
    console.log("Acessando httpp://localhost:3000");
    console.log("servidor executando na porta 3000");
});