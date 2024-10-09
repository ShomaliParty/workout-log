// cypress/e2e/workout.spec.js

// helper assets
const Routes = Object.freeze({
  HOME: 'http://localhost:4200/home',
  LOGGER: 'http://localhost:4200/logger',
  HISTORY: 'http://localhost:4200/history'
});

function navigate(route) {
  cy.visit(route);
}

function checkLiftExists(liftName, weight, sets, reps) {
  cy.contains(liftName).should('be.visible');
  cy.contains(weight).should('be.visible');
  cy.contains(`${sets} x ${reps}`).should('be.visible');
}

// testing
describe('Workout Log App', () => {
  beforeEach(() => {
    navigate(Routes.HOME);
  });

  it('should navigate to logger, add a lift, save the workout, and display it in history', () => {
    const liftName = 'Bench Press';
    const liftWeight = '150';
    const liftSets = '3';
    const liftReps = '10';
  
    cy.contains('START LOGGING').click();
    cy.get('input[name="name"]').type(liftName);
    cy.get('input[name="weight"]').type(liftWeight);
    cy.get('input[name="sets"]').type(liftSets);
    cy.get('input[name="reps"]').type(liftReps);
  
    cy.contains('Add lift').click();
    checkLiftExists(liftName, liftWeight, liftSets, liftReps);

    cy.contains('Save workout').click();
    cy.get('button').contains('Home').click();
  
    cy.contains('VIEW LOGS').click();
    cy.contains('History').should('be.visible');
    cy.get('h2').first().click();
    checkLiftExists(liftName, liftWeight, liftSets, liftReps);
  });
  

  it('should navigate to history and display workouts', () => {
    cy.contains('VIEW LOGS').click();
    cy.contains('History').should('be.visible');
  });
});
