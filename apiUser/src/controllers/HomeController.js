import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    const aluno = await Aluno.create({
      nome: 'joao',
      sobrenome: 'antonio',
      email: 'joao@gmail.com',
      idade: 22,
      peso: 85.6,
      altura: 1.76,
    });
    res.json(aluno);
  }
}

export default new HomeController();
