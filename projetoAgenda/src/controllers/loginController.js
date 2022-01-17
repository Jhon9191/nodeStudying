const Login = require('../models/loginModel')

exports.index = (req, res) => {
  console.log(req.session.user)
  res.render('login');
}

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/login/index');
      });
      return;
    }

    req.flash('success', 'Seu usuario foi cadastrado com sucesso');
    req.session.save(function () {
      return res.redirect('/login/index');
    });
  } catch (err) {
    console.log(err);
    return res.render('404');
  }
}

exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash('errors', login.errors);
      req.session.save(function () {
        return res.redirect('/login/index');
      });
      return;
    }

    req.flash('success', 'Você foi logado com sucesso');
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect('/login/index');
    });
  } catch (err) {
    console.log(err);
    return res.render('404');
  }
}
