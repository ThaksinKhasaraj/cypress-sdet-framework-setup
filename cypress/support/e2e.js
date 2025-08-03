// This file is processed and loaded automatically before your test files.
// You can use this file to import custom commands, set up global hooks, or configure Cypress.

import './commands';
Cypress.on('uncaught:exception', (err, runnable) => {

  return false;
});