const bookshelf = require('bookshelf');

const config = {
  host: process.env.HOST_MYSQL,
  port: process.env.PORT_MYSQL,
  user: process.env.USERNAME_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE_MYSQL,
};

const knex = require('knex')({
  client: 'mysql',
  connection: config,
});

function connect() {
  return bookshelf(knex);
}

const db = connect();
db.plugin('pagination');
db.plugin('registry');

module.exports = { db, knex, config };
