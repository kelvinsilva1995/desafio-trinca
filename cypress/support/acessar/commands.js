import { elements } from "./elements";
// import { elementsCadastrar } from "../../support/criacao-conta/elements"
// import { data } from "./data";
import MethodsCriacaoConta from "../criacao-conta/methods";

class acessar {
    validarAcessar() {
        cy.wait(2)
        cy.contains('Acessar conta')
    }
    clicarAcessar() {
        cy.wait(2)
        cy.get(elements.buttonAcessar).contains('Acessar').click()
        cy.contains('Acessar conta')
    }
    cadastarNovoUsuario() {
        cy.get(elements.buttonCadastrar).contains('Cadastrar').click();
        cy.contains('Cadastrar nova conta')
        const email = MethodsCriacaoConta.gerarEmail().toString()
        cy.wrap(email).as('email');
        const senha = MethodsCriacaoConta.gerarSenha(10).toString()
        cy.wrap(senha).as('senha');
        cy.get('@email').then((email) => {
            cy.get(elements.email).type(email)
        })
        cy.get('@senha').then((senha) => {
            cy.get(elements.senha).type(senha)
        })
        cy.get(elements.buttonCriarConta).contains('Criar conta').click();
        cy.contains('Cadastro realizado com sucesso. Faça seu login!')



        //   cy.get(elements.senha).type(MethodsCriacaoConta.gerarSenha(10).toString());
    }
    informarEmailSenha() {
        cy.get('@email').then((email) => {
            cy.get(elements.email).type(email)
        })
        cy.get('@senha').then((senha) => {
            cy.get(elements.senha).type(senha)
        })
    }
    informarSomenteEmail() {
        cy.get(elements.email).type('teste@gmail.com')
        cy.get(elements.buttonCriarConta).contains('Acessar conta').click();
    }
    informarSomenteSenha() {
        cy.get(elements.senha).type('testeChuras')
        cy.get(elements.buttonCriarConta).contains('Acessar conta').click();
    }
    acessarContaCriada() {
        cy.get(elements.buttonCriarConta).contains('Acessar conta').click();
    }
    validaTelaInicial() {
        cy.get(elements.eventos).invoke('text').should('eq', 'Eventos')
        cy.get('@email').then((email) => {
            cy.get(elements.emailTelaLogin).invoke('text').should('eq', `Sair de ${email}`);
        });
        // cy.get(elements.buttonCriarConta).contains('Acessar conta').click();
    }
    validaMensagemCamposObrigatorios(mensagem) {
        if(mensagem == 'Campo obrigatório')
       cy.contains('Campo obrigatório')
    }
}

export default new acessar();
