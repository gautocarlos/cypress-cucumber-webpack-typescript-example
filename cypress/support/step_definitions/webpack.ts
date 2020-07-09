/// <reference types="Cypress" />

import myAssertion from "./myAssertion";

const {
  Given,
  Then
} = require("cypress-cucumber-preprocessor/steps");

Given(`webpack is configured`, () => {});

Then(`this test should work just fine!`, () => {
  myAssertion();
  cy.visit('https://www.playdigital.com.ar/faq/');
  cy.get('div.flex:nth-child(2) > button:nth-child(1)').click();
  cy.get('div.flex:nth-child(3) > button:nth-child(1)').click();
  cy.get('div.flex:nth-child(4) > button:nth-child(1)').click();
});
