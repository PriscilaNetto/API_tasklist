const secret = require('./secret');

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: secret.DATABASE_PASSWORD,
  database: 'tasklist',
  define: {
    timesstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
