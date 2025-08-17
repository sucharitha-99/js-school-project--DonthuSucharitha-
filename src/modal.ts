
import { EventData } from "./types.js";


export function openModal( event: EventData): void {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  if (!modal || !modalBody ) return;

      modalBody.innerHTML = `
    <h2>${event.year} - ${event.title}</h2>
    <img src="${event.imageURL}" alt="${event.title}" class="modal-img">
    <p>${event.description}</p>
  `;

  modal.style.display = "flex";
}
  
export function initModal(): void {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("modal-close");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

