# language: pt
@eventos
Funcionalidade: Eventos
Como usuário
Eu quero acessar Churras trinca
    Contexto: Login com conta cadastrada
    Dado que acesso a url

    Cenario: Cadastrar Eventos
    aplicação deve permitir cadastrar um novo Evento.

        Dado cadasto um novo usuario
        E estou na tela de acessar
        E informo email e senha
        E clico em acessar conta
        E vejo o a tela inicial de login
        E que clique em eventos
        E clique em Cadastrar novo evento
        E prencho o formulario de eventos
        Quando clico em salvar evento
        Entao vejo a mensagem de evento cadastrado com sucesso

    Cenario: Cadastrar Eventos somento com campos obrigatórios
    Todos os campos do formulário de cadastro de eventos devem ser obrigatórios, com exeção do campo "Observações".

        Dado cadasto um novo usuario
        E estou na tela de acessar
        E informo email e senha
        E clico em acessar conta
        E vejo o a tela inicial de login
        E que clique em eventos
        E clique em Cadastrar novo evento
        E prencho o formulario de eventos com os campos obrigatórios
        Quando clico em salvar evento
        Entao vejo a mensagem de evento cadastrado com sucesso

    Cenario: Validação Cadastrar Eventos sem campos obrigatórios
    Todos os campos do formulário de cadastro de eventos devem ser obrigatórios, com exeção do campo "Observações".
    
        Dado cadasto um novo usuario
        E estou na tela de acessar
        E informo email e senha
        E clico em acessar conta
        E vejo o a tela inicial de login
        E que clique em eventos
        Quando prencho o formulario de eventos sem os "<campo>" obrigatórios
        Entao vejo a "<mensagem>" de evento nao cadastrado sem campos obrigatorios
        Exemplos:
        | campo | mensagem          |
        | Título | Campo obrigatório |
        | Data | Campo obrigatório|
        | Custo | Campo obrigatório |

    Cenario: Validar Card Eventos
    Todos os campos do formulário de cadastro de eventos devem ser obrigatórios, com exeção do campo "Observações".

        Dado cadasto um novo usuario
        E estou na tela de acessar
        E informo email e senha
        E clico em acessar conta
        E vejo o a tela inicial de login
        E que clique em eventos
        E clique em Cadastrar novo evento
        E prencho o formulario de eventos
        Quando clico em salvar evento
        E que clique em eventos
        Entao valido o card do evento criado

    Cenario: Editar Card Eventos
    Todos os campos do formulário de cadastro de eventos devem ser obrigatórios, com exeção do campo "Observações".

        Dado cadasto um novo usuario
        E estou na tela de acessar
        E informo email e senha
        E clico em acessar conta
        E vejo o a tela inicial de login
        E que clique em eventos
        E clique em Cadastrar novo evento
        E prencho o formulario de eventos
        Quando clico em salvar evento
        E que clique em eventos
        E clico em editar o evento
        Entao valido o card do evento editado