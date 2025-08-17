
import { fetchEvents } from "./fetcher.js";
import { renderTimeline} from "./renderer.js";
import { initModal} from "./modal.js";
import { EventData } from "./types.js";

async function initApp() {
  try {
    const events: EventData[] = await fetchEvents();
    renderTimeline(events);
    initModal();
     
  } catch (error) {
    console.error("Error initializing app:", error);
  }
}

document.addEventListener("DOMContentLoaded", initApp);