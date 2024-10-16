// cypress/e2e/workout.spec.js
import { EXERCISE_NAMES } from '../../src/Const/exercise_utils'

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
    const liftName = EXERCISE_NAMES[Math.floor(Math.random())];
    const liftWeight = '150';
    const liftSets = '3';
    const liftReps = '10';
  
    cy.contains('START LOGGING').click();
    cy.get('input[formControlName="name"]').type(liftName);
    cy.get('input[formControlName="weight"]').type(liftWeight);
    cy.get('input[formControlName="sets"]').type(liftSets);
    cy.get('input[formControlName="reps"]').type(liftReps);
  
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
