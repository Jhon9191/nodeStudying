import Aluno from '../models/aluno';

class HomeController {
  async index(req, res) {
    res.json('oks');
  }
}

export default new HomeController();
