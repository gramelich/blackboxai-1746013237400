const express = require('express');
const router = express.Router();
const { Installment, Contract } = require('../models');
const { Op } = require('sequelize');

// Listar parcelas com filtros opcionais
router.get('/', async (req, res) => {
  try {
    const { status, contract_id, due_date } = req.query;
    const where = {};
    if (status) where.status = status;
    if (contract_id) where.contract_id = contract_id;
    if (due_date) where.due_date = due_date;

    const installments = await Installment.findAll({
      where,
      include: [{ model: Contract }],
    });
    res.json(installments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar nova parcela
router.post('/', async (req, res) => {
  try {
    const installment = await Installment.create(req.body);
    res.status(201).json(installment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter parcela por ID
router.get('/:id', async (req, res) => {
  try {
    const installment = await Installment.findByPk(req.params.id, {
      include: [{ model: Contract }],
    });
    if (!installment) return res.status(404).json({ error: 'Parcela não encontrada' });
    res.json(installment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar parcela
router.put('/:id', async (req, res) => {
  try {
    const installment = await Installment.findByPk(req.params.id);
    if (!installment) return res.status(404).json({ error: 'Parcela não encontrada' });
    await installment.update(req.body);
    res.json(installment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar parcela
router.delete('/:id', async (req, res) => {
  try {
    const installment = await Installment.findByPk(req.params.id);
    if (!installment) return res.status(404).json({ error: 'Parcela não encontrada' });
    await installment.destroy();
    res.json({ message: 'Parcela deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
