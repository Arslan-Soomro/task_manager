let taskCards = [];

function genereateCardHtml({ status, title, description, date, assignee }) {
  const html = `
      <!-- Task Card 1 Header -->
      <div class="d-flex justify-content-between align-items-center">
        <div class="px-3 py-0 bg-subtle-red rounded-pill">
          <span class="text-red">Todo</span>
        </div>
        <div class="d-flex align-items-center gap-3">
          <button type="button" class="text-primary">
            <!-- Edit Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </button>
          <button type="button" class="text-red">
            <!-- Trash Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-trash2-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- Task Card 1 Body -->
      <div class="mt-2 border-bottom pb-2">
        <p class="fs-5 fw-bold">${title}</p>
        <p class="text-gray-600">
            ${description}
        </p>
      </div>
      <!-- Task Card 1 Footer -->
      <div class="d-flex mt-2 justify-content-between align-items-center">
        <div class="d-flex align-items-center gap-2 text-gray-400">
          <!-- Calendar Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-event"
            viewBox="0 0 16 16"
          >
            <path
              d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
            />
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
            />
          </svg>
          <span>${date}</span>
        </div>
        <p class="text-orange">${assignee}</p>
      </div>
    `;

    return html;
}

function addCardElement({ status, title, description, date, assignee }) {

  const container = document.querySelector("#cards_container");

  if (container) {
    console.log("[createCardElement] Cards Container Not Found in DOM.");
    return;
  }

  const card = document.createElement("div");
  card.classList.add("d-flex flex-column border rounded-2 p-4 shadow");

  card.innerHTML = genereateCardHtml({
    status,
    title,
    description,
    date,
    assignee,
  });

  container.appendChild(card);
  taskCards = [{
    status,
    title,
    description,
    date,
    assignee,
  }, ...taskCards];
}
