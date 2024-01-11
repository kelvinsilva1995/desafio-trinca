# DESAFIO

## Sugestões de Melhoria
1. Remover os dois logos da tela inicial.
2. Hospedar o site em outro local, constantemente está dando erro 500: Internal Server Error.
3. Adicionar novas páginas para confirmar as pessoas que vão participar.

## Bugs Encontrados
1. Tela de login: quando não informa a senha, não aparece nenhuma mensagem no campo dizendo informar o campo obrigatório.
2. Tela de cadastro: nos testes de campos obrigatórios ocorre o mesmo problema, mas para o e-mail. A mensagem usada é "Required field", poderia ser alterado para "campo obrigatório não informado".
3. Tela de eventos: quando cadastro um evento, aparece a mensagem errada dizendo que o login foi efetuado com sucesso. O correto seria "evento criado com sucesso".
4. Tela de eventos: no formulário, o campo data está com o label de "custo".

## Passo a Passo para Executar o Projeto
1. Clonar o projeto do GitHub: `https://github.com/kelvinsilva1995/desafio-trinca.git`
2. Abrir o projeto no Visual Studio Code.
3. Executar o `npm install` para instalar as dependências.
4. Executar os testes: `npx cypress run` ou diretamente nos scripts npm.
5. O relatório de testes pode ser acessado em [https://kelvinsilva1995.github.io/desafio-trinca/20/](https://kelvinsilva1995.github.io/desafio-trinca/20/) (configurado na pipeline para rodar diariamente às 10 horas da manhã de segunda a sexta). Também é possível executar os testes indo no [GitHub Actions](https://github.com/kelvinsilva1995/desafio-trinca/actions/workflows/pipeline-v12.yml), clicando em "Run Workflow" Local (será necessário instalar o Allure Report). Pode ser utilizado o [scoop](https://scoop.sh/) (para Windows) para instalar Allure de forma automática, ou [instalar manualmente](https://docs.qameta.io/allure/) e, após a instalação, executar `allure serve .\allure-results\` no terminal.