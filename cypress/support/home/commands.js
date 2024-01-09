import { elements } from "./elements";
// import { data } from "./data";
// import MethodsCriacaoConta from "./methods";

class home {
  verificarHover() {
    cy.get(elements.logo).trigger('mouseover');
    cy.wait(1000)
    cy.get(elements.logo).should('not.have.class', 'hover:scale-125');
    cy.get(elements.logo).should('not.have.class', 'duration-500');
    cy.get(elements.logo).trigger('mouseover');
  }
  validaHover(){
    cy.get(elements.logo).should('have.class', 'hover:scale-125');
    cy.get(elements.logo).should('have.class', 'duration-500');
  }
}

export default new home();
