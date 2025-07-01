const loginPage = require('../support/pageObjects/LoginPage');
const menuPage = require('../support/pageObjects/MenuPage');
const payrollPage = require('../support/pageObjects/PayrollPage');
const payrollData = require('../../test-data/payroll.json');

describe('TC27: End-to-end payroll process', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const payrollAdmin = users.find(u => u.role === 'Payroll Admin');
      loginPage.login(payrollAdmin ? payrollAdmin.username : users[0].username, payrollAdmin ? payrollAdmin.password : users[0].password);
    });
  });

  it('should complete all payroll process steps', () => {
    menuPage.openMenu('Payroll');
    payrollPage.addPayrollBatch(payrollData.batchName);
    payrollPage.addEmployeeToBatch(payrollData.batchName, payrollData.employeeName);
    payrollPage.calculatePayroll(payrollData.batchName);
    payrollPage.reviewPayroll(payrollData.batchName);
    payrollPage.approvePayroll(payrollData.batchName);
    payrollPage.generatePayslips(payrollData.batchName);
    payrollPage.downloadPayslips(payrollData.batchName);
    payrollPage.emailPayslips(payrollData.batchName);
    payrollPage.addBonus(payrollData.batchName, payrollData.bonusAmount);
    payrollPage.addDeduction(payrollData.batchName, payrollData.deductionAmount);
    payrollPage.addOvertime(payrollData.batchName, payrollData.overtimeHours);
    payrollPage.addAllowance(payrollData.batchName, payrollData.allowanceAmount);
    payrollPage.addCommission(payrollData.batchName, payrollData.commissionAmount);
    payrollPage.addReimbursement(payrollData.batchName, payrollData.reimbursementAmount);
    payrollPage.addLoan(payrollData.batchName, payrollData.loanAmount);
    payrollPage.approveLoan(payrollData.batchName);
    payrollPage.deductLoan(payrollData.batchName);
    payrollPage.addTax(payrollData.batchName, payrollData.taxAmount);
    payrollPage.calculateTax(payrollData.batchName);
    payrollPage.approveTax(payrollData.batchName);
    payrollPage.generateTaxReport(payrollData.batchName);
    payrollPage.downloadTaxReport(payrollData.batchName);
    payrollPage.emailTaxReport(payrollData.batchName);
    payrollPage.addProvidentFund(payrollData.batchName, payrollData.providentFundAmount);
    payrollPage.approveProvidentFund(payrollData.batchName);
    payrollPage.addInsurance(payrollData.batchName, payrollData.insuranceAmount);
    payrollPage.approveInsurance(payrollData.batchName);
    payrollPage.addGratuity(payrollData.batchName, payrollData.gratuityAmount);
    payrollPage.approveGratuity(payrollData.batchName);
    payrollPage.addLeaveEncashment(payrollData.batchName, payrollData.leaveEncashmentAmount);
    payrollPage.approveLeaveEncashment(payrollData.batchName);
    payrollPage.generateBankAdvice(payrollData.batchName);
    payrollPage.downloadBankAdvice(payrollData.batchName);
    payrollPage.emailBankAdvice(payrollData.batchName);
    payrollPage.generatePayrollSummary(payrollData.batchName);
    payrollPage.downloadPayrollSummary(payrollData.batchName);
    payrollPage.emailPayrollSummary(payrollData.batchName);
    payrollPage.generatePayrollRegister(payrollData.batchName);
    payrollPage.downloadPayrollRegister(payrollData.batchName);
    payrollPage.emailPayrollRegister(payrollData.batchName);
    payrollPage.generateStatutoryReport(payrollData.batchName);
    payrollPage.downloadStatutoryReport(payrollData.batchName);
    payrollPage.emailStatutoryReport(payrollData.batchName);
    payrollPage.lockPayroll(payrollData.batchName);
    payrollPage.unlockPayroll(payrollData.batchName);
    payrollPage.archivePayroll(payrollData.batchName);
    payrollPage.restorePayroll(payrollData.batchName);
    payrollPage.deletePayrollBatch(payrollData.batchName);
    cy.logout();
  });
});
