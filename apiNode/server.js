const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    </form>
    `);
})

app.post('/', (req, res)=>{
    res.send("Recebi o formulário!");
})

app.get('/contato', (req, res)=>{
    res.send("Obrigado por entrar em contato com a gente");
})


app.listen(3000, ()=>{
    console.log("Acessando httpp://localhost:3000");
    console.log("servidor executando na porta 3000")
});