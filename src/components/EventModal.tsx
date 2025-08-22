import React, { useEffect, useRef } from "react";
import { Event } from "../types";

interface ModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<ModalProps> = ({ event, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Trap focus and handle Escape key
  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    function trapFocus(e: KeyboardEvent) {
      const focusableElementsString = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(focusableElementsString);
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    }

    document.addEventListener("keydown", trapFocus);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", trapFocus);
      previouslyFocusedElement.current?.focus(); // Return focus to previously focused element
    };
  }, [onClose]);

  return (
    <div
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="active"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      ref={modalRef}
      tabIndex={-1}
      style={{ outline: "none" }}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
          ref={closeButtonRef}
        >
          &times;
        </button>
        <h2 id="modal-title">{event.year} - {event.title}</h2>
        <img src={event.image} alt={event.title} />
        <p>{event.description}</p>
        {event.category && <span>{event.category}</span>}
      </div>
    </div>
  );
};

export default EventModal;
