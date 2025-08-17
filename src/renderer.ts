
import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.getElementById("timeline");
  const dotsRow = document.getElementById("dots-row");

  if (!timeline || !dotsRow) return;

  timeline.innerHTML = "";
  dotsRow.innerHTML = "";

  events.forEach((event, index) => {
    // Create card
    const card = document.createElement("article");
    card.className = "timeline-event";
    card.dataset.index = index.toString();
    card.innerHTML = `
      <h3>${event.year}: ${event.title}</h3>
      <img src="${event.imageURL}" alt="${event.title}" width="100%">
      <p>${event.description}</p>
    `;

    card.addEventListener("click", () => {
      openModal(event);
    });


    timeline.appendChild(card);


    // Create dot
    const dot = document.createElement("div");
    dot.className = "dots";
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index.toString();
    dotsRow.appendChild(dot);

   
  });

  
  setupDotNavigation();
}

function setupDotNavigation(): void {
  const dots = document.querySelectorAll(".dots");
  const cards = document.querySelectorAll(".timeline-event");

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = dot.getAttribute("data-index");
      if (!index) return;

      // Highlight active dot
      dots.forEach((d) => d.classList.remove("active"));
      dot.classList.add("active");

      // Show the corresponding card
      cards.forEach((c, i) => {
        (c as HTMLElement).style.display = i.toString() === index ? "block" : "none";
      });
 });
  });

  // Initially show only first card
  cards.forEach((c, i) => {
    (c as HTMLElement).style.display = i === 0 ? "block" : "none";
  });
}




 

    


    



    


