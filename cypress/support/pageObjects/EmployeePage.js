class EmployeePage {
  addEmployee(firstName, lastName) {
    cy.contains('Add').click();
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.get('button[type="submit"]').click();
  }
  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    cy.get('button[type="submit"]').click();
    cy.contains(name).should('exist');
  }
  selectEmployee(name) {
    cy.contains(name).click();
  }
  editFirstName(newName) {
    cy.get('input[name="firstName"]').clear().type(newName);
    cy.get('button[type="submit"]').click();
    cy.contains('Successfully Saved').should('exist');
  }
  addJob(jobTitle) {
    cy.contains('Job').click();
    cy.get('button:contains("Edit")').click();
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').contains(jobTitle).click();
    cy.get('button[type="submit"]').click();
  }
  addEmergencyContact(name, relationship, phone) {
    cy.contains('Emergency Contacts').click();
    cy.contains('Add').click();
    cy.get('input[name="name"]').type(name);
    cy.get('input[name="relationship"]').type(relationship);
    cy.get('input[name="homePhone"]').type(phone);
    cy.get('button[type="submit"]').click();
  }
  addDependent(name, relationship) {
    cy.contains('Dependents').click();
    cy.contains('Add').click();
    cy.get('input[name="name"]').type(name);
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').contains(relationship).click();
    cy.get('button[type="submit"]').click();
  }
  addImmigrationDetails(number) {
    cy.contains('Immigration').click();
    cy.contains('Add').click();
    cy.get('input[name="number"]').type(number);
    cy.get('button[type="submit"]').click();
  }
  addSalaryDetails(amount) {
    cy.contains('Salary').click();
    cy.contains('Add').click();
    cy.get('input[name="amount"]').type(amount);
    cy.get('button[type="submit"]').click();
  }
  addTaxExemptions(status) {
    cy.contains('Tax Exemptions').click();
    cy.get('button:contains("Edit")').click();
    cy.get('input[name="federalStatus"]').type(status);
    cy.get('button[type="submit"]').click();
  }
  addReportTo(supervisor) {
    cy.contains('Report-to').click();
    cy.contains('Add').click();
    cy.get('input[placeholder="Type for hints..."]').type(supervisor);
    cy.get('div[role="option"]').contains(supervisor).click();
    cy.get('button[type="submit"]').click();
  }
  addQualifications(institute) {
    cy.contains('Qualifications').click();
    cy.contains('Add').click();
    cy.get('input[name="institute"]').type(institute);
    cy.get('button[type="submit"]').click();
  }
  addWorkExperience(employer) {
    cy.contains('Work Experience').click();
    cy.contains('Add').click();
    cy.get('input[name="employer"]').type(employer);
    cy.get('button[type="submit"]').click();
  }
  addSkills(skill) {
    cy.contains('Skills').click();
    cy.contains('Add').click();
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').contains(skill).click();
    cy.get('button[type="submit"]').click();
  }
  addLanguages(language) {
    cy.contains('Languages').click();
    cy.contains('Add').click();
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').contains(language).click();
    cy.get('button[type="submit"]').click();
  }
  addLicenses(license) {
    cy.contains('Licenses').click();
    cy.contains('Add').click();
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').contains(license).click();
    cy.get('button[type="submit"]').click();
  }
  addAttachments() {
    cy.contains('Attachments').click();
    cy.contains('Add').click();
    // cy.get('input[type="file"]').attachFile('resume.pdf');
    cy.get('button[type="submit"]').click();
  }
  addMemberships() {
    cy.contains('Memberships').click();
    cy.contains('Add').click();
    cy.get('div[role="listbox"]').first().click();
    cy.get('div[role="option"]').first().click();
    cy.get('button[type="submit"]').click();
  }
  addWorkShifts() {
    cy.contains('Job').click();
    cy.get('button:contains("Edit")').click();
    cy.get('div[role="listbox"]').eq(1).click();
    cy.get('div[role="option"]').first().click();
    cy.get('button[type="submit"]').click();
  }
  addLeaveEntitlements(name, entitlement) {
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('div[role="option"]').contains(name).click();
    cy.get('input[name="entitlement"]').type(entitlement);
    cy.get('button[type="submit"]').click();
  }
  assignLeave(name, startDate, endDate) {
    cy.contains('Assign Leave').click();
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('div[role="option"]').contains(name).click();
    cy.get('input[placeholder="yyyy-mm-dd"]').first().type(startDate);
    cy.get('input[placeholder="yyyy-mm-dd"]').last().type(endDate);
    cy.get('button[type="submit"]').click();
  }
  approveLeave(name) {
    cy.contains('Leave List').click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  rejectLeave(name) {
    cy.contains('Leave List').click();
    cy.contains(name).parents('tr').find('button').contains('Reject').click();
  }
  cancelLeave(name) {
    cy.contains('Leave List').click();
    cy.contains(name).parents('tr').find('button').contains('Cancel').click();
  }
  addTimesheet(name) {
    cy.contains('Timesheets').click();
    cy.contains('Add Timesheet').click();
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('div[role="option"]').contains(name).click();
    cy.get('button[type="submit"]').click();
  }
  approveTimesheet(name) {
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  rejectTimesheet(name) {
    cy.contains(name).parents('tr').find('button').contains('Reject').click();
  }
  addPerformanceReview(name) {
    cy.contains('Manage Reviews').click();
    cy.contains('Add').click();
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('div[role="option"]').contains(name).click();
    cy.get('button[type="submit"]').click();
  }
  addPerformanceTracker(trackerName) {
    cy.contains('Trackers').click();
    cy.contains('Add').click();
    cy.get('input[name="trackerName"]').type(trackerName);
    cy.get('button[type="submit"]').click();
  }
  addDisciplinaryCase(caseName) {
    cy.contains('Disciplinary Cases').click();
    cy.contains('Add').click();
    cy.get('input[name="caseName"]').type(caseName);
    cy.get('button[type="submit"]').click();
  }
  assignAssetToEmployee(employeeName) {
    cy.contains('Assets').click();
    cy.contains('Assign Asset').click();
    cy.get('input[placeholder="Type for hints..."]').type(employeeName);
    cy.get('div[role="option"]').contains(employeeName).click();
    cy.get('button[type="submit"]').click();
  }
  addTravelRequest(destination) {
    cy.contains('Travel Requests').click();
    cy.contains('Add').click();
    cy.get('input[name="destination"]').type(destination);
    cy.get('button[type="submit"]').click();
  }
  approveTravelRequest(name) {
    cy.contains('Travel Requests').click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  addExpenseClaim(amount) {
    cy.contains('Expense Claims').click();
    cy.contains('Add').click();
    cy.get('input[name="amount"]').type(amount);
    cy.get('button[type="submit"]').click();
  }
  approveExpenseClaim(name) {
    cy.contains('Expense Claims').click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  addTraining(trainingName) {
    cy.contains('Training').click();
    cy.contains('Add').click();
    cy.get('input[name="trainingName"]').type(trainingName);
    cy.get('button[type="submit"]').click();
  }
  assignTraining(employeeName) {
    cy.contains('Assign').click();
    cy.get('input[placeholder="Type for hints..."]').type(employeeName);
    cy.get('div[role="option"]').contains(employeeName).click();
    cy.get('button[type="submit"]').click();
  }
  completeTraining(name) {
    cy.contains(name).parents('tr').find('button').contains('Complete').click();
  }
  addGoal(goalName) {
    cy.contains('Goals').click();
    cy.contains('Add').click();
    cy.get('input[name="goalName"]').type(goalName);
    cy.get('button[type="submit"]').click();
  }
  completeGoal(goalName) {
    cy.contains(goalName).parents('tr').find('button').contains('Complete').click();
  }
  addKPI(kpiName) {
    cy.contains('KPIs').click();
    cy.contains('Add').click();
    cy.get('input[name="kpiName"]').type(kpiName);
    cy.get('button[type="submit"]').click();
  }
  completeKPI(kpiName) {
    cy.contains(kpiName).parents('tr').find('button').contains('Complete').click();
  }
  terminateEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('button[type="submit"]').click();
    cy.contains(name).click();
    cy.contains('Terminate Employment').click();
    cy.get('button[type="submit"]').click();
  }
  reactivateEmployee(name) {
    cy.contains('Reactivate Employment').click();
    cy.get('button[type="submit"]').click();
  }
  deleteEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name);
    cy.get('button[type="submit"]').click();
    cy.contains(name).parents('tr').find('button').contains('Delete').click();
    cy.get('button[type="submit"]').click();
  }
}

module.exports = new EmployeePage();
