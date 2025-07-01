class PayrollPage {

  addPayrollBatch(batchName) {}
  addEmployeeToBatch(batchName, employeeName) {}
  calculatePayroll(batchName) {}
  reviewPayroll(batchName) {}
  approvePayroll(batchName) {}
  generatePayslips(batchName) {}
  downloadPayslips(batchName) {}
  emailPayslips(batchName) {}
  addBonus(batchName, bonusAmount) {}
  addDeduction(batchName, deductionAmount) {}
  addOvertime(batchName, overtimeHours) {}
  addAllowance(batchName, allowanceAmount) {}
  addCommission(batchName, commissionAmount) {}
  addReimbursement(batchName, reimbursementAmount) {}
  addLoan(batchName, loanAmount) {}
  approveLoan(batchName) {}
  deductLoan(batchName) {}
  addTax(batchName, taxAmount) {}
  calculateTax(batchName) {}
  approveTax(batchName) {}
  generateTaxReport(batchName) {}
  downloadTaxReport(batchName) {}
  emailTaxReport(batchName) {}
  addProvidentFund(batchName, providentFundAmount) {}
  approveProvidentFund(batchName) {}
  addInsurance(batchName, insuranceAmount) {}
  approveInsurance(batchName) {}
  addGratuity(batchName, gratuityAmount) {}
  approveGratuity(batchName) {}
  addLeaveEncashment(batchName, leaveEncashmentAmount) {}
  approveLeaveEncashment(batchName) {}
  generateBankAdvice(batchName) {}
  downloadBankAdvice(batchName) {}
  emailBankAdvice(batchName) {}
  generatePayrollSummary(batchName) {}
  downloadPayrollSummary(batchName) {}
  emailPayrollSummary(batchName) {}
  generatePayrollRegister(batchName) {}
  downloadPayrollRegister(batchName) {}
  emailPayrollRegister(batchName) {}
  generateStatutoryReport(batchName) {}
  downloadStatutoryReport(batchName) {}
  emailStatutoryReport(batchName) {}
  lockPayroll(batchName) {}
  unlockPayroll(batchName) {}
  archivePayroll(batchName) {}
  restorePayroll(batchName) {}
  deletePayrollBatch(batchName) {}
}

module.exports = new PayrollPage();
