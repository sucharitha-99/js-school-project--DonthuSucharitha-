import React from "react";
import { Event } from "../types";

interface CardProps {
  event: Event;
  onClick: () => void;
}

const TimelineCard: React.FC<CardProps> = ({ event, onClick }) => {
  return (
    <div className="timeline-event" onClick={onClick}>
      <h3>{event.year} - {event.title}</h3>
      <img src={event.image} alt={event.title} />
      <p>{event.description.substring(0, 80)}...</p>
    </div>
  );
};

export default TimelineCard;
