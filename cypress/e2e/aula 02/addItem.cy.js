/* Recebendo dados da pasta pageObjects */
import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Adicionar itens na minha lista ToDo', () => {
    beforeEach(()=> {
        cy.visit('/')

    })

    it('Adicionar um item na lista', () => {
        telaInicial.inputText("Dado 1");

    });

    it('Adicionar mais de um item a lista', () => {
        var todoItens = ['Maçã', 'Banana', 'Cenoura']
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

    });
});