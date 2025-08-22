import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import { Event } from "./types";

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetch("./data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  if (!events.length) return <p>Loading events...</p>;

  return (
    <div>
      <Header/>
      <Timeline events={events} onCardClick={setSelectedEvent} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default App;
