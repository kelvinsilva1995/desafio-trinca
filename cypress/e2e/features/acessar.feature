# language: pt
@paginaInicial
Funcionalidade: Login
Como usuário
Eu quero acessar Churras trinca


Cenario: Login com conta cadastrada
    Dado que acesso a url
    E cadasto um novo usuario
    E clico em acessar
    E informo email e senha
    Quando clico em acessar conta
    Entao vejo o a tela inicial de login