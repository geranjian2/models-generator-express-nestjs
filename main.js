const models = require('./src/index')
const main = async () => {
    const connection = {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '5432',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'kamisama123',
      database: process.env.DB_DATABASE || 'payment_backoffice'
    };
    console.log('info');
    const modelsPromise = await models(connection.database, connection,'./modules/');
  
    const all = await Promise.all([modelsPromise]);
  }
  
  main();