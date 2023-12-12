/* Recebendo dados da pasta pageObjects */
import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Concluir itens na minha lista ToDo', () => {
    beforeEach(()=> {
        cy.visit('/')

        var todoItens = ['Maçã', 'Banana', 'Cenoura']
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item);
        })
    });

    it('Concluir um item da lista', () => {
        telaInicial.concluirItem();

    });

});