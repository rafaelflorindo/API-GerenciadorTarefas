const express = require("express");
const cors = require('cors');

const app = express(); 
app.use(express.json())
app.use(cors());

const dbTarefa = require("./Mook/tarefas.js"); 

app.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "Página inicial"
    })
}); 

/** -----------LIST------------- */
app.get("/tarefas", (req, res) => {
    if (dbTarefa.length > 0) {
        res.status(200).json(dbTarefa);
    } else {
        res.status(404).json({ mensagem: "Lista de tarefas está vazia" });
    } 
}); 

/** -----------LIST BY ID------------- */
app.get("/tarefas/:id", (req, res)=>{

    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "O campo id precisa ser numérico" });
    }

    const tarefa = dbTarefa.find(t => t.id === id);

    if (tarefa) {
        res.status(200).json(tarefa);
    } else {
        res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
})

/** -----------CREATE------------- */
app.post("/tarefas", (req, res) => {
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
});

/** -----------UPDATE------------- */
app.put("/tarefas/:id", (req, res) => {
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
        mensagem: "Tarefa atualizada com sucesso!",
        tarefa: dbTarefa[index]
    });
});

/** -----------DELETE------------- */
app.delete("/tarefas/:id", (req, res) => {
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
});

app.listen(3000, function() {
    console.log("Servidor rodando em http://localhost:3000");
});