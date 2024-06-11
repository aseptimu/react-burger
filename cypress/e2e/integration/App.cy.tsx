export {}
describe('tests for burger constructor', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('drag & drop and create order', () => {
        // @ts-ignore
        const dataTransfer = new DataTransfer();
        cy.get('.ingredients>ul>li', {timeout: 10000}).first().trigger('dragstart', {
            dataTransfer
        });

        cy.get('.constructor>ul>li>div').first().trigger('drop', {
            dataTransfer
        })

        cy.get('button').contains('Оформить заказ').click();

        cy.get('body').then(body => {
            if (body.find('form').length > 0) {
                cy.get('input[name="email"]').type('lold@mail.ru');
                cy.get('input[name="password"]').type('lol');
                cy.get('button[type="submit"]').click();
                cy.get('button').contains('Оформить заказ').click();
            }
        })
    })

    it('see ingredient details', () => {
        cy.get('.ingredients>ul>li').first().click();
    })
})