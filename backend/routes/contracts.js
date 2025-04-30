const express = require('express');
const router = express.Router();
const { Contract, Client } = require('../models');
const { Op } = require('sequelize');

// Listar contratos com filtros opcionais
router.get('/', async (req, res) => {
  try {
    const { status, client_id, codigo } = req.query;
    const where = {};
    if (status) where.status = status;
    if (client_id) where.client_id = client_id;
    if (codigo) where.codigo = { [Op.like]: `%${codigo}%` };

    const contracts = await Contract.findAll({
      where,
      include: [{ model: Client }],
    });
    res.json(contracts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar novo contrato
router.post('/', async (req, res) => {
  try {
    const contract = await Contract.create(req.body);
    res.status(201).json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter contrato por ID
router.get('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByPk(req.params.id, {
      include: [{ model: Client }],
    });
    if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });
    res.json(contract);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar contrato
router.put('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByPk(req.params.id);
    if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });
    await contract.update(req.body);
    res.json(contract);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar contrato
router.delete('/:id', async (req, res) => {
  try {
    const contract = await Contract.findByPk(req.params.id);
    if (!contract) return res.status(404).json({ error: 'Contrato não encontrado' });
    await contract.destroy();
    res.json({ message: 'Contrato deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
