const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Importar rotas (serão criadas posteriormente)
const clientsRouter = require('./routes/clients');
const contractsRouter = require('./routes/contracts');
const installmentsRouter = require('./routes/installments');
const messageTemplatesRouter = require('./routes/messageTemplates');

// Usar rotas
app.use('/api/clients', clientsRouter);
app.use('/api/contracts', contractsRouter);
app.use('/api/installments', installmentsRouter);
app.use('/api/message-templates', messageTemplatesRouter);

// Teste da API
app.get('/', (req, res) => {
  res.send('API GilBank funcionando!');
});

// Sincronizar banco e iniciar servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao sincronizar banco:', err);
});
