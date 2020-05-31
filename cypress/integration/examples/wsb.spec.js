/// <reference types="Cypress" />
//require('cypress-xpath')
Cypress.config().waitForAnimations = true;

const formURL = "https://frontendpodyplomowe.github.io/logging";
const registerURL = formURL + "/register.html";
const loginURL = formURL + "/index.html";
const loggedURL = formURL + "/login.html"
const testedLogin = "tester";
const testedPassword = "123";
const setUpAccountText = "Załóż konto";

const confirmURL = (url) => {
    cy.location().should(($loc) =>{
        expect($loc.href).to.eq(url);
    })
}


describe("Form test for selected website", ()=>{
    it("Open website with form", ()=>{
        cy.visit(formURL);
    })

    it('Form - register user',()=>{
        cy.get('a').should('exist').click();
        confirmURL(registerURL);
        cy.get("#login").type(testedLogin);
        cy.get("#password").type(testedPassword);
        cy.get('button').should('have.text',setUpAccountText).click();
        confirmURL(loginURL);
    })

    // it('Form - login user',()=>{
    //     cy.xpath('//input[@name="login"]').type(testedLogin);
    //     cy.xpath('//input[@name="password"]').type(testedPassword);
    //     cy.xpath('//button[contains(text(),"Zaloguj się!")]').click();
    //     //cy.wait(3000);
    //     cy.window().then($win =>{
    //         expect($win.localStorage.getItem('logged')).to.eq('1');
    //     })
    //     confirmURL(loggedURL);
    // })

    it('Form - login user',()=>{
        cy.get('#login').type(testedLogin);
        cy.get('#password').type(testedPassword);
        cy.get('button').click();
        cy.window().then($win =>{
            expect($win.localStorage.getItem('logged')).to.eq('1');
        })
        confirmURL(loggedURL);
    })

    it('Form - logout',()=>{
        // cy.window().then($win => {
        //     expect($win.localStorage.getItem('users')).to.eq('[{"user":"tester","pass":"123"}]');
        // });
        cy.get('#welcomemsg').should("have.text", "Witaj " + testedLogin + "!");
        cy.get("#logout").click();
        confirmURL(loginURL);
    })

})



