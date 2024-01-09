import {
    Given as Dado,
    When as Quando,
    Then as Então,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // const signUpPage = require("../../pages/sign-up-page");
  import commands from "../home/commands";
  Quando("passo o mouse", () => {
    commands.verificarHover();
  });
  Então("o icone expande", () => {
    commands.verificarHover();
  });
  