import { elements } from "./elements";
// import { elementsCadastrar } from "../../support/criacao-conta/elements"
// import { data } from "./data";
// import MethodsCriacaoConta from "./methods";

class paginaInicial {
  validarUrl() {
    cy.url().should('eq', 'https://trinca-app-bbq.vercel.app/');
  }
  validarPaginaInicial(){
    cy.get(elements.logo).should('have.attr', 'alt')
    cy.contains('Cadastrar')
    cy.contains('Acessar')
    cy.contains('Churras Trinca')
    cy.contains('Made with ❤️ by Trinca')
  }
}

export default new paginaInicial();
