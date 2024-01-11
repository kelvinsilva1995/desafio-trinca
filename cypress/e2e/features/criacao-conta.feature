# language: pt
@criacaoConta
Funcionalidade: Criacao de Conta
Como usuário
Eu quero criar uma conta para acessar o sistema

    Cenario: Criacao de conta com sucesso
    Deverá ser possível cadastrar uma nova conta com sucesso.

        Dado que acesso a url
        E clico em cadastrar
        E informo e-mail e senha
        Quando clico em criar conta
        Entao vejo a mensagem de Cadastro realizado com sucesso

    Esquema do Cenario: Criacao de conta campos invalidos
    Campo de cadastro deve ser obrigatório e exibir esta informação para o usuário

        Dado que acesso a url
        E clico em cadastrar
        Quando informo sem campos obrigatorios com os parametos '<Parametro>'
        Entao vejo a mensagem de Cadastro sem campos obrigatorios

        Exemplos:
        | Parametro |
        | Sem email |
        | Sem senha |

    Cenario: Criacao de conta ja existente
    Não deve permitir cadastrar uma conta já existente.

        Dado que acesso a url
        E clico em cadastrar
        E informo e-mail e senha ja cadastrado
        Quando clico em criar conta
        Entao vejo a mensagem de usuario ou senha ja cadastrado