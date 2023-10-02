const knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : '37143584800',
      database : 'exercicio_query_builder'
    }
  });

  module.exports = knex;