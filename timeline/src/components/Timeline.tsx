import React, { useState } from "react";
import { Event } from "../types";
import TimelineCard from "./TimelineCard";

interface TimelineProps {
  events: Event[];
  onCardClick: (event: Event) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onCardClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="timeline-container">
      {/* Dates row */}
      <div className="date-container">
        <div className="date">
          {events.map((e) => (
            <span key={e.year}>{e.year}</span>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="dots-container">
        <div className="dots-row">
          {events.map((e, i) => (
            <div
              key={e.year}
              className={`dots ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Cards */}
      <div id="timeline">
        {events.map((e, i) =>
          i === activeIndex ? <TimelineCard key={e.year} event={e} onClick={() => onCardClick(e)} /> : null
        )}
      </div>
    </section>
  );
};

export default Timeline;
