import React from "react";
import { Event } from "../types";

interface CardProps {
  event: Event;
  onClick: () => void;
}

const TimelineCard: React.FC<CardProps> = ({ event, onClick }) => {
  // Make the card focusable and keyboard operable
  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  }

  return (
    <div
      className="timeline-event"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`${event.year} - ${event.title}. Click for details`}
      style={{ cursor: "pointer" }}
    >
      <h3>{event.year} - {event.title}</h3>
      <img src={event.image} alt={event.title} />
      <p>{event.description.substring(0, 80)}...</p>
    </div>
  );
};

export default TimelineCard;
