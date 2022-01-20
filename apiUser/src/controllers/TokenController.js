import jwt from 'jsonwebtoken';
import User from '../models/user';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    // verificao para campos faltando
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    // procura o usuario baseado no email na base de dados
    const user = await User.findOne({ where: { email } });

    // validacao caso o usuario nao exista
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // verifica se a senha e valida
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

export default new TokenController();
