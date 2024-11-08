const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./swagger.yml');

module.exports = (app) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
