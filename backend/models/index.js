const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: false,
});

const Client = require('./client')(sequelize);
const Contract = require('./contract')(sequelize);
const Installment = require('./installment')(sequelize);
const MessageTemplate = require('./messageTemplate')(sequelize);

// Definir relacionamentos
Client.hasMany(Contract, { foreignKey: 'client_id' });
Contract.belongsTo(Client, { foreignKey: 'client_id' });

Contract.hasMany(Installment, { foreignKey: 'contract_id' });
Installment.belongsTo(Contract, { foreignKey: 'contract_id' });

module.exports = {
  sequelize,
  Client,
  Contract,
  Installment,
  MessageTemplate,
};
