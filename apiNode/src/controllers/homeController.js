exports.paginaInicial = (req, res) => {
    // req.session.usuario = {nome: "joao", logado : true};
    // req.flash('info', "ola mundo");
    // req.flash('info2', "ola mundo2");
    // req.flash('info3', "ola mundo3");
    // console.log(req.flash('info'));
    // console.log(req.flash('info2'));
    // console.log(req.flash('info3'));
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}