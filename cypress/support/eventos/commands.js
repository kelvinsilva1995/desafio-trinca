import { elements } from "./elements";
// import { data } from "./data";
class eventos {
    clicarEventos() {
        cy.get(elements.buttonEventos).click();
    }
    clicarCadastarEventos() {
        cy.get(elements.buttonCadastrarNovoEvento).click();
    }
    preencherFormularioEventos() {
        cy.get(elements.buttonCadastrarNovoEvento).click();
        let titulo = 'Churras Find'
        cy.wrap(titulo).as('titulo');
        cy.get(elements.Titulo).type(titulo);
        const maxCost = 1000;
        const randomCost = (Math.random() * maxCost).toFixed(0) + '.00';
        const formattedCost = parseFloat(randomCost).toFixed(2).toString().trim();
        cy.wrap(formattedCost).as('formattedCost');
        cy.get(elements.custo).type(formattedCost);
        cy.get(elements.custo).clear().type(formattedCost);
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        cy.wrap(formattedDate).as('formattedDate');
        cy.get(elements.data).type(formattedDate);
        let observacoes = 'Churras top com costela e picanha e alcatra, 10 reais cada pessoa'
        cy.get(elements.Observacoes).type(observacoes);
        cy.wrap(observacoes).as('observacoes');
    }
    preencherFormularioEventosCamposObrigatorios() {
        cy.get(elements.buttonCadastrarNovoEvento).click();
        cy.get(elements.Titulo).type(`Churras Find`);
        const maxCost = 1000;
        const randomCost = (Math.random() * maxCost).toFixed(0) + '.00';
        const formattedCost = parseFloat(randomCost).toFixed(2).toString().trim();
        cy.get(elements.custo).type(formattedCost);
        cy.get(elements.custo).clear().type(formattedCost);
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        cy.get(elements.data).type(formattedDate);
    }
    preencherFormularioEventosSemCamposObrigatorios(campos) {
        if(campos == 'Título'){
            cy.get(elements.buttonCadastrarNovoEvento).click();
            const maxCost = 1000;
            const randomCost = (Math.random() * maxCost).toFixed(0) + '.00';
            const formattedCost = parseFloat(randomCost).toFixed(2).toString().trim();
            cy.get(elements.custo).type(formattedCost);
            cy.get(elements.custo).clear().type(formattedCost);
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            cy.get(elements.data).type(formattedDate);
            cy.get(elements.buttonSalvarEvento).click();
        }
        if(campos == 'Data'){
            cy.get(elements.buttonCadastrarNovoEvento).click();
            cy.get(elements.Titulo).type(`Churras Find`);
            const maxCost = 1000;
            const randomCost = (Math.random() * maxCost).toFixed(0) + '.00';
            const formattedCost = parseFloat(randomCost).toFixed(2).toString().trim();
            cy.get(elements.custo).type(formattedCost);
            cy.get(elements.custo).clear().type(formattedCost);
            cy.get(elements.buttonSalvarEvento).click();
        }
        if(campos == 'Custo'){
            cy.get(elements.buttonCadastrarNovoEvento).click();
            cy.get(elements.Titulo).type(`Churras Find`);
            cy.get(elements.custo).clear()
            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
            cy.get(elements.data).type(formattedDate);
        }
    }
    clicarSalvarEvento() {
        cy.get(elements.buttonSalvarEvento).contains('Salvar evento').click();
    }
    validarSalvarEvento() {
        cy.contains('Evento Cadastrado com sucesso')
    }
    validarMensagemCampoObrigatorio(mensagem) {
        cy.contains(mensagem)
    }


    validarCardEvento() {
        cy.wait(1000);
        cy.visit('/eventos')
        cy.get('@titulo').then((titulo) => {
            cy.get('@formattedCost').then((formattedCost) => {
                cy.get('@formattedDate').then((formattedDate) => {
                    cy.get('@observacoes').then((observacoes) => {
                        cy.contains('Editar').should('have.length', 1);
                        cy.contains(titulo)
                        let custoCard = formattedCost.replace('.00', '');
                        cy.contains(`R$ ${custoCard}`)
                        // let dataCard = 
                        // cy.contains(formattedDate)
                        cy.contains(observacoes)
                    })
                })
            })
        })
    }
    EditarCardEvento() {
        cy.wait(1000);
        cy.visit('/eventos')
        cy.get(elements.buttonEditar).contains('Editar').click();
        let titulo = 'Churras Find'
        cy.wrap(titulo).as('titulo');
        cy.get(elements.Titulo).clear().type(titulo);
        const maxCost = 1000;
        const randomCost = (Math.random() * maxCost).toFixed(0) + '.00';
        const formattedCost = parseFloat(randomCost).toFixed(2).toString().trim();
        cy.wrap(formattedCost).as('formattedCost');
        cy.get(elements.custo).type(formattedCost);
        cy.get(elements.custo).clear().type(formattedCost);
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
        cy.wrap(formattedDate).as('formattedDate');
        cy.get(elements.data).type(formattedDate);
        let observacoes = 'Churras top com costela e picanha e alcatra, 15 reais cada pessoa'
        cy.get(elements.Observacoes).clear().type(observacoes);
        cy.wrap(observacoes).as('observacoes');
        cy.get(elements.buttonSalvarEvento).click();
    }
}

export default new eventos;