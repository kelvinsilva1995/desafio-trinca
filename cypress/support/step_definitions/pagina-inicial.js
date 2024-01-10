import {
    Given as Dado,
    When as Quando,
    Then as Então,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // const signUpPage = require("../../pages/sign-up-page");
  import commands from "../pagina-inicial/commands";
  Quando("o usuário visualiza a página", () => {
    commands.validarUrl();
  });
  Então("a página inicial deve ser exibida corretamente", () => {
    commands.validarPaginaInicial();
  });
  