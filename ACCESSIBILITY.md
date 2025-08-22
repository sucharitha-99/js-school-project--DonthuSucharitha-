# Accessibility Documentation for Timeline App

## Modal Accessibility
- The modal uses `role="dialog"` and includes `aria-modal="true"` to inform assistive technologies that it is a modal dialog.
- The modal is labeled with `aria-labelledby` tied to the modal title (`<h2 id="modal-title">`).
- Focus is trapped inside the modal while it is open, preventing keyboard users from navigating outside the modal content.
- The modal can be closed by pressing the Escape key, clicking the close button, or clicking outside the modal content.
- Keyboard focus is returned to the timeline marker or card that opened the modal after it is closed.
- The close button has an `aria-label="Close modal"` and is keyboard focusable.

## Timeline Navigation Accessibility
- Timeline navigation dots are implemented as `div` elements with `role="button"`, are keyboard focusable (`tabIndex=0`), and manage keyboard events.
- The active timeline dot has `aria-current="true"` to indicate the currently selected timeline event.
- Users can navigate between timeline dots using Left and Right arrow keys.
- Pressing Enter or Space while a dot is focused activates the corresponding timeline event/modal.
- Timeline dots provide visible focus outlines for clarity.

## Timeline Cards Accessibility
- Timeline cards are keyboard focusable (`tabIndex=0`) and use `role="button"` to indicate interactivity.
- Cards respond to keyboard events, allowing users to open event details via Enter or Space keys.
- Cards have accessible names that include the event year and title for screen reader users.

## Visual and Color Contrast
- Text and interactive elements meet WCAG AA requirements with a minimum color contrast ratio of 4.5:1.
- Visual focus states include borders or outlines in addition to color changes, ensuring visible focus cues for all users.
- No use of color alone to denote active or focused states; additional shapes and labels are used.

## WCAG Compliance and Semantic HTML
- Semantic HTML elements and ARIA roles are used appropriately, including `role="dialog"`, `role="button"`, `aria-modal`, and `aria-current`.
- The modal background overlay is marked with `aria-hidden="true"` to avoid confusing screen reader users.
- Focus management ensures a logical tab order and prevents keyboard traps.

## Testing and Validation
- Manual keyboard navigation tested, confirming tab order, focus trapping, and Escape key handling.
- Screen reader tested with NVDA and VoiceOver to verify announcements and navigation.
- Color contrast validated using online contrast checkers and browser-based accessibility tools.
- Focus return tested to ensure the triggering timeline marker or card regains focus after modal closes.

---

This document summarizes the key accessibility features and best practices implemented in the timeline app to ensure an inclusive experience for all users.

