describe("App Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("should display the header", () => {
    cy.get("header").should("be.visible");
  });

  it("should display the header elements", () => {
    cy.get("header").within(() => {
      cy.get("h1").contains("Kickdrum");
      cy.get("h2").contains("Internet Booking Engine");
      cy.get("h3").contains("MY BOOKINGS");
      cy.get("button").should("be.visible");
    });
  });

  it("should toggle login and logout", () => {
    cy.get("button").contains("Login").click();
    cy.get("button").contains("Logout").should("be.visible");

    cy.get("button").contains("Logout").click();
    cy.get("button").contains("Login").should("be.visible");
  });

  it("should display the footer", () => {
    cy.get("footer").should("be.visible");
  });

  it("should have the correct company title in the footer", () => {
    cy.get("footer").within(() => {
      cy.get("h1").contains("Kickdrum").should("be.visible");
    });
  });

  it("should have the correct legal information in the footer", () => {
    cy.get("footer").within(() => {
      cy.get("p")
        .contains("© Kickdrum Technology Group LLC.")
        .should("be.visible");
      cy.get("p").contains("All rights reserved.").should("be.visible");
    });
  });
});
