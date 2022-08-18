const express = require('express');
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
// CORS - Middleware modificado para liberar requisições vindas do Front-end
app.use(cors);
app.use(routes);
// ERROR HANDLER - Middleware modificado para interceptar erros não tratados
app.use(errorHandler);

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'));
