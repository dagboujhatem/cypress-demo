// un fichier exemple des test E2E codé via Cypress

describe("Viter google et faire un recherche sur la tunisie", () => {
  beforeEach(() => {
    // Cela permet de visiter google avant chaque test ci-dessous
    cy.visit("https://google.com");
    cy.get("#L2AGLb").click();
  });

  context('La Tunisie sur le net', () => {
    it.only("Faire un recherche sur la Tunisie dans Google", () => {
      cy.get(".gLFyf").type("La Tunisie {enter}");
    });

    it("Faire un recherche sur le tourisme dans la Tunisie en Google", () => {
      cy.get(".gLFyf").type("Le tourisme de la Tunisie {enter}");
    });
  })
  
});
