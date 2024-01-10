import {
    Given as Dado,
    When as Quando,
    Then as Então,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // const signUpPage = require("../../pages/sign-up-page");
  import commands from "../acessar/commands";
  Dado("clico em acessar", () => {
    commands.clicarAcessar();
  });
  Dado("cadasto um novo usuario", () => {
    commands.cadastarNovoUsuario();
  });
  Dado("informo email e senha", () => {
    commands.informarEmailSenha();
  });

  Quando("clico em acessar conta", () => {
    commands.acessarContaCriada();
  });
  Então("vejo o a tela inicial de login", () => {
    commands.validaTelaInicial();
  });
  