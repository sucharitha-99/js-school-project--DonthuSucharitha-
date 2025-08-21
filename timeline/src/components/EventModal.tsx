import React from "react";
import { Event } from "../types";

interface ModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<ModalProps> = ({ event, onClose }) => {
  return (
    <div
      id="modal"
      className="active"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{event.year} - {event.title}</h2>
        <img src={event.image} alt={event.title} />
        <p>{event.description}</p>
        {event.category && <span>{event.category}</span>}
      </div>
    </div>
  );
};

export default EventModal;
