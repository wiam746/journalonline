require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  JWT_SECRET: process.env.JWT_SECRET || 'votre_secret_par_defaut',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '7d',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/auth_app',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000'
};