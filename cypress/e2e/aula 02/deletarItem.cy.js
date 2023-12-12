/* Recebendo dados da pasta pageObjects */
import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Deletar itens da lista', () => {
    beforeEach(()=> {
        cy.visit('/')

        var todoItens = ['Maçã', 'Banana', 'Cenoura']
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

    });

    it('Excluir item', () => {
        telaInicial.deletarItem()

    });

});