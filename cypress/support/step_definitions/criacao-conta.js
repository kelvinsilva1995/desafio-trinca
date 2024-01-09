import {
  Given as Dado,
  When as Quando,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

// const signUpPage = require("../../pages/sign-up-page");
import commands from "../criacao-conta/commands";
Dado("que acesso a url", () => {
  cy.visit("/");
  cy.contains('Churras Trinca')
});

Dado("clico em cadastrar", () => {
  commands.clicarCadastrar();
});
Dado("informo e-mail e senha", () => {
  commands.informarEmailSenha();
});
Dado("informo e-mail e senha ja cadastrado", () => {
  commands.informarEmailSenhaJaCadastado();
});
Quando("informo sem campos obrigatorios com os parametos {string}", (parametro) => {
  commands.informarEmailSenhaSemCamposObrigatorios(parametro);
});
Quando("clico em criar conta", () => {
  commands.clicoCriarConta();
});

Quando("vejo a mensagem de Cadastro realizado com sucesso", () => {
  commands.validoMensagemCriacaoConta();
});

Quando("vejo a mensagem de Cadastro sem campos obrigatorios", () => {
  commands.validoMensagemCriacaoContaSemCamposobrigatorios();
});

Quando("vejo a mensagem de usuario ou senha ja cadastrado", () => {
  commands.validoMensagemCriacaoContaJaCadastrado();
});



