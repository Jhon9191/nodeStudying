exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send("Ei, sou a nova rota de POST!");
}