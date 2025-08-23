import React, { useState, useEffect } from "react";
import { Event } from "../types";
import TimelineCard from "./TimelineCard";

interface TimelineProps {
  events: Event[];
  onCardClick: (event: Event) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onCardClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Keyboard navigation on dots (Left/Right arrow)
  function handleDotKeyDown(e: React.KeyboardEvent<HTMLDivElement>, index: number) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % events.length;
      setActiveIndex(nextIndex);
      document.getElementById(`timeline-dot-${nextIndex}`)?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + events.length) % events.length;
      setActiveIndex(prevIndex);
      document.getElementById(`timeline-dot-${prevIndex}`)?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardClick(events[index]);
    }
  }

  return (
    <section id="timeline-container">
      {/* Dates row */}
      <div className="date-container" role="list" aria-label="Timeline years">
        <div className="date">
          {events.map((e) => (
            <span key={e.year}>{e.year}</span>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="dots-container">
        <div className="dots-row" role="list" aria-label="Timeline navigation">
          {events.map((e, i) => (
            <div
              key={e.year}
              id={`timeline-dot-${i}`}
              className={`dots ${i === activeIndex ? "active" : ""}`}
              role="button"
              tabIndex={0}
              aria-current={i === activeIndex ? "true" : undefined}
              aria-label={`Select event from year ${e.year}`}
              onClick={() => {
                setActiveIndex(i);
                onCardClick(e);
              }}
              onKeyDown={(ev) => handleDotKeyDown(ev, i)}
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
