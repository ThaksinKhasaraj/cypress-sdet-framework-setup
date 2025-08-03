const loginPage = require('../../support/pageObjects/LoginPage');
const menuPage = require('../../support/pageObjects/MenuPage');
const leavePage = require('../../support/pageObjects/LeavePage');
const leaveData = require('../../test-data/leave.json');

describe('TC04: Full leave management scenario', () => {
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.fixture('users').then(users => {
      const employee = users.find(u => u.role === 'ESS');
      loginPage.login(employee ? employee.username : users[0].username, employee ? employee.password : users[0].password);
    });
  });

  after(() => {
    cy.logout();
  });

  it('should complete all leave management steps', () => {
    menuPage.goToLeave();
    leavePage.applyLeave(leaveData.type, leaveData.startDate, leaveData.endDate, leaveData.comment);
    leavePage.editLeaveRequest(leaveData.updatedComment);
    leavePage.cancelLeaveRequest();
    leavePage.reapplyLeave(leaveData.type, leaveData.reapplyStart, leaveData.reapplyEnd, leaveData.reapplyComment);
    leavePage.approveLeaveAsManager(leaveData.employeeName);
    leavePage.rejectLeaveAsManager(leaveData.employeeName);
    leavePage.cancelLeaveAsManager(leaveData.employeeName);
    leavePage.addLeaveType(leaveData.leaveType);
    leavePage.editLeaveType(leaveData.leaveType, leaveData.leaveTypeUpdated);
    leavePage.deleteLeaveType(leaveData.leaveTypeUpdated);
    leavePage.assignLeaveEntitlement(leaveData.employeeName, leaveData.entitlement);
    leavePage.editLeaveEntitlement(leaveData.employeeName, leaveData.entitlementUpdated);
    leavePage.deleteLeaveEntitlement(leaveData.employeeName);
    leavePage.addLeavePeriod(leaveData.leavePeriod);
    leavePage.editLeavePeriod(leaveData.leavePeriod, leaveData.leavePeriodUpdated);
    leavePage.deleteLeavePeriod(leaveData.leavePeriodUpdated);
    leavePage.addLeaveHoliday(leaveData.holiday);
    leavePage.editLeaveHoliday(leaveData.holiday, leaveData.holidayUpdated);
    leavePage.deleteLeaveHoliday(leaveData.holidayUpdated);
    leavePage.addLeaveCalendar(leaveData.calendar);
    leavePage.editLeaveCalendar(leaveData.calendar, leaveData.calendarUpdated);
    leavePage.deleteLeaveCalendar(leaveData.calendarUpdated);
    leavePage.addLeaveWorkflow(leaveData.workflow);
    leavePage.editLeaveWorkflow(leaveData.workflow, leaveData.workflowUpdated);
    leavePage.deleteLeaveWorkflow(leaveData.workflowUpdated);
    leavePage.assignLeaveWorkflow(leaveData.employeeName, leaveData.workflow);
    leavePage.approveLeaveWorkflow(leaveData.employeeName, leaveData.workflow);
    leavePage.rejectLeaveWorkflow(leaveData.employeeName, leaveData.workflow);
    leavePage.cancelLeaveWorkflow(leaveData.employeeName, leaveData.workflow);
    leavePage.addLeaveAttachment(leaveData.attachment);
    leavePage.editLeaveAttachment(leaveData.attachment, leaveData.attachmentUpdated);
    leavePage.deleteLeaveAttachment(leaveData.attachmentUpdated);
    leavePage.addLeaveNote(leaveData.note);
    leavePage.editLeaveNote(leaveData.note, leaveData.noteUpdated);
    leavePage.deleteLeaveNote(leaveData.noteUpdated);
    leavePage.addLeaveComment(leaveData.commentText);
    leavePage.editLeaveComment(leaveData.commentText, leaveData.commentTextUpdated);
    leavePage.deleteLeaveComment(leaveData.commentTextUpdated);
    leavePage.addLeaveNotification(leaveData.notification);
    leavePage.editLeaveNotification(leaveData.notification, leaveData.notificationUpdated);
    leavePage.deleteLeaveNotification(leaveData.notificationUpdated);
    leavePage.addLeaveEscalation(leaveData.escalation);
    leavePage.editLeaveEscalation(leaveData.escalation, leaveData.escalationUpdated);
    leavePage.deleteLeaveEscalation(leaveData.escalationUpdated);
    leavePage.addLeaveAction(leaveData.action);
    leavePage.editLeaveAction(leaveData.action, leaveData.actionUpdated);
    leavePage.deleteLeaveAction(leaveData.actionUpdated);
    leavePage.addLeaveApproval(leaveData.approval);
    leavePage.editLeaveApproval(leaveData.approval, leaveData.approvalUpdated);
    leavePage.deleteLeaveApproval(leaveData.approvalUpdated);
  });
});
