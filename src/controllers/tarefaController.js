const dbTarefa = require("../../Mook/tarefas.js");

// Listar todas as tarefas
const listarTarefas = (req, res) => {
    if (dbTarefa.length > 0) {
        return res.status(200).json(dbTarefa);
    } else {
        return res.status(404).json({ mensagem: "Lista de tarefas está vazia" });
    }
};

// Buscar tarefa por ID
const buscarPorId = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O campo id precisa ser numérico" });
    }

    const tarefa = dbTarefa.find(t => t.id === id);

    if (tarefa) {
        return res.status(200).json({ idBusca: id, tarefa });
    } else {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
};

// Criar nova tarefa
const criarTarefa = (req, res) => {
    const { titulo, descricao, responsavel } = req.body;

    if (!titulo || !descricao) {
        return res.status(400).json({ 
            mensagem: "Os campos 'titulo' e 'descricao' são obrigatórios." 
        });
    }

    const dataAtual = new Date().toISOString().split('T')[0];
    const novoId = dbTarefa.length > 0 ? dbTarefa[dbTarefa.length - 1].id + 1 : 1;

    const novaTarefa = {
        id: novoId,
        titulo,
        descricao,
        status: 'EM_ANDAMENTO',
        responsavel: {
            id: responsavel?.id || (novoId + 10),
            nome: responsavel?.nome || 'Não atribuído',
            data_criacao: dataAtual,
            data_atualizacao: dataAtual
        },
        data_criacao: dataAtual,
        data_atualizacao: dataAtual
    };

    dbTarefa.push(novaTarefa);

    return res.status(201).json({
        mensagem: "Tarefa criada com sucesso!",
        tarefa: novaTarefa
    });
};

// Atualizar tarefa
const atualizarTarefa = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O campo id precisa ser numérico" });
    }

    const index = dbTarefa.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    const { titulo, descricao, status, responsavel } = req.body;
    const dataAtual = new Date().toISOString().split('T')[0];

    dbTarefa[index] = {
        ...dbTarefa[index],
        titulo: titulo || dbTarefa[index].titulo,
        descricao: descricao || dbTarefa[index].descricao,
        status: status || dbTarefa[index].status,
        responsavel: responsavel ? {
            ...dbTarefa[index].responsavel,
            ...responsavel,
            data_atualizacao: dataAtual
        } : dbTarefa[index].responsavel,
        data_atualizacao: dataAtual
    };

    return res.status(200).json({
        idBusca: id, 
        mensagem: "Tarefa atualizada com sucesso!",
        tarefa: dbTarefa[index]
    });
};

// Deletar tarefa
const deletarTarefa = (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O campo id precisa ser numérico" });
    }

    const index = dbTarefa.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    const tarefaRemovida = dbTarefa.splice(index, 1);

    return res.status(200).json({
        mensagem: "Tarefa removida com sucesso!",
        tarefa: tarefaRemovida[0]
    });
};

module.exports = {
    listarTarefas,
    buscarPorId,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
};