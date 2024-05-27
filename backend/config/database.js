const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool(process.env.DATABASE_URL,{
    dialect: 'postgres',
    logging: false,
});

module.exports = pool;
