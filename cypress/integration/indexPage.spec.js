const GITHUB_LINK = 'https://www.github.com/dinohasanic';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/dinohasanic/';

describe('The Home Page', () => {
  context('General - Page Level', () => {
    it('successfully loads the landing page', () => {
      cy.visit('/');
    });
  });
  context('Header and Footer Links', () => {
    it('successfully loads href attributes', () => {
      cy.get('[data-cy=githubLink]').should('have.prop', 'href', GITHUB_LINK);
      cy.get('[data-cy=linkedinLink]').should('have.prop', 'href', LINKEDIN_LINK);
    });
    it('successfully loads toast notify on email click to copy', () => {
      cy.get('[data-cy=emailLink').each(($a) => {
        cy.get($a).click();
        cy.get('.toast-notification').should('exist');
      });
    });
  });
  context('Resume Link', () => {
    it('successfully loads href attribute and pdf file on following the url', () => {
      cy.get('[data-cy=resumeLink]').then(($a) => {
        const href = $a.prop('href');
        cy.request(href).then((response) => {
          expect(response.status).to.eq(200);
          expect(response).to.have.property('headers');
          expect(response.headers['content-type']).to.eq('application/pdf');
        });
      });
    });
  });
  context('Footer Image', () => {
    it('successfully loads and displays the footer image', () => {
      cy.get('.contact-section-right').find('img').should('be.visible');
    });
  });
  context('Projects', () => {
    it('successfully loads and displays the projects', () => {
      cy.get('.cards-container').find('.card').should('exist');
    });
    it('displays project image for each project', () => {
      cy.get('.cards-container').find('.card').each(($el) => {
        cy.wrap($el).find('img').should('be.visible');
      });
    });
  });
});
