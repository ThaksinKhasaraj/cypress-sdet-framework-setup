class RecruitmentPage {
  addVacancy(vacancy) {}
  addJobDescription(vacancy, jobDescription) {}
  addHiringManager(vacancy, hiringManager) {}
  addInterviewer(vacancy, interviewer) {}
  addCandidate(candidate) {}
  scheduleInterview(candidate, interviewDate, interviewTime) {}
  sendInterviewInvite(candidate) {}
  addInterviewFeedback(candidate, feedback) {}
  shortlistCandidate(candidate) {}
  rejectCandidate(candidate) {}
  addOffer(candidate, offerAmount) {}
  approveOffer(candidate) {}
  rejectOffer(candidate) {}
  sendOfferToCandidate(candidate) {}
  candidateAcceptsOffer(candidate) {}
  candidateRejectsOffer(candidate) {}
  addOnboardingTask(candidate, onboardingTask) {}
  completeOnboardingTask(candidate, onboardingTask) {}
  addOnboardingDocument(candidate, onboardingDocument) {}
  approveOnboardingDocument(candidate, onboardingDocument) {}
  rejectOnboardingDocument(candidate, onboardingDocument) {}
  addOnboardingChecklist(candidate, onboardingChecklist) {}
  completeOnboardingChecklist(candidate, onboardingChecklist) {}
  addOnboardingFeedback(candidate, onboardingFeedback) {}
  approveOnboardingFeedback(candidate, onboardingFeedback) {}
  rejectOnboardingFeedback(candidate, onboardingFeedback) {}
  addOnboardingNote(candidate, onboardingNote) {}
  editOnboardingNote(candidate, onboardingNote, onboardingNoteUpdated) {}
  deleteOnboardingNote(candidate, onboardingNoteUpdated) {}
  addOnboardingAttachment(candidate, onboardingAttachment) {}
  editOnboardingAttachment(candidate, onboardingAttachment, onboardingAttachmentUpdated) {}
  deleteOnboardingAttachment(candidate, onboardingAttachmentUpdated) {}
  addOnboardingComment(candidate, onboardingComment) {}
  editOnboardingComment(candidate, onboardingComment, onboardingCommentUpdated) {}
  deleteOnboardingComment(candidate, onboardingCommentUpdated) {}
  addOnboardingNotification(candidate, onboardingNotification) {}
  editOnboardingNotification(candidate, onboardingNotification, onboardingNotificationUpdated) {}
  deleteOnboardingNotification(candidate, onboardingNotificationUpdated) {}
  addOnboardingEscalation(candidate, onboardingEscalation) {}
  editOnboardingEscalation(candidate, onboardingEscalation, onboardingEscalationUpdated) {}
  deleteOnboardingEscalation(candidate, onboardingEscalationUpdated) {}
  addOnboardingAction(candidate, onboardingAction) {}
  editOnboardingAction(candidate, onboardingAction, onboardingActionUpdated) {}
  deleteOnboardingAction(candidate, onboardingActionUpdated) {}
  addOnboardingApproval(candidate, onboardingApproval) {}
  editOnboardingApproval(candidate, onboardingApproval, onboardingApprovalUpdated) {}
  deleteOnboardingApproval(candidate, onboardingApprovalUpdated) {}
  completeRecruitmentProcess(candidate) {}
}

module.exports = new RecruitmentPage();
