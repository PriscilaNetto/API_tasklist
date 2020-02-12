import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {    // recebe por parametro o sequelize
    super.init(              // o super chama o método init da classe Model
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}
export default User;
