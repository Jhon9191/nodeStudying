const express = require('express');
const app = express();

app.use(express.urlencoded({extended : true}));

app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    </form>
    `);
})

app.get('/testes/:idUsuarios?/:param', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
})

app.post('/', (req, res)=>{
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}`);
})


app.listen(3000, ()=>{
    console.log("Acessando httpp://localhost:3000");
    console.log("servidor executando na porta 3000")
});