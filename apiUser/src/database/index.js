import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/aluno';
import User from '../models/user';
import Foto from '../models/foto';

const models = [Aluno, User, Foto];

const conection = new Sequelize(dataBaseConfig);

models.forEach((model) => model.init(conection));
models.forEach((model) => model.associate && model.associate(conection.models));
