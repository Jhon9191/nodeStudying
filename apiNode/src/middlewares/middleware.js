exports.middlewareSecundary = (req, res, next) => {
    res.local.umaVariavelGlobal = "valor da variavel";
    console.log('Passei no middleware secundary');
    next();
};

exports.middlewareGlobal = (req, res, next) => {
    console.log('Passei no middleware global');
    next();
};