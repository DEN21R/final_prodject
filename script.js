const eventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",

    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto= ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const eventsContainer = document.getElementById("events-container");

const customSelect = document.querySelectorAll(".custom-select");

let filters = {
  type: "",
  distance: "",
  category: "",
};

customSelect.forEach((element) => {
  console.log(element.id);
  const selected = element.querySelector(".selected");
  const options = element.querySelectorAll(".option");

  selected.addEventListener("click", () => {
    element.classList.toggle("open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.textContent = option.textContent;
      selected.setAttribute("value", option.getAttribute("value"));

      element.classList.remove("open");

      if (element.id === "type-select") {
        filters.type = option.getAttribute("value");
      }

      if (element.id === "distance-select") {
        filters.distance = option.getAttribute("value");
      }

      if (element.id === "category-select") {
        filters.category = option.getAttribute("value");
      }

      filterEvents();
    });
  });
});

let renderEvents = (events) => {
  eventsContainer.innerHTML = "";
  events.forEach((event) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      
      <div class="eventimg">
        <img src="${event.image}" alt="">
      </div>

      <div class="card-content">

        <div class="block-info">
          <div class="block-calendar">
            <img src="./image/calendar.png" alt="">
            <span class="block-date">Wed, Mar 13 · 6:30 PM PDT</span>
          </div>
        </div>
        <h2 class="card-title">${event.title}</h2>
        <p class="card-text">${event.category}  ${event.distance + " km"}</p>
         <div class="card-type">
           <p>${event.type}</p>
        </div>

         <div class="card-attendees">
           <p>${event.attendees != null ? event.attendees : "0"} attendees</p>
        </div>

      </div>
                    
    `;
    eventsContainer.appendChild(card);
  });
};

const filterEvents = () => {
  let filtered = [];
  for (let i = 0; i < eventsStore.length; i++) {
    const event = eventsStore[i];

    if (filters.type !== "" && event.type !== filters.type) {
      continue;
    }

    if (
      filters.distance !== "" &&
      event.type === "offline" &&
      event.distance > Number(filters.distance)
    ) {
      continue;
    }

    if (filters.category !== "" && event.category !== filters.category) {
      continue;
    }

    filtered.push(event);
  }
  renderEvents(filtered);
};

renderEvents(eventsStore);
