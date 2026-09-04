const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get("/tarefas", tarefaController.listarTarefas);
router.get("/tarefas/:id", tarefaController.buscarPorId);
router.post("/tarefas", tarefaController.criarTarefa);
router.put("/tarefas/:id", tarefaController.atualizarTarefa);
router.delete("/tarefas/:id", tarefaController.deletarTarefa);

module.exports = router;