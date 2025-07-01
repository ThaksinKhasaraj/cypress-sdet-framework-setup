class EmployeePage {
  // --- Locators ---
  addButton = 'Add';
  firstNameInput = 'input[name="firstName"]';
  lastNameInput = 'input[name="lastName"]';
  submitButton = 'button[type="submit"]';
  searchInput = 'input[placeholder="Type for hints..."]';
  jobTab = 'Job';
  editButton = 'button:contains("Edit")';
  listBox = 'div[role="listbox"]';
  option = 'div[role="option"]';
  emergencyContactsTab = 'Emergency Contacts';
  relationshipInput = 'input[name="relationship"]';
  homePhoneInput = 'input[name="homePhone"]';
  dependentsTab = 'Dependents';
  immigrationTab = 'Immigration';
  numberInput = 'input[name="number"]';
  salaryTab = 'Salary';
  amountInput = 'input[name="amount"]';
  taxExemptionsTab = 'Tax Exemptions';
  federalStatusInput = 'input[name="federalStatus"]';
  reportToTab = 'Report-to';
  qualificationsTab = 'Qualifications';
  instituteInput = 'input[name="institute"]';
  workExperienceTab = 'Work Experience';
  employerInput = 'input[name="employer"]';
  skillsTab = 'Skills';
  languagesTab = 'Languages';
  licensesTab = 'Licenses';
  attachmentsTab = 'Attachments';
  membershipsTab = 'Memberships';
  entitlementsTab = 'Entitlements';
  addEntitlementsButton = 'Add Entitlements';
  entitlementInput = 'input[name="entitlement"]';
  assignLeaveButton = 'Assign Leave';
  dateInput = 'input[placeholder="yyyy-mm-dd"]';
  leaveListTab = 'Leave List';
  timesheetsTab = 'Timesheets';
  addTimesheetButton = 'Add Timesheet';
  manageReviewsTab = 'Manage Reviews';
  trackersTab = 'Trackers';
  trackerNameInput = 'input[name="trackerName"]';
  disciplinaryCasesTab = 'Disciplinary Cases';
  caseNameInput = 'input[name="caseName"]';
  assetsTab = 'Assets';
  assignAssetButton = 'Assign Asset';
  travelRequestsTab = 'Travel Requests';
  destinationInput = 'input[name="destination"]';
  expenseClaimsTab = 'Expense Claims';
  amountClaimInput = 'input[name="amount"]';
  trainingTab = 'Training';
  trainingNameInput = 'input[name="trainingName"]';
  goalsTab = 'Goals';
  goalNameInput = 'input[name="goalName"]';
  kpisTab = 'KPIs';
  kpiNameInput = 'input[name="kpiName"]';

  // --- Methods ---
  addEmployee(firstName, lastName) {
    cy.contains(this.addButton).click();
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.submitButton).click();
  }
  searchEmployee(name) {
    cy.get(this.searchInput).clear().type(name);
    cy.get(this.submitButton).click();
    cy.contains(name).should('exist');
  }
  selectEmployee(name) {
    cy.contains(name).click();
  }
  editFirstName(newName) {
    cy.get(this.firstNameInput).clear().type(newName);
    cy.get(this.submitButton).click();
    cy.contains('Successfully Saved').should('exist');
  }
  addJob(jobTitle) {
    cy.contains(this.jobTab).click();
    cy.get(this.editButton).click();
    cy.get(this.listBox).first().click();
    cy.get(this.option).contains(jobTitle).click();
    cy.get(this.submitButton).click();
  }
  addEmergencyContact(name, relationship, phone) {
    cy.contains(this.emergencyContactsTab).click();
    cy.contains(this.addButton).click();
    cy.get('input[name="name"]').type(name);
    cy.get(this.relationshipInput).type(relationship);
    cy.get(this.homePhoneInput).type(phone);
    cy.get(this.submitButton).click();
  }
  addDependent(name, relationship) {
    cy.contains(this.dependentsTab).click();
    cy.contains(this.addButton).click();
    cy.get('input[name="name"]').type(name);
    cy.get(this.listBox).first().click();
    cy.get(this.option).contains(relationship).click();
    cy.get(this.submitButton).click();
  }
  addImmigrationDetails(number) {
    cy.contains(this.immigrationTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.numberInput).type(number);
    cy.get(this.submitButton).click();
  }
  addSalaryDetails(amount) {
    cy.contains(this.salaryTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.amountInput).type(amount);
    cy.get(this.submitButton).click();
  }
  addTaxExemptions(status) {
    cy.contains(this.taxExemptionsTab).click();
    cy.get(this.editButton).click();
    cy.get(this.federalStatusInput).type(status);
    cy.get(this.submitButton).click();
  }
  addReportTo(supervisor) {
    cy.contains(this.reportToTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.searchInput).type(supervisor);
    cy.get(this.option).contains(supervisor).click();
    cy.get(this.submitButton).click();
  }
  addQualifications(institute) {
    cy.contains(this.qualificationsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.instituteInput).type(institute);
    cy.get(this.submitButton).click();
  }
  addWorkExperience(employer) {
    cy.contains(this.workExperienceTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.employerInput).type(employer);
    cy.get(this.submitButton).click();
  }
  addSkills(skill) {
    cy.contains(this.skillsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.listBox).first().click();
    cy.get(this.option).contains(skill).click();
    cy.get(this.submitButton).click();
  }
  addLanguages(language) {
    cy.contains(this.languagesTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.listBox).first().click();
    cy.get(this.option).contains(language).click();
    cy.get(this.submitButton).click();
  }
  addLicenses(license) {
    cy.contains(this.licensesTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.listBox).first().click();
    cy.get(this.option).contains(license).click();
    cy.get(this.submitButton).click();
  }
  addAttachments() {
    cy.contains(this.attachmentsTab).click();
    cy.contains(this.addButton).click();
    // cy.get('input[type="file"]').attachFile('resume.pdf');
    cy.get(this.submitButton).click();
  }
  addMemberships() {
    cy.contains(this.membershipsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.listBox).first().click();
    cy.get(this.option).first().click();
    cy.get(this.submitButton).click();
  }
  addWorkShifts() {
    cy.contains(this.jobTab).click();
    cy.get(this.editButton).click();
    cy.get(this.listBox).eq(1).click();
    cy.get(this.option).first().click();
    cy.get(this.submitButton).click();
  }
  addLeaveEntitlements(name, entitlement) {
    cy.contains(this.entitlementsTab).click();
    cy.contains(this.addEntitlementsButton).click();
    cy.get(this.searchInput).type(name);
    cy.get(this.option).contains(name).click();
    cy.get(this.entitlementInput).type(entitlement);
    cy.get(this.submitButton).click();
  }
  assignLeave(name, startDate, endDate) {
    cy.contains(this.assignLeaveButton).click();
    cy.get(this.searchInput).type(name);
    cy.get(this.option).contains(name).click();
    cy.get(this.dateInput).first().type(startDate);
    cy.get(this.dateInput).last().type(endDate);
    cy.get(this.submitButton).click();
  }
  approveLeave(name) {
    cy.contains(this.leaveListTab).click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  rejectLeave(name) {
    cy.contains(this.leaveListTab).click();
    cy.contains(name).parents('tr').find('button').contains('Reject').click();
  }
  cancelLeave(name) {
    cy.contains(this.leaveListTab).click();
    cy.contains(name).parents('tr').find('button').contains('Cancel').click();
  }
  addTimesheet(name) {
    cy.contains(this.timesheetsTab).click();
    cy.contains(this.addTimesheetButton).click();
    cy.get(this.searchInput).type(name);
    cy.get(this.option).contains(name).click();
    cy.get(this.submitButton).click();
  }
  approveTimesheet(name) {
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  rejectTimesheet(name) {
    cy.contains(name).parents('tr').find('button').contains('Reject').click();
  }
  addPerformanceReview(name) {
    cy.contains(this.manageReviewsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.searchInput).type(name);
    cy.get(this.option).contains(name).click();
    cy.get(this.submitButton).click();
  }
  addPerformanceTracker(trackerName) {
    cy.contains(this.trackersTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.trackerNameInput).type(trackerName);
    cy.get(this.submitButton).click();
  }
  addDisciplinaryCase(caseName) {
    cy.contains(this.disciplinaryCasesTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.caseNameInput).type(caseName);
    cy.get(this.submitButton).click();
  }
  assignAssetToEmployee(employeeName) {
    cy.contains(this.assetsTab).click();
    cy.contains(this.assignAssetButton).click();
    cy.get(this.searchInput).type(employeeName);
    cy.get(this.option).contains(employeeName).click();
    cy.get(this.submitButton).click();
  }
  addTravelRequest(destination) {
    cy.contains(this.travelRequestsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.destinationInput).type(destination);
    cy.get(this.submitButton).click();
  }
  approveTravelRequest(name) {
    cy.contains(this.travelRequestsTab).click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  addExpenseClaim(amount) {
    cy.contains(this.expenseClaimsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.amountClaimInput).type(amount);
    cy.get(this.submitButton).click();
  }
  approveExpenseClaim(name) {
    cy.contains(this.expenseClaimsTab).click();
    cy.contains(name).parents('tr').find('button').contains('Approve').click();
  }
  addTraining(trainingName) {
    cy.contains(this.trainingTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.trainingNameInput).type(trainingName);
    cy.get(this.submitButton).click();
  }
  assignTraining(employeeName) {
    cy.contains('Assign').click();
    cy.get(this.searchInput).type(employeeName);
    cy.get(this.option).contains(employeeName).click();
    cy.get(this.submitButton).click();
  }
  completeTraining(name) {
    cy.contains(name).parents('tr').find('button').contains('Complete').click();
  }
  addGoal(goalName) {
    cy.contains(this.goalsTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.goalNameInput).type(goalName);
    cy.get(this.submitButton).click();
  }
  completeGoal(goalName) {
    cy.contains(goalName).parents('tr').find('button').contains('Complete').click();
  }
  addKPI(kpiName) {
    cy.contains(this.kpisTab).click();
    cy.contains(this.addButton).click();
    cy.get(this.kpiNameInput).type(kpiName);
    cy.get(this.submitButton).click();
  }
  completeKPI(kpiName) {
    cy.contains(kpiName).parents('tr').find('button').contains('Complete').click();
  }
  terminateEmployee(name) {
    cy.get(this.searchInput).type(name);
    cy.get(this.submitButton).click();
    cy.contains(name).click();
    cy.contains('Terminate Employment').click();
    cy.get(this.submitButton).click();
  }
  reactivateEmployee(name) {
    cy.contains('Reactivate Employment').click();
    cy.get(this.submitButton).click();
  }
  deleteEmployee(name) {
    cy.get(this.searchInput).type(name);
    cy.get(this.submitButton).click();
    cy.contains(name).parents('tr').find('button').contains('Delete').click();
    cy.get(this.submitButton).click();
  }
}

module.exports = new EmployeePage();
