const loginPage = require('../support/pageObjects/LoginPage');
const menuPage = require('../support/pageObjects/MenuPage');
const recruitmentPage = require('../support/pageObjects/RecruitmentPage');
const recruitmentData = require('../../test-data/recruitment.json');

describe('TC30: End-to-end recruitment process', () => {
  before(() => {
    cy.fixture('users').then(users => {
      const recruiter = users.find(u => u.role === 'Recruiter');
      loginPage.login(recruiter ? recruiter.username : users[0].username, recruiter ? recruiter.password : users[0].password);
    });
  });

  it('should complete all recruitment process steps', () => {
    menuPage.goToRecruitment();
    recruitmentPage.addVacancy(recruitmentData.vacancy);
    recruitmentPage.addJobDescription(recruitmentData.vacancy, recruitmentData.jobDescription);
    recruitmentPage.addHiringManager(recruitmentData.vacancy, recruitmentData.hiringManager);
    recruitmentPage.addInterviewer(recruitmentData.vacancy, recruitmentData.interviewer);
    recruitmentPage.addCandidate(recruitmentData.candidate);
    recruitmentPage.scheduleInterview(
      recruitmentData.candidate,
      recruitmentData.interviewDate,
      recruitmentData.interviewTime
    );
    recruitmentPage.sendInterviewInvite(recruitmentData.candidate);
    recruitmentPage.addInterviewFeedback(recruitmentData.candidate, recruitmentData.feedback);
    recruitmentPage.shortlistCandidate(recruitmentData.candidate);
    recruitmentPage.rejectCandidate(recruitmentData.candidate);
    recruitmentPage.addOffer(recruitmentData.candidate, recruitmentData.offerAmount);
    recruitmentPage.approveOffer(recruitmentData.candidate);
    recruitmentPage.rejectOffer(recruitmentData.candidate);
    recruitmentPage.sendOfferToCandidate(recruitmentData.candidate);
    recruitmentPage.candidateAcceptsOffer(recruitmentData.candidate);
    recruitmentPage.candidateRejectsOffer(recruitmentData.candidate);
    recruitmentPage.addOnboardingTask(recruitmentData.candidate, recruitmentData.onboardingTask);
    recruitmentPage.completeOnboardingTask(recruitmentData.candidate, recruitmentData.onboardingTask);
    recruitmentPage.addOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
    recruitmentPage.approveOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
    recruitmentPage.rejectOnboardingDocument(recruitmentData.candidate, recruitmentData.onboardingDocument);
    recruitmentPage.addOnboardingChecklist(recruitmentData.candidate, recruitmentData.onboardingChecklist);
    recruitmentPage.completeOnboardingChecklist(recruitmentData.candidate, recruitmentData.onboardingChecklist);
    recruitmentPage.addOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
    recruitmentPage.approveOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
    recruitmentPage.rejectOnboardingFeedback(recruitmentData.candidate, recruitmentData.onboardingFeedback);
    recruitmentPage.addOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNote);
    recruitmentPage.editOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNote, recruitmentData.onboardingNoteUpdated);
    recruitmentPage.deleteOnboardingNote(recruitmentData.candidate, recruitmentData.onboardingNoteUpdated);
    recruitmentPage.addOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachment);
    recruitmentPage.editOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachment, recruitmentData.onboardingAttachmentUpdated);
    recruitmentPage.deleteOnboardingAttachment(recruitmentData.candidate, recruitmentData.onboardingAttachmentUpdated);
    recruitmentPage.addOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingComment);
    recruitmentPage.editOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingComment, recruitmentData.onboardingCommentUpdated);
    recruitmentPage.deleteOnboardingComment(recruitmentData.candidate, recruitmentData.onboardingCommentUpdated);
    recruitmentPage.addOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotification);
    recruitmentPage.editOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotification, recruitmentData.onboardingNotificationUpdated);
    recruitmentPage.deleteOnboardingNotification(recruitmentData.candidate, recruitmentData.onboardingNotificationUpdated);
    recruitmentPage.addOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalation);
    recruitmentPage.editOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalation, recruitmentData.onboardingEscalationUpdated);
    recruitmentPage.deleteOnboardingEscalation(recruitmentData.candidate, recruitmentData.onboardingEscalationUpdated);
    recruitmentPage.addOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingAction);
    recruitmentPage.editOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingAction, recruitmentData.onboardingActionUpdated);
    recruitmentPage.deleteOnboardingAction(recruitmentData.candidate, recruitmentData.onboardingActionUpdated);
    recruitmentPage.addOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApproval);
    recruitmentPage.editOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApproval, recruitmentData.onboardingApprovalUpdated);
    recruitmentPage.deleteOnboardingApproval(recruitmentData.candidate, recruitmentData.onboardingApprovalUpdated);
    recruitmentPage.completeRecruitmentProcess(recruitmentData.candidate);
    cy.logout();
  });
});