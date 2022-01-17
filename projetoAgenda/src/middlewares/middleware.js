exports.middlewareSecundary = (req, res, next) => {
    res.local.umaVariavelGlobal = "valor da variavel";
    console.log('Passei no middleware secundary');
    next();
};

exports.middlewareGlobal = (req, res, next) => {
    console.log('Passei no middleware global');
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    // if(err && err.code === "EBADCSRFTOKEN"
    if(err){
        return res.render('404');
    }
    next();
}
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}