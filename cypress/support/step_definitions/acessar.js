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
  Dado("estou na tela de acessar", () => {
    commands.validarAcessar();
  });
 
  Dado("cadasto um novo usuario", () => {
    commands.cadastarNovoUsuario();
  });
  Dado("informo email e senha", () => {
    commands.informarEmailSenha();
  });

  Quando("preencho o formulário sem o {string} obrigatórios", (campo) => {
    if(campo == 'email'){
        commands.informarSomenteEmail();
    }
    if(campo == 'senha'){
        commands.informarSomenteSenha();
    }
  });

  Quando("clico em acessar conta", () => {
    commands.acessarContaCriada();
  });
  Então("vejo o a tela inicial de login", () => {
    commands.validaTelaInicial();
  });

  Então("vejo a mensagem {string}", (mensagem) => {
    commands.validaMensagemCamposObrigatorios(mensagem);
  });