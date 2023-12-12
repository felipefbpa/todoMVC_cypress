/* Recebendo dados da pasta pageObjects */
import telaInicial from '../../support/pageObjects/telaInicial.pageObjects'

describe('Acessar a pagina do todoMVC', () => {
  it('Acessar o site', () => {
    /* Abrindo site */
    cy.visit('https://todomvc.com/examples/vanillajs/#/');
    telaInicial.inputText();

  });
});