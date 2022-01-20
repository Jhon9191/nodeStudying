import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/aluno';
import User from '../models/user';

const models = [Aluno, User];

const conection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(conection));
