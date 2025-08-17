
import { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
  const res = await fetch("events.json");
  if (!res.ok) throw new Error("Failed to load events.json");
  return res.json();
}
