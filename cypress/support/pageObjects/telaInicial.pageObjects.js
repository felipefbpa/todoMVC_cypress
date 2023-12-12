/* Pegando os dados da pasta elements */
const elem = require('../elements/telaInicial.elements').ELEMENTS;
const concluirItem = require('../elements/telaInicial.elements').ITENS;
const filtroItens = require('../elements/telaInicial.elements').FILTROS;

/* Informando o que ele deve fazer com o elemento encontrado em Elements */
class telaInicial{
    inputText(dado){
        cy.get(elem.inputToDo)
        .type(dado)
        .type('{enter}')
    }

/* Devido a ter mais de um item com o mesmo seletor usamos o first para selecionar o primeiro */
    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last()
        .click()
    }

/* Filtrar itens OBS: Opção do menu serve para escrevermos no teste o nome da opção em texto */
    filtrarItens(opcaoDoMenu){
        cy.get(filtroItens.filtroToDo)
        .contains(opcaoDoMenu)
        .and('be.visible')
        .click()

    }

/* Deletando itens */
    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show')
        .click()
    }

/* VALIDAÇÕES */
    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }

    validarContador(numero){
        cy.get(filtroItens.contador)
        .find('strong')
        .should('have.text', numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        /* have.length está pegando o tamanho da lista chamada em elementos */
        .should('have.length', numero)
    }
}

export default new telaInicial();