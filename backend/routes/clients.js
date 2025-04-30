const express = require('express');
const router = express.Router();
const { Client } = require('../models');

// Listar todos os clientes com filtros opcionais
router.get('/', async (req, res) => {
  try {
    const { status, nome, telefone, regiao } = req.query;
    const where = {};
    if (status) where.status = status;
    if (nome) where.nome = { [require('sequelize').Op.like]: `%${nome}%` };
    if (telefone) where.telefone = { [require('sequelize').Op.like]: `%${telefone}%` };
    if (regiao) where.regiao = regiao;

    const clients = await Client.findAll({ where });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar novo cliente
router.post('/', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar cliente
router.put('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
    await client.update(req.body);
    res.json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar cliente
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findByPk(req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente não encontrado' });
    await client.destroy();
    res.json({ message: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
