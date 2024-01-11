import {
    Given as Dado,
    When as Quando,
    Then as Então,
  } from "@badeball/cypress-cucumber-preprocessor";
  
  // const signUpPage = require("../../pages/sign-up-page");
  import commands from "../eventos/commands";

  Dado("que clique em eventos", () => {
    commands.clicarEventos()
  });
  Dado("clique em Cadastrar novo evento", () => {
   commands.clicarCadastarEventos();
  });

  Dado("prencho o formulario de eventos", () => {
    commands.preencherFormularioEventos();
   });
   Dado("prencho o formulario de eventos com os campos obrigatórios", () => {
    commands.preencherFormularioEventosCamposObrigatorios();
   });
   Dado("prencho o formulario de eventos sem os {string} obrigatórios", (campos) => {
    commands.preencherFormularioEventosSemCamposObrigatorios(campos);
   });
   Então("vejo a {string} de evento nao cadastrado sem campos obrigatorios", (mensagem) => {
    commands.validarMensagemCampoObrigatorio(mensagem);
   });
   Quando("clico em salvar evento", () => {
    commands.clicarSalvarEvento();
   });
   Então("vejo a mensagem de evento cadastrado com sucesso", () => {
    commands.validarSalvarEvento();
   });
   Então("valido o card do evento criado", () => {
    commands.validarCardEvento();
   });
   Quando("clico em editar o evento", () => {
    commands.EditarCardEvento();
   });
   Então("valido o card do evento editado", () => {
    commands.validarCardEvento();
   });