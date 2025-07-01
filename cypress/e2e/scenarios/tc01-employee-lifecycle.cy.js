
const loginPage = require('../../support/pageObjects/LoginPage');
const MenuPage = require('../../support/pageObjects/MenuPage');
const menuPage = new MenuPage();
const employeePage = require('../../support/pageObjects/EmployeePage');
const employeeData = require('../../test-data/employee-lifecycle.json');

describe('TC01: Full employee lifecycle scenario', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const admin = users.find(u => u.role === 'Admin');
      loginPage.login(admin.username, admin.password);
    });
  });

  it('should add and search employee', () => {
    // --- Add and search employee ---
    menuPage.goToPIM();
    employeePage.addEmployee(employeeData.firstName, employeeData.lastName);
    employeePage.searchEmployee(employeeData.firstName);
    employeePage.selectEmployee(employeeData.firstName);
  });

  it('should edit employee basic info', () => {
    // --- Edit employee basic info ---
    employeePage.editFirstName(employeeData.updatedFirstName);
  });

  it('should manage job and reporting structure', () => {
    // --- Job and reporting structure ---
    employeePage.addJob(employeeData.jobTitle);
    employeePage.addReportTo(employeeData.supervisor);
  });

  it('should manage emergency contacts and dependents', () => {
    // --- Emergency and dependents ---
    employeePage.addEmergencyContact(
      employeeData.emergencyContact.name,
      employeeData.emergencyContact.relationship,
      employeeData.emergencyContact.phone
    );
    employeePage.addDependent(
      employeeData.dependent.name,
      employeeData.dependent.relationship
    );
  });

  it('should manage immigration, salary, and tax details', () => {
    // --- Immigration, salary, tax ---
    employeePage.addImmigrationDetails(employeeData.immigrationNumber);
    employeePage.addSalaryDetails(employeeData.salary);
    employeePage.addTaxExemptions(employeeData.taxStatus);
  });

  it('should manage qualifications, experience, and skills', () => {
    // --- Qualifications, experience, skills ---
    employeePage.addQualifications(employeeData.qualification);
    employeePage.addWorkExperience(employeeData.workExperience);
    employeePage.addSkills(employeeData.skill);
    employeePage.addLanguages(employeeData.language);
    employeePage.addLicenses(employeeData.license);
  });

  it('should manage attachments, memberships, and shifts', () => {
    // --- Attachments, memberships, shifts ---
    employeePage.addAttachments();
    employeePage.addMemberships();
    employeePage.addWorkShifts();
  });

  it('should manage leave', () => {
    // --- Leave management ---
    employeePage.addLeaveEntitlements(employeeData.updatedFirstName, employeeData.leaveEntitlement);
    employeePage.assignLeave(employeeData.updatedFirstName, employeeData.leaveStart, employeeData.leaveEnd);
    employeePage.approveLeave(employeeData.updatedFirstName);
    employeePage.rejectLeave(employeeData.updatedFirstName);
    employeePage.cancelLeave(employeeData.updatedFirstName);
  });

  it('should manage timesheets', () => {
    // --- Timesheet management ---
    employeePage.addTimesheet(employeeData.updatedFirstName);
    employeePage.approveTimesheet(employeeData.updatedFirstName);
    employeePage.rejectTimesheet(employeeData.updatedFirstName);
  });

  it('should manage performance', () => {
    // --- Performance management ---
    employeePage.addPerformanceReview(employeeData.updatedFirstName);
    employeePage.addPerformanceTracker(employeeData.trackerName);
  });

  it('should manage disciplinary cases, assets, travel, and expenses', () => {
    // --- Disciplinary, assets, travel, expenses ---
    employeePage.addDisciplinaryCase(employeeData.caseName);
    employeePage.assignAssetToEmployee(employeeData.updatedFirstName);
    employeePage.addTravelRequest(employeeData.travelDestination);
    employeePage.approveTravelRequest(employeeData.updatedFirstName);
    employeePage.addExpenseClaim(employeeData.expenseAmount);
    employeePage.approveExpenseClaim(employeeData.updatedFirstName);
  });

  it('should manage training, goals, and KPIs', () => {
    // --- Training, goals, KPIs ---
    employeePage.addTraining(employeeData.trainingName);
    employeePage.assignTraining(employeeData.updatedFirstName);
    employeePage.completeTraining(employeeData.updatedFirstName);
    employeePage.addGoal(employeeData.goalName);
    employeePage.completeGoal(employeeData.goalName);
    employeePage.addKPI(employeeData.kpiName);
    employeePage.completeKPI(employeeData.kpiName);
  });

  it('should manage termination and reactivation', () => {
    // --- Termination and reactivation ---
    employeePage.terminateEmployee(employeeData.updatedFirstName);
    employeePage.reactivateEmployee(employeeData.updatedFirstName);
    employeePage.deleteEmployee(employeeData.updatedFirstName);
  });
});
