exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="post">
    Nome: <input type="text" name="nome"/>
    <button>Enviar</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send("Ei, sou a nova rota de POST!");
}