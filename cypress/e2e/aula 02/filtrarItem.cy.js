/* Recebendo dados da pasta pageObjects */
import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Validar os filtros da aplicação após a adição de itens', () => {
    beforeEach(()=> {
        cy.visit('/')

        var todoItens = ['Maçã', 'Banana', 'Cenoura']
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    });

    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItens('Active')

    });

    it('Filtrar itens concluidos', () => {
        telaInicial.filtrarItens('Completed')

    });

});