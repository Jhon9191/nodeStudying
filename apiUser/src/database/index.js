import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/aluno';

const models = [Aluno];

const conection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(conection));
