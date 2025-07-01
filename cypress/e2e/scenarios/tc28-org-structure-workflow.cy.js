const loginPage = require('../support/pageObjects/LoginPage');
const menuPage = require('../support/pageObjects/MenuPage');
const orgPage = require('../support/pageObjects/OrgPage');
const orgData = require('../../test-data/org-structure.json');

describe('TC28: Organization structure and workflow scenario', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const admin = users.find(u => u.role === 'Admin');
      loginPage.login(admin ? admin.username : users[0].username, admin ? admin.password : users[0].password);
    });
  });

  it('should complete all organization structure and workflow steps', () => {
    menuPage.openMenu('Organization');
    orgPage.addLocation(orgData.location);
    orgPage.addDepartment(orgData.department);
    orgPage.addJobTitle(orgData.jobTitle);
    orgPage.addGrade(orgData.grade);
    orgPage.addCostCenter(orgData.costCenter);
    orgPage.addBusinessUnit(orgData.businessUnit);
    orgPage.addDivision(orgData.division);
    orgPage.addSection(orgData.section);
    orgPage.addReportingMethod(orgData.reportingMethod);
    orgPage.addWorkShift(orgData.workShift);
    orgPage.addHoliday(orgData.holiday);
    orgPage.addCalendar(orgData.calendar);
    orgPage.addWorkflow(orgData.workflow);
    orgPage.addWorkflowStep(orgData.workflowStep);
    orgPage.addWorkflowApprover(orgData.workflowApprover);
    orgPage.addWorkflowNotification(orgData.workflowNotification);
    orgPage.addWorkflowEscalation(orgData.workflowEscalation);
    orgPage.addWorkflowCondition(orgData.workflowCondition);
    orgPage.addWorkflowAction(orgData.workflowAction);
    orgPage.activateWorkflow(orgData.workflow);
    orgPage.deactivateWorkflow(orgData.workflow);
    orgPage.editWorkflow(orgData.workflow, orgData.workflowUpdated);
    orgPage.deleteWorkflow(orgData.workflowUpdated);
    orgPage.assignWorkflowToProcess(orgData.workflow, orgData.process);
    orgPage.testWorkflow(orgData.workflow);
    orgPage.approveWorkflowRequest(orgData.workflow);
    orgPage.rejectWorkflowRequest(orgData.workflow);
    orgPage.cancelWorkflowRequest(orgData.workflow);
    orgPage.addOrganizationChart(orgData.orgChart);
    orgPage.editOrganizationChart(orgData.orgChart, orgData.orgChartUpdated);
    orgPage.deleteOrganizationChart(orgData.orgChartUpdated);
    orgPage.addReportingLine(orgData.reportingLine);
    orgPage.editReportingLine(orgData.reportingLine, orgData.reportingLineUpdated);
    orgPage.deleteReportingLine(orgData.reportingLineUpdated);
    orgPage.addPosition(orgData.position);
    orgPage.editPosition(orgData.position, orgData.positionUpdated);
    orgPage.deletePosition(orgData.positionUpdated);
    orgPage.assignEmployeeToPosition(orgData.positionUpdated, orgData.employeeName);
    orgPage.removeEmployeeFromPosition(orgData.positionUpdated, orgData.employeeName);
    orgPage.addPositionHistory(orgData.positionHistory);
    orgPage.editPositionHistory(orgData.positionHistory, orgData.positionHistoryUpdated);
    orgPage.deletePositionHistory(orgData.positionHistoryUpdated);
    orgPage.addPositionAttachment(orgData.positionAttachment);
    orgPage.editPositionAttachment(orgData.positionAttachment, orgData.positionAttachmentUpdated);
    orgPage.deletePositionAttachment(orgData.positionAttachmentUpdated);
    orgPage.addPositionNote(orgData.positionNote);
    orgPage.editPositionNote(orgData.positionNote, orgData.positionNoteUpdated);
    orgPage.deletePositionNote(orgData.positionNoteUpdated);
    cy.logout();
  });
});
