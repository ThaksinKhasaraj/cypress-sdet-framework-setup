const loginPage = require('../../support/pageObjects/LoginPage');
const menuPage = require('../../support/pageObjects/MenuPage');
const payrollPage = require('../../support/pageObjects/PayrollPage');
const payrollData = require('../../test-data/payroll.json');


describe('TC02: End-to-end payroll process', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const payrollAdmin = users.find(u => u.role === 'Payroll Admin');
      loginPage.login(payrollAdmin ? payrollAdmin.username : users[0].username, payrollAdmin ? payrollAdmin.password : users[0].password);
    });
  });

  after(() => {
    cy.logout();
  });

  it('should create payroll batch and add employee', () => {
    menuPage.openMenu('Payroll');
    payrollPage.addPayrollBatch(payrollData.batchName);
    payrollPage.addEmployeeToBatch(payrollData.batchName, payrollData.employeeName);
  });

  it('should calculate, review, and approve payroll', () => {
    payrollPage.calculatePayroll(payrollData.batchName);
    payrollPage.reviewPayroll(payrollData.batchName);
    payrollPage.approvePayroll(payrollData.batchName);
  });

  it('should process payslips', () => {
    payrollPage.generatePayslips(payrollData.batchName);
    payrollPage.downloadPayslips(payrollData.batchName);
    payrollPage.emailPayslips(payrollData.batchName);
  });

  it('should handle earnings and deductions', () => {
    payrollPage.addBonus(payrollData.batchName, payrollData.bonusAmount);
    payrollPage.addDeduction(payrollData.batchName, payrollData.deductionAmount);
    payrollPage.addOvertime(payrollData.batchName, payrollData.overtimeHours);
    payrollPage.addAllowance(payrollData.batchName, payrollData.allowanceAmount);
    payrollPage.addCommission(payrollData.batchName, payrollData.commissionAmount);
    payrollPage.addReimbursement(payrollData.batchName, payrollData.reimbursementAmount);
  });

  it('should manage loans', () => {
    payrollPage.addLoan(payrollData.batchName, payrollData.loanAmount);
    payrollPage.approveLoan(payrollData.batchName);
    payrollPage.deductLoan(payrollData.batchName);
  });

  it('should process tax', () => {
    payrollPage.addTax(payrollData.batchName, payrollData.taxAmount);
    payrollPage.calculateTax(payrollData.batchName);
    payrollPage.approveTax(payrollData.batchName);
    payrollPage.generateTaxReport(payrollData.batchName);
    payrollPage.downloadTaxReport(payrollData.batchName);
    payrollPage.emailTaxReport(payrollData.batchName);
  });

  it('should handle provident fund, insurance, and gratuity', () => {
    payrollPage.addProvidentFund(payrollData.batchName, payrollData.providentFundAmount);
    payrollPage.approveProvidentFund(payrollData.batchName);
    payrollPage.addInsurance(payrollData.batchName, payrollData.insuranceAmount);
    payrollPage.approveInsurance(payrollData.batchName);
    payrollPage.addGratuity(payrollData.batchName, payrollData.gratuityAmount);
    payrollPage.approveGratuity(payrollData.batchName);
  });

  it('should process leave encashment', () => {
    payrollPage.addLeaveEncashment(payrollData.batchName, payrollData.leaveEncashmentAmount);
    payrollPage.approveLeaveEncashment(payrollData.batchName);
  });

  it('should handle bank advice', () => {
    payrollPage.generateBankAdvice(payrollData.batchName);
    payrollPage.downloadBankAdvice(payrollData.batchName);
    payrollPage.emailBankAdvice(payrollData.batchName);
  });

  it('should generate and send payroll summary', () => {
    payrollPage.generatePayrollSummary(payrollData.batchName);
    payrollPage.downloadPayrollSummary(payrollData.batchName);
    payrollPage.emailPayrollSummary(payrollData.batchName);
  });

  it('should generate and send payroll register', () => {
    payrollPage.generatePayrollRegister(payrollData.batchName);
    payrollPage.downloadPayrollRegister(payrollData.batchName);
    payrollPage.emailPayrollRegister(payrollData.batchName);
  });

  it('should generate and send statutory report', () => {
    payrollPage.generateStatutoryReport(payrollData.batchName);
    payrollPage.downloadStatutoryReport(payrollData.batchName);
    payrollPage.emailStatutoryReport(payrollData.batchName);
  });

  it('should manage payroll batch', () => {
    payrollPage.lockPayroll(payrollData.batchName);
    payrollPage.unlockPayroll(payrollData.batchName);
    payrollPage.archivePayroll(payrollData.batchName);
    payrollPage.restorePayroll(payrollData.batchName);
    payrollPage.deletePayrollBatch(payrollData.batchName);
  });
});
