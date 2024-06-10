export {}
describe('tests for burger constructor', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('drag and drop', () => {
        // @ts-ignore
        const dataTransfer = new DataTransfer();
        cy.get('.ingredients>ul>li').first().trigger('dragstart', {
            dataTransfer
        });

        cy.get('.constructor>ul>li>div').first().trigger('drop', {
            dataTransfer
        })
    })

    it('create order', () => {

    })
})