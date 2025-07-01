const loginPage = require('../support/pageObjects/LoginPage');
const menuPage = require('../support/pageObjects/MenuPage');
const employeePage = require('../support/pageObjects/EmployeePage');
const employeeData = require('../../test-data/employee-lifecycle.json');

describe('TC26: Full employee lifecycle scenario', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const admin = users.find(u => u.role === 'Admin');
      loginPage.login(admin.username, admin.password);
    });
  });

  it('should complete all employee lifecycle steps', () => {
    menuPage.goToPIM();
    employeePage.addEmployee(employeeData.firstName, employeeData.lastName);
    employeePage.searchEmployee(employeeData.firstName);
    employeePage.selectEmployee(employeeData.firstName);
    employeePage.editFirstName(employeeData.updatedFirstName);
    employeePage.addJob(employeeData.jobTitle);
    employeePage.addReportTo(employeeData.supervisor);
    employeePage.addEmergencyContact(
      employeeData.emergencyContact.name,
      employeeData.emergencyContact.relationship,
      employeeData.emergencyContact.phone
    );
    employeePage.addDependent(
      employeeData.dependent.name,
      employeeData.dependent.relationship
    );
    employeePage.addImmigrationDetails(employeeData.immigrationNumber);
    employeePage.addSalaryDetails(employeeData.salary);
    employeePage.addTaxExemptions(employeeData.taxStatus);
    employeePage.addQualifications(employeeData.qualification);
    employeePage.addWorkExperience(employeeData.workExperience);
    employeePage.addSkills(employeeData.skill);
    employeePage.addLanguages(employeeData.language);
    employeePage.addLicenses(employeeData.license);
    employeePage.addAttachments();
    employeePage.addMemberships();
    employeePage.addWorkShifts();
    employeePage.addLeaveEntitlements(employeeData.updatedFirstName, employeeData.leaveEntitlement);
    employeePage.assignLeave(employeeData.updatedFirstName, employeeData.leaveStart, employeeData.leaveEnd);
    employeePage.approveLeave(employeeData.updatedFirstName);
    employeePage.rejectLeave(employeeData.updatedFirstName);
    employeePage.cancelLeave(employeeData.updatedFirstName);
    employeePage.addTimesheet(employeeData.updatedFirstName);
    employeePage.approveTimesheet(employeeData.updatedFirstName);
    employeePage.rejectTimesheet(employeeData.updatedFirstName);
    employeePage.addPerformanceReview(employeeData.updatedFirstName);
    employeePage.addPerformanceTracker(employeeData.trackerName);
    employeePage.addDisciplinaryCase(employeeData.caseName);
    employeePage.assignAssetToEmployee(employeeData.updatedFirstName);
    employeePage.addTravelRequest(employeeData.travelDestination);
    employeePage.approveTravelRequest(employeeData.updatedFirstName);
    employeePage.addExpenseClaim(employeeData.expenseAmount);
    employeePage.approveExpenseClaim(employeeData.updatedFirstName);
    employeePage.addTraining(employeeData.trainingName);
    employeePage.assignTraining(employeeData.updatedFirstName);
    employeePage.completeTraining(employeeData.updatedFirstName);
    employeePage.addGoal(employeeData.goalName);
    employeePage.completeGoal(employeeData.goalName);
    employeePage.addKPI(employeeData.kpiName);
    employeePage.completeKPI(employeeData.kpiName);
    employeePage.terminateEmployee(employeeData.updatedFirstName);
    employeePage.reactivateEmployee(employeeData.updatedFirstName);
    employeePage.deleteEmployee(employeeData.updatedFirstName);
  });
});
