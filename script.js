// Elements

const timeline = document.getElementById('timeline');
const dotsRow = document.getElementById("dots-row");

const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const modalYear = document.getElementById('modal-year');
 const modalCategory = document.getElementById("modal-category");


// Fetch events
fetch('./data/events.json')
  .then(response => response.json())
  .then(events => {
    
// Render dots for each event
  events.forEach((event, index) => {
    

    const dot = document.createElement("div");
    dot.classList.add("dots");
    if (index === 0) dot.classList.add("active");
    // dot.title = event.year;

    dot.addEventListener("click", () => {
      cards.forEach(card => card.style.display = "none");

      cards[index].style.display = "block";
       
      

      Array.from(dotsRow.children).forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });

    dotsRow.appendChild(dot);
     });


// Render events into timeline

  const cards= events.map((event, index) => {
    const card = document.createElement('div');
    card.classList.add('timeline-event');
    // card.dataset.index = index;
    card.setAttribute("data-year", event.year);

    card.innerHTML = `
      <h3>${event.year} - ${event.title}</h3>
      <img src="${event.imageURL}" alt="${event.title}">
      <p>${event.description.substring(0, 80)}...</p>
    `;
  timeline.appendChild(card);

  card.style.display = index === 0 ? "block" : "none";

    // Open modal on click
    card.addEventListener('click', () => openModal(event));

     return card;
  });
})
  .catch(err => console.error('Error loading events:', err));


// Open modal
function openModal(event) {
  modalTitle.textContent = `${event.year} - ${event.title}`;
  modalImg.src = event.imageURL;
  modalImg.alt = event.title;
  modalDesc.textContent = event.description;
  modalYear.textContent = event.year;
  modal.style.display = "flex";

//   modal.classList.add('active');
}


modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
