            # language: pt
            @paginaInicial
            Funcionalidade: Login
            Como usuário
            Eu quero acessar Churras trinca


            Cenario: Login com conta cadastrada
            Deve ser possível logar na aplicação com uma conta cadastrada.
                Dado que acesso a url
                E cadasto um novo usuario
                E estou na tela de acessar
                E informo email e senha
                Quando clico em acessar conta
                Entao vejo o a tela inicial de login

            Esquema do Cenario: Validacao campos obrigatorios login
            Campo de login deve ser obrigatório e exibir esta informação para o usuário.

            Dado que acesso a url
            E clico em acessar
            Quando preencho o formulário sem o '<campo>' obrigatórios
            Entao vejo a mensagem '<mensagem>'

            Exemplos:
            | campo | mensagem          |
            | email | Campo obrigatório |
            | senha | Campo obrigatório |

