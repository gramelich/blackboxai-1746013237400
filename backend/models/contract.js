const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  const Contract = sequelize.define('Contract', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(),
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    client_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    principal_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    final_amount: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    installments: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payment_frequency: {
      type: DataTypes.ENUM('daily', 'weekly', 'biweekly', 'monthly'),
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    first_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    last_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    interest_rate: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('active', 'paid', 'cancelled', 'renegotiated'),
      allowNull: false,
      defaultValue: 'active',
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  }, {
    tableName: 'Contratos',
    timestamps: true,
    underscored: true,
  });

  return Contract;
};
