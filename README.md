# DESAFIO

## Tecnologias Utilizadas
1. Cypress: Framework de teste end-to-end para aplicações web.
2. JavaScript: Linguagem de programação utilizada no desenvolvimento dos testes.
3. Cucumber:
Colaboração entre equipes: Facilita a comunicação entre desenvolvedores, testadores e stakeholders, pois os cenários de teste são escritos em linguagem natural compreensível por todos os envolvidos.
Reutilização de código: Os cenários escritos no formato Gherkin podem ser reutilizados para automação de testes, economizando tempo e esforço.
4. BDD (Behavior-Driven Development):
Foco no comportamento do sistema: Concentra-se no comportamento do sistema a partir da perspectiva do usuário final, promovendo uma compreensão mais clara dos requisitos e funcionalidades esperadas.
Testes automatizados: BDD encoraja a automação de testes de aceitação, melhorando a eficiência e a consistência dos testes ao longo do ciclo de vida do desenvolvimento.
5. Gherkin:
Linguagem de fácil compreensão: É uma linguagem descritiva fácil de entender, projetada para ser legível por humanos. Isso facilita a colaboração entre membros da equipe com diferentes habilidades técnicas.
Abstração de detalhes técnicos: Abstrai os detalhes técnicos da implementação, permitindo que os cenários sejam escritos antes do desenvolvimento real começar. Isso promove a definição clara de requisitos e comportamentos antes da codificação.
6. Allure Report: Framework de geração de relatórios para testes, proporcionando uma visualização mais amigável dos resultados.

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
5. O relatório de testes pode ser acessado em [https://kelvinsilva1995.github.io/desafio-trinca/20/](https://kelvinsilva1995.github.io/desafio-trinca/20/) (configurado na pipeline para rodar diariamente às 10 horas da manhã de segunda a sexta ou apos um push na branch main). Também é possível executar os testes indo no [GitHub Actions](https://github.com/kelvinsilva1995/desafio-trinca/actions/workflows/pipeline-v12.yml), clicando em "Run Workflow" Local (será necessário instalar o Allure Report). Pode ser utilizado o [scoop](https://scoop.sh/) (para Windows) para instalar Allure de forma automática, ou [instalar manualmente](https://docs.qameta.io/allure/) e, após a instalação, executar `allure serve .\allure-results\` no terminal.

## Arquitetura do Projeto

├── cypress  => 
│   ├──  allure-results  => Pasta com arquivos do allure 

├── cypress  => 
│   ├──  e2e   => 
│   │   ├── features => Pasta com arquivos .feature

├── cypress  => 
│   ├──  support   => 
│   │   ├── step_definitions => Pasta com steps do gherkin
│   │   │   ├── cadastro_geral => Pasta semelhante ao sistema colmeia
│   │   │   │   ├── fornecedor  => Pasta semelhante ao sistema colmeia
│   │   │   │   │   └── manter.feature => Arquivo do caso de teste

├── cypress  => 
│   ├──  support   => 
│   │   ├── pasta-nome-feature exemplo:acessar => 
│   │   │      └── commans.js => arquivo com ações dos testes
│   │   │      └── data.js => arquivo com dados dos testes
│   │   │      └── elements.js => arquivo com elementos dos testes

