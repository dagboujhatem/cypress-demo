describe("Viter un site dans DuckDuckGo ", () => {
  context("La Tunisie sur le moteur de recherche DuckDuckGo", () => {
    it("Faire un recherche sur la Tunisie dans DuckDuckGo", () => {
      cy.visit("https://duckduckgo.com");
    //   cy.get("#searchbox_input").type("La Tunisie {enter}");
      cy.get("#searchbox_input").type("La Tunisie ");
      cy.get(".searchbox_searchButton__F5Bwq").click();

      // tester si existe un site particulier dans les résultats de recherche 
      cy.get("#web_content_wrapper").contains("Tunisie")
    });
  });
});
