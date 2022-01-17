exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    next();
};

exports.middlewareSecundary = (req, res, next) => {
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