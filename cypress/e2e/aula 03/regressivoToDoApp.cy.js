import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Regressivo ToDo App', () => {

    context('Validar tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Validar a area label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?");
            
        });

    })

    context('Validar a adição de itens', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Adicionar mais de um item a lista', () => {
            var todoItens = ['Maçã', 'Banana', 'Cenoura']
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)

            })
        /* Validar que o contador é igual a 3 itens adicionados */
            telaInicial.validarContador(3)
    
        });

    })

    context('Validar a conclusão de itens', () => {
        beforeEach(()=> {
            cy.visit('/')
    
            var todoItens = ['Maçã', 'Banana', 'Cenoura']
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item);
            })
        });

        it('Concluir um item da lista', () => {
            telaInicial.concluirItem();
            telaInicial.validarContador(2)
    
        });

    })

    context('Validar o filtro da aplicação', () => {
        beforeEach(()=> {
            cy.visit('/')
    
            var todoItens = ['Maçã', 'Banana', 'Cenoura']
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)

            })

            telaInicial.concluirItem()

        });

        it('Validar lista de itens ativos', () => {
            telaInicial.filtrarItens('Active')
            telaInicial.validarSizeToDo(2)

        });

        it('Validar lista de itens concluidos', () => {
            telaInicial.filtrarItens('Completed')
            telaInicial.validarSizeToDo(1)

        });


    })

    context('Validar a remoção de itens', () => {
        beforeEach(()=> {
            cy.visit('/')
    
            var todoItens = ['Maçã', 'Banana', 'Cenoura']
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
    
        });
    
        it('Excluir item', () => {
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2)

        });

    })

})