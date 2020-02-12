import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';

const models = [User]; // foi colocado em array porque poderá existir mais models.

class Database {
  constructor() {
    this.init();
  }
  init() {
    // conexão do banco de dados com os models
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
