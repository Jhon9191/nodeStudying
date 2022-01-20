import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// ROTAS QUE NAO SAO NECESSARIAS NA APLICACAO
router.get('/', UserController.index);
router.get('/:id', UserController.show);

// ROTAS NECESSARIAS
router.post('/', UserController.store);
// ROTA UPDATE N DEVE RECEBER ID, POIS NAO QUEREMOS QUE ESTA USUARIO
// EDITE OUTROS PERFIS, SOMENTE O DELE
router.put('/ ', loginRequired, UserController.update);

router.delete('/', loginRequired, UserController.delete);

export default router;
