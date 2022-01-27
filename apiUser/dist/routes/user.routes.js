"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// ROTAS QUE NAO SAO NECESSARIAS NA APLICACAO
router.get('/', _UserController2.default.index);
router.get('/:id', _UserController2.default.show);

// ROTAS NECESSARIAS
router.post('/', _loginRequired2.default, _UserController2.default.store);
// ROTA UPDATE N DEVE RECEBER ID, POIS NAO QUEREMOS QUE ESTA USUARIO
// EDITE OUTROS PERFIS, SOMENTE O DELE
router.put('/ ', _loginRequired2.default, _UserController2.default.update);

router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;
