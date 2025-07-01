class LeavePage {
  applyLeave(type, startDate, endDate, comment) {}
  editLeaveRequest(updatedComment) {}
  cancelLeaveRequest() {}
  reapplyLeave(type, startDate, endDate, comment) {}
  approveLeaveAsManager(employeeName) {}
  rejectLeaveAsManager(employeeName) {}
  cancelLeaveAsManager(employeeName) {}
  addLeaveType(leaveType) {}
  editLeaveType(leaveType, leaveTypeUpdated) {}
  deleteLeaveType(leaveTypeUpdated) {}
  assignLeaveEntitlement(employeeName, entitlement) {}
  editLeaveEntitlement(employeeName, entitlementUpdated) {}
  deleteLeaveEntitlement(employeeName) {}
  addLeavePeriod(leavePeriod) {}
  editLeavePeriod(leavePeriod, leavePeriodUpdated) {}
  deleteLeavePeriod(leavePeriodUpdated) {}
  addLeaveHoliday(holiday) {}
  editLeaveHoliday(holiday, holidayUpdated) {}
  deleteLeaveHoliday(holidayUpdated) {}
  addLeaveCalendar(calendar) {}
  editLeaveCalendar(calendar, calendarUpdated) {}
  deleteLeaveCalendar(calendarUpdated) {}
  addLeaveWorkflow(workflow) {}
  editLeaveWorkflow(workflow, workflowUpdated) {}
  deleteLeaveWorkflow(workflowUpdated) {}
  assignLeaveWorkflow(employeeName, workflow) {}
  approveLeaveWorkflow(employeeName, workflow) {}
  rejectLeaveWorkflow(employeeName, workflow) {}
  cancelLeaveWorkflow(employeeName, workflow) {}
  addLeaveAttachment(attachment) {}
  editLeaveAttachment(attachment, attachmentUpdated) {}
  deleteLeaveAttachment(attachmentUpdated) {}
  addLeaveNote(note) {}
  editLeaveNote(note, noteUpdated) {}
  deleteLeaveNote(noteUpdated) {}
  addLeaveComment(commentText) {}
  editLeaveComment(commentText, commentTextUpdated) {}
  deleteLeaveComment(commentTextUpdated) {}
  addLeaveNotification(notification) {}
  editLeaveNotification(notification, notificationUpdated) {}
  deleteLeaveNotification(notificationUpdated) {}
  addLeaveEscalation(escalation) {}
  editLeaveEscalation(escalation, escalationUpdated) {}
  deleteLeaveEscalation(escalationUpdated) {}
  addLeaveAction(action) {}
  editLeaveAction(action, actionUpdated) {}
  deleteLeaveAction(actionUpdated) {}
  addLeaveApproval(approval) {}
  editLeaveApproval(approval, approvalUpdated) {}
  deleteLeaveApproval(approvalUpdated) {}
}

module.exports = new LeavePage();
