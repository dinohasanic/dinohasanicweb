const LOCALHOST_URL = 'http://localhost:8000/';
const NOT_FOUND_PAGE_TITLE = '404: Not found | Dino Hasanic | Full-Stack Developer';

describe('Not Found Route', () => {
  it('displays Not Found page on unknown route (404)', () => {
    cy.visit('/some-unknown-route-here');
    // We need to click on the button in the default to preview our 404 page WHEN in dev env
    cy.get('button').click();
    cy.title().should('eq', NOT_FOUND_PAGE_TITLE);
  });
  it('goes back to home page after clicking on the "go back" link', () => {
    cy.get('.main-link').click();
    cy.url().should('eq', LOCALHOST_URL);
  });
});
