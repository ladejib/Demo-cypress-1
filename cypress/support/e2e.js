// This file is processed and loaded automatically before your test files.

// You can use it to load custom commands or global configuration.
// Example:
// import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

