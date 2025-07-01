const loginPage = require('../../support/pageObjects/LoginPage');
const MenuPage = require('../../support/pageObjects/MenuPage');
const menuPage = new MenuPage();
const recruitmentPage = require('../../support/pageObjects/RecruitmentPage');
const recruitmentData = require('../../test-data/recruitment.json');

describe('TC05: End-to-end recruitment process', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const recruiter = users.find(u => u.role === 'Recruiter');
      loginPage.login(recruiter ? recruiter.username : users[0].username, recruiter ? recruiter.password : users[0].password);
    });
  });

  after(() => {
    cy.logout();
  });

  it('should go to Recruitment menu', () => {
    menuPage.goToRecruitment();
  });

  it('should add vacancy', () => {
    recruitmentPage.addVacancy(recruitmentData.vacancy);
  });

  it('should add job description', () => {
    recruitmentPage.addJobDescription(recruitmentData.vacancy, recruitmentData.jobDescription);
  });

  it('should add hiring manager', () => {
    recruitmentPage.addHiringManager(recruitmentData.vacancy, recruitmentData.hiringManager);
  });

  it('should add interviewer', () => {
    recruitmentPage.addInterviewer(recruitmentData.vacancy, recruitmentData.interviewer);
  });

  it('should add candidate', () => {
    recruitmentPage.addCandidate(recruitmentData.candidate);
  });

  it('should schedule interview', () => {
    recruitmentPage.scheduleInterview(
      recruitmentData.candidate,
      recruitmentData.interviewDate,
      recruitmentData.interviewTime
    );
  });

  it('should send interview invite', () => {
    recruitmentPage.sendInterviewInvite(recruitmentData.candidate);
  });

  it('should add interview feedback', () => {
    recruitmentPage.addInterviewFeedback(recruitmentData.candidate, recruitmentData.feedback);
  });

  it('should shortlist candidate', () => {
    recruitmentPage.shortlistCandidate(recruitmentData.candidate);
  });

  it('should reject candidate', () => {
    recruitmentPage.rejectCandidate(recruitmentData.candidate);
  });

  it('should add offer', () => {
    recruitmentPage.addOffer(recruitmentData.candidate, recruitmentData.offerAmount);
  });

  it('should approve offer', () => {
    recruitmentPage.approveOffer(recruitmentData.candidate);
  });

  it('should reject offer', () => {
    recruitmentPage.rejectOffer(recruitmentData.candidate);
  });

  it('should send offer to candidate', () => {
    recruitmentPage.sendOfferToCandidate(recruitmentData.candidate);
  });

  it('should handle candidate offer response', () => {
    recruitmentPage.candidateAcceptsOffer(recruitmentData.candidate);
    recruitmentPage.candidateRejectsOffer(recruitmentData.candidate);
  });

  it('should add onboarding task', () => {
    recruitmentPage.addOnboardingTask(recruitmentData.candidate, recruitmentData.onboardingTask);
  });

  it('should complete onboarding task', () => {
    recruitmentPage.completeOnboardingTask(recruitmentData.candidate, recruitmentData.onboardingTask);
  });

  it('should add onboarding document', () => {
    recruitmentPage.addOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
  });

  it('should approve onboarding document', () => {
    recruitmentPage.approveOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
  });

  it('should reject onboarding document', () => {
    recruitmentPage.rejectOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
  });

  it('should add onboarding checklist', () => {
    recruitmentPage.addOnboardingChecklist(recruitmentData.candidate, recruitmentData.onboardingChecklist);
  });

  it('should complete onboarding checklist', () => {
    recruitmentPage.completeOnboardingChecklist(recruitmentData.candidate, recruitmentData.onboardingChecklist);
  });

  it('should add onboarding feedback', () => {
    recruitmentPage.addOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
  });

  it('should approve onboarding feedback', () => {
    recruitmentPage.approveOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
  });

  it('should reject onboarding feedback', () => {
    recruitmentPage.rejectOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
  });

  it('should add onboarding note', () => {
    recruitmentPage.addOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNote);
  });

  it('should edit onboarding note', () => {
    recruitmentPage.editOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNote, recruitmentData.onboardingNoteUpdated);
  });

  it('should delete onboarding note', () => {
    recruitmentPage.deleteOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNoteUpdated);
  });

  it('should add onboarding attachment', () => {
    recruitmentPage.addOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachment);
  });

  it('should edit onboarding attachment', () => {
    recruitmentPage.editOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachment, recruitmentData.onboardingAttachmentUpdated);
  });

  it('should delete onboarding attachment', () => {
    recruitmentPage.deleteOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachmentUpdated);
  });

  it('should add onboarding comment', () => {
    recruitmentPage.addOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingComment);
  });

  it('should edit onboarding comment', () => {
    recruitmentPage.editOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingComment, recruitmentData.onboardingCommentUpdated);
  });

  it('should delete onboarding comment', () => {
    recruitmentPage.deleteOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingCommentUpdated);
  });

  it('should add onboarding notification', () => {
    recruitmentPage.addOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotification);
  });

  it('should edit onboarding notification', () => {
    recruitmentPage.editOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotification, recruitmentData.onboardingNotificationUpdated);
  });

  it('should delete onboarding notification', () => {
    recruitmentPage.deleteOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotificationUpdated);
  });

  it('should add onboarding escalation', () => {
    recruitmentPage.addOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalation);
  });

  it('should edit onboarding escalation', () => {
    recruitmentPage.editOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalation, recruitmentData.onboardingEscalationUpdated);
  });

  it('should delete onboarding escalation', () => {
    recruitmentPage.deleteOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalationUpdated);
  });

  it('should add onboarding action', () => {
    recruitmentPage.addOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingAction);
  });

  it('should edit onboarding action', () => {
    recruitmentPage.editOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingAction, recruitmentData.onboardingActionUpdated);
  });

  it('should delete onboarding action', () => {
    recruitmentPage.deleteOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingActionUpdated);
  });

  it('should add onboarding approval', () => {
    recruitmentPage.addOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApproval);
  });

  it('should edit onboarding approval', () => {
    recruitmentPage.editOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApproval, recruitmentData.onboardingApprovalUpdated);
  });

  it('should delete onboarding approval', () => {
    recruitmentPage.deleteOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApprovalUpdated);
  });

  it('should complete recruitment process', () => {
    recruitmentPage.completeRecruitmentProcess(recruitmentData.candidate);
  });
});