import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const aluno = await User.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
