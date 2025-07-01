class OrgPage {
  addLocation(location) {}
  addDepartment(department) {}
  addJobTitle(jobTitle) {}
  addGrade(grade) {}
  addCostCenter(costCenter) {}
  addBusinessUnit(businessUnit) {}
  addDivision(division) {}
  addSection(section) {}
  addReportingMethod(reportingMethod) {}
  addWorkShift(workShift) {}
  addHoliday(holiday) {}
  addCalendar(calendar) {}
  addWorkflow(workflow) {}
  addWorkflowStep(workflowStep) {}
  addWorkflowApprover(workflowApprover) {}
  addWorkflowNotification(workflowNotification) {}
  addWorkflowEscalation(workflowEscalation) {}
  addWorkflowCondition(workflowCondition) {}
  addWorkflowAction(workflowAction) {}
  activateWorkflow(workflow) {}
  deactivateWorkflow(workflow) {}
  editWorkflow(workflow, workflowUpdated) {}
  deleteWorkflow(workflowUpdated) {}
  assignWorkflowToProcess(workflow, process) {}
  testWorkflow(workflow) {}
  approveWorkflowRequest(workflow) {}
  rejectWorkflowRequest(workflow) {}
  cancelWorkflowRequest(workflow) {}
  addOrganizationChart(orgChart) {}
  editOrganizationChart(orgChart, orgChartUpdated) {}
  deleteOrganizationChart(orgChartUpdated) {}
  addReportingLine(reportingLine) {}
  editReportingLine(reportingLine, reportingLineUpdated) {}
  deleteReportingLine(reportingLineUpdated) {}
  addPosition(position) {}
  editPosition(position, positionUpdated) {}
  deletePosition(positionUpdated) {}
  assignEmployeeToPosition(positionUpdated, employeeName) {}
  removeEmployeeFromPosition(positionUpdated, employeeName) {}
  addPositionHistory(positionHistory) {}
  editPositionHistory(positionHistory, positionHistoryUpdated) {}
  deletePositionHistory(positionHistoryUpdated) {}
  addPositionAttachment(positionAttachment) {}
  editPositionAttachment(positionAttachment, positionAttachmentUpdated) {}
  deletePositionAttachment(positionAttachmentUpdated) {}
  addPositionNote(positionNote) {}
  editPositionNote(positionNote, positionNoteUpdated) {}
  deletePositionNote(positionNoteUpdated) {}
}

module.exports = new OrgPage();
