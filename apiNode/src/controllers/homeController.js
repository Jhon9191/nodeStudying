const HomeModel = require('../models/homeModel');

HomeModel.create({
    title: 'Homedsdsdsd',
    description: 'teste no banco'
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);

});

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}