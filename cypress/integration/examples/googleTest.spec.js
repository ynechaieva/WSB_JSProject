 ///<reference  type="Cypress" />

const localhost = "http://localhost:1234/";
const homePage = localhost;
const roomsPage = localhost + "rooms";


const confirmURL = (url) => {
    cy.location().should(($loc) => {
        expect($loc.href).to.eq(url);
    })
}


describe("Home page start", () => {

    it("should open home page", () => {
        cy.visit(localhost);
        
    })

    it("Searcg for 'Hello, there!' text", () => {
        cy.get(".greetings").contains("Hello, there!");
    })

    it("Show details on Home page", () => {
        cy.get(".home-show-details").should("exist").click();
        confirmURL(localhost);
    })

}) 

//Cypress.config().waitForAnimations = true;