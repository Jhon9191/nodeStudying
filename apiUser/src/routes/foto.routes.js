import { Router } from 'express';
import multer from 'multer';
import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const router = new Router();

const upload = multer(multerConfig);

router.post('/', upload.single('arquivo'), fotoController.store);

export default router;
