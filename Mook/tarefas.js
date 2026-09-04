const tarefas = [
    {
        'id': 1,
        'titulo': 'Implementando Base de dados',
        'descricao': 'Implementando Base de dados para o gerenciamento de tarefas',
        'status': 'EM_ANDAMENTO',
        'responsavel': {
            'id': 1,
            'nome': 'José da Silva',
            'data_criacao': '2026-08-14',
            'data_atualizacao': '2026-08-14'
        },
        'data_criacao': '2026-08-14',
        'data_atualizacao': '2026-08-14',
    },
    {
        'id': 2,
        'titulo': 'Implementando MVC',
        'descricao': 'Implementando MVC para o gerenciamento de tarefas',
        'status': 'CONCLUÍDO',
        'responsavel': {
            'id': 2,
            'nome': 'Fernando de Souza',
            'data_criacao': '2026-08-14',
            'data_atualizacao': '2026-08-14',
        },
        'data_criacao': '2026-08-14',
        'data_atualizacao': '2026-08-14',
    },
    {
        'id': 3,
        'titulo': 'Criação de Telas de Login',
        'descricao': 'Desenvolvimento da interface de autenticação de usuários',
        'status': 'PENDENTE',
        'responsavel': {
            'id': 3,
            'nome': 'Mariana Lima',
            'data_criacao': '2026-08-15',
            'data_atualizacao': '2026-08-15'
        },
        'data_criacao': '2026-08-15',
        'data_atualizacao': '2026-08-15',
    },
    {
        'id': 4,
        'titulo': 'Configuração de Rotas da API',
        'descricao': 'Mapeamento das rotas RESTful para o backend',
        'status': 'CONCLUÍDO',
        'responsavel': {
            'id': 1,
            'nome': 'José da Silva',
            'data_criacao': '2026-08-16',
            'data_atualizacao': '2026-08-18'
        },
        'data_criacao': '2026-08-16',
        'data_atualizacao': '2026-08-18',
    },
    {
        'id': 5,
        'titulo': 'Testes Unitários',
        'descricao': 'Implementação de testes para os controllers de usuários',
        'status': 'EM_ANDAMENTO',
        'responsavel': {
            'id': 4,
            'nome': 'Carlos Eduardo',
            'data_criacao': '2026-08-19',
            'data_atualizacao': '2026-08-20'
        },
        'data_criacao': '2026-08-19',
        'data_atualizacao': '2026-08-20',
    },
    {
        'id': 6,
        'titulo': 'Documentação do Swagger',
        'descricao': 'Documentar os endpoints da API utilizando Swagger/OpenAPI',
        'status': 'PENDENTE',
        'responsavel': {
            'id': 2,
            'nome': 'Fernando de Souza',
            'data_criacao': '2026-08-21',
            'data_atualizacao': '2026-08-21'
        },
        'data_criacao': '2026-08-21',
        'data_atualizacao': '2026-08-21',
    },
    {
        'id': 7,
        'titulo': 'Ajustes de Responsividade',
        'descricao': 'Corrigir bugs de layout em dispositivos móveis',
        'status': 'EM_ANDAMENTO',
        'responsavel': {
            'id': 3,
            'nome': 'Mariana Lima',
            'data_criacao': '2026-08-22',
            'data_atualizacao': '2026-08-23'
        },
        'data_criacao': '2026-08-22',
        'data_atualizacao': '2026-08-23',
    },
    {
        'id': 8,
        'titulo': 'Configuração de Deploy',
        'descricao': 'Preparar o pipeline de CI/CD para o ambiente de produção',
        'status': 'PENDENTE',
        'responsavel': {
            'id': 4,
            'nome': 'Carlos Eduardo',
            'data_criacao': '2026-08-24',
            'data_atualizacao': '2026-08-24'
        },
        'data_criacao': '2026-08-24',
        'data_atualizacao': '2026-08-24',
    },
    {
        'id': 9,
        'titulo': 'Segurança e Autenticação JWT',
        'descricao': 'Implementar geração e validação de tokens JWT nas requisições',
        'status': 'CONCLUÍDO',
        'responsavel': {
            'id': 1,
            'nome': 'José da Silva',
            'data_criacao': '2026-08-25',
            'data_atualizacao': '2026-08-27'
        },
        'data_criacao': '2026-08-25',
        'data_atualizacao': '2026-08-27',
    },
    {
        'id': 10,
        'titulo': 'Revisão de Código Geral',
        'descricao': 'Realizar code review em todas as branches antes do lançamento',
        'status': 'PENDENTE',
        'responsavel': {
            'id': 2,
            'nome': 'Fernando de Souza',
            'data_criacao': '2026-08-28',
            'data_atualizacao': '2026-08-28'
        },
        'data_criacao': '2026-08-28',
        'data_atualizacao': '2026-08-28',
    }
];

module.exports = tarefas;