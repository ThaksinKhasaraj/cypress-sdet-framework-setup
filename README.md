# 🚀 Cypress SDET Framework  with GitHub Copilot ![Cypress Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png)

**Summary:**  
- 🐞 Use `cypress:open:*` for debugging and developing tests (browser opens).
- ⚡ Use `cypress:run:*` for running tests in headless mode.

---

## 🛠️ How to Run the Scripts

1. **Install dependencies:**  
   ```bash
   npm install
   ```

2. **Open Cypress in interactive mode (browser will open):**
   ```bash
   npm run cypress:open:dev
   npm run cypress:open:qa
   npm run cypress:open:ppe
   ```

3. **Run Cypress in headless mode:**
   ```bash
   npm run cypress:run:dev
   npm run cypress:run:qa
   npm run cypress:run:ppe
   ```

---

## ❓ FAQ: Why doesn't the browser open when I run the script?

- If you use `npm run cypress:run:dev`, Cypress runs in **headless mode** (no browser UI will open, runs in the background).
- If you want Cypress to open the browser UI, use:
  ```bash
  npm run cypress:open:dev
  ```
  This will launch the Cypress Test Runner and open the browser for you to select and run tests interactively.

---

## 🧰 Troubleshooting

- 🖥️ If the browser does not open, use the `cypress:open:*` scripts.
- ❌ If tests fail instantly, check for import errors, syntax errors, or missing files in your test scripts.
- ⚙️ For any config changes (e.g., new plugins), update all `cypress.config.*.js` files as needed.

---

## 🎯 How to run only specific test cases

You can run only some test cases or files in Cypress by:

### 1️⃣ Using `.only` in your test file

Add `.only` to a `describe` or `it` block:
```javascript
describe.only('My Suite', () => {
  it('runs only this suite', () => { /* ... */ });
});

it.only('runs only this test', () => { /* ... */ });
```

### 2️⃣ Running a specific spec file

Use the `--spec` option with your Cypress run command:
```bash
npx cypress run --spec "cypress/e2e/regression/login.cy.js"
```
Or with npm script:
```bash
npx cypress run --config-file cypress.config.dev.js --spec "cypress/e2e/regression/login.cy.js"
```

### 3️⃣ In interactive mode

When you run:
```bash
npm run cypress:open:dev
```
You can select and run only the test files or cases you want from the Cypress UI.

---

> Made with ❤️ and [GitHub Copilot](https://github.com/features/copilot)  
> ![GitHub Copilot Logo](https://github.githubassets.com/images/modules/site/features/copilot-icon.svg)
