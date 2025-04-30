const express = require('express');
const router = express.Router();
const { MessageTemplate } = require('../models');

// Listar templates de mensagem
router.get('/', async (req, res) => {
  try {
    const templates = await MessageTemplate.findAll();
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar novo template
router.post('/', async (req, res) => {
  try {
    const template = await MessageTemplate.create(req.body);
    res.status(201).json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obter template por ID
router.get('/:id', async (req, res) => {
  try {
    const template = await MessageTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Template não encontrado' });
    res.json(template);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar template
router.put('/:id', async (req, res) => {
  try {
    const template = await MessageTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Template não encontrado' });
    await template.update(req.body);
    res.json(template);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Deletar template
router.delete('/:id', async (req, res) => {
  try {
    const template = await MessageTemplate.findByPk(req.params.id);
    if (!template) return res.status(404).json({ error: 'Template não encontrado' });
    await template.destroy();
    res.json({ message: 'Template deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
