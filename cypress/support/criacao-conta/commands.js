import { elements } from "./elements";
import { data } from "./data";
import MethodsCriacaoConta from "./methods";

class criacaoConta {
  clicarCadastrar() {
    cy.get(elements.buttonCadastrar).contains('Cadastrar').click();
    cy.contains('Cadastrar nova conta')
    cy.contains('E-mail')
    cy.contains('Senha')
  }
  informarEmailSenha() {
    cy.get(elements.email).type(MethodsCriacaoConta.gerarEmail().toString());

    cy.get(elements.senha).type(MethodsCriacaoConta.gerarSenha(10).toString());
  }
  informarEmailSenhaJaCadastado() {
    const email = MethodsCriacaoConta.gerarEmail().toString()
    cy.wrap(email).as('email');
    const senha = MethodsCriacaoConta.gerarSenha(10).toString()
    cy.wrap(senha).as('senha');
    cy.get(elements.buttonCriarConta).contains('Criar conta').click();

    
      cy.get('@email').then((email) => {
        cy.get(elements.email).type(email)
      })
      cy.get('@senha').then((senha) => {
        cy.get(elements.senha).type(senha)
      })
      cy.get(elements.buttonCriarConta).contains('Criar conta').click();
    //   cy.get(elements.senha).type(MethodsCriacaoConta.gerarSenha(10).toString());
  }

  informarEmailSenhaSemCamposObrigatorios(parametro) {
    if (parametro == 'Sem email') {
      cy.get(elements.email).type(MethodsCriacaoConta.gerarEmail().toString());
      cy.get(elements.buttonCriarConta).contains('Criar conta').click();
    }
    else if (parametro == 'Sem senha') {
      cy.get(elements.senha).type((MethodsCriacaoConta.gerarSenha(10).toString()));
      cy.get(elements.buttonCriarConta).contains('Criar conta').click();
    }
  }
  clicoCriarConta() {
    cy.get(elements.buttonCriarConta).contains('Criar conta').click();
    cy.wait(1)
  }
  validoMensagemCriacaoConta() {
    cy.contains('Cadastro realizado com sucesso. Faça seu login!')
  }
  validoMensagemCriacaoContaSemCamposobrigatorios() {
    cy.contains('Required field')
  }
  validoMensagemCriacaoContaJaCadastrado() {
    cy.contains('Falha ao realizar cadastro')
  }
}

export default new criacaoConta();
