/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
// Show image file paths
const FRESH_PRINCE_URL =
  "assets/Fresh-prince-of-bel-air.jpeg";
const CURB_POSTER_URL =
  "assets/Curb-Your-Enthusiasm.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "assets/East-Los-High.jpg";
const BREAKING_BAD_URL =
  "assets/Breaking-Bad.jpg";
const STRANGER_THINGS_URL =
  "assets/Stranger-Things.webp";
const THE_OFFICE_URL =
  "assets/TheOfiice.jpg";
const GAME_OF_THRONES_URL =
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Game_of_Thrones_title_card.jpg/250px-Game_of_Thrones_title_card.jpg";
const THE_MANDALORIAN_URL =
  "assets/The-Mandalorian.jpg";
const FRIENDS_URL =
  "assets/Friends.jpg";
const BLACK_MIRROR_URL =
  "assets/Black-Mirror.jpeg";
const BETTER_CALL_SAUL_URL =
  "assets/Bettercallsaul.jpeg";
const MERLIN_URL =
  "assets/Merlin.jpg";
const PARKS_AND_RECREATION_URL =
  "assets/Parks-and-Recreation.jpeg";
const BROOKLYN_NINE_NINE_URL =
  "assets/Brooklyn-Nine-Nine.jpeg";
const THE_CROWN_URL =
  "assets/The-Crown.jpeg";
const SUCCESSION_URL =
  "assets/Succession.jpeg";
const WESTWORLD_URL =
  "assets/Westworld.jpeg";
const DOCTOR_WHO_URL =
  "assets/Doctor-Who.jpg";
const THE_WITCHER_URL =
  "assets/The-Witcher.jpg";
const SHADOW_AND_BONE_URL =
  "assets/Shadow-And-Bone.jpg";

// Main TV show data
let shows = [
  {
    id: "fresh-prince-of-bel-air",
    title: "Fresh Prince of Bel Air",
    image: FRESH_PRINCE_URL,
    genre: "Comedy",
    rating: 8.7,
    setting: "Bel-Air",
    about:
      "A street-smart teenager from West Philadelphia moves in with his wealthy relatives in Bel-Air, where his laid-back personality constantly clashes with high-society expectations."
  },
  {
    id: "curb-your-enthusiasm",
    title: "Curb Your Enthusiasm",
    image: CURB_POSTER_URL,
    genre: "Comedy",
    rating: 8.9,
    setting: "Los Angeles",
    about:
      "Larry David plays an exaggerated version of himself, stumbling through awkward social situations and turning tiny everyday problems into hilarious disasters."
  },
  {
    id: "east-los-high",
    title: "East Los High",
    image: EAST_LOS_HIGH_POSTER_URL,
    genre: "Drama",
    rating: 7.5,
    setting: "East Los Angeles",
    about:
      "This teen drama follows students in East Los Angeles as they deal with identity, family pressure, friendships, romance, and the realities of growing up."
  },
  {
    id: "breaking-bad",
    title: "Breaking Bad",
    image: BREAKING_BAD_URL,
    genre: "Drama",
    rating: 9.5,
    setting: "Albuquerque",
    about:
      "A struggling chemistry teacher turns to making meth after a cancer diagnosis, and his attempt to secure his family’s future spirals into a dangerous criminal life."
  },
  {
    id: "stranger-things",
    title: "Stranger Things",
    image: STRANGER_THINGS_URL,
    genre: "Sci-Fi",
    rating: 8.8,
    setting: "Hawkins",
    about:
      "In a small Indiana town, a missing boy, secret experiments, and supernatural forces pull a group of kids into a mystery far bigger than they imagined."
  },
  {
    id: "the-office",
    title: "The Office",
    image: THE_OFFICE_URL,
    genre: "Comedy",
    rating: 9.0,
    setting: "Scranton",
    about:
      "Shot like a workplace documentary, the series follows the employees of Dunder Mifflin as they navigate absurd office politics, friendships, and romance."
  },
  {
    id: "game-of-thrones",
    title: "Game of Thrones",
    image: GAME_OF_THRONES_URL,
    genre: "Fantasy",
    rating: 9.2,
    setting: "Westeros",
    about:
      "Noble families battle for power across a brutal fantasy world where political ambition, ancient threats, and shifting alliances shape the fate of kingdoms."
  },
  {
    id: "the-mandalorian",
    title: "The Mandalorian",
    image: THE_MANDALORIAN_URL,
    genre: "Sci-Fi",
    rating: 8.6,
    setting: "Outer Rim",
    about:
      "A lone bounty hunter travels through the outer reaches of the galaxy, taking dangerous jobs while protecting a mysterious child with extraordinary powers."
  },
  {
    id: "friends",
    title: "Friends",
    image: FRIENDS_URL,
    genre: "Comedy",
    rating: 8.9,
    setting: "New York City",
    about:
      "Six close friends in New York support each other through love, work, and adulthood, turning ordinary life moments into iconic comedy."
  },
  {
    id: "black-mirror",
    title: "Black Mirror",
    image: BLACK_MIRROR_URL,
    genre: "Sci-Fi",
    rating: 8.7,
    setting: "Near Future",
    about:
      "Each standalone episode explores how technology can distort human relationships, privacy, morality, and power in unsettling near-future scenarios."
  },
  {
    id: "better-call-saul",
    title: "Better Call Saul",
    image: BETTER_CALL_SAUL_URL,
    genre: "Drama",
    rating: 9.0,
    setting: "Albuquerque",
    about:
      "Before becoming Saul Goodman, Jimmy McGill struggles to build a legal career, making choices that slowly transform him into the morally slippery lawyer fans know."
  },
  {
    id: "merlin",
    title: "Merlin",
    image: MERLIN_URL,
    genre: "Fantasy",
    rating: 7.9,
    setting: "Camelot",
    about:
      "A young Merlin arrives in Camelot and secretly uses his magic to protect Prince Arthur, forging the early bond behind a legendary story."
  },
  {
    id: "parks-and-recreation",
    title: "Parks and Recreation",
    image: PARKS_AND_RECREATION_URL,
    genre: "Comedy",
    rating: 8.6,
    setting: "Pawnee",
    about:
      "An endlessly optimistic public official tries to improve her Indiana town while managing eccentric coworkers, strange local politics, and a long list of community headaches."
  },
  {
    id: "brooklyn-nine-nine",
    title: "Brooklyn Nine-Nine",
    image: BROOKLYN_NINE_NINE_URL,
    genre: "Comedy",
    rating: 8.4,
    setting: "New York City",
    about:
      "A talented but immature detective works with a lovable squad of officers, balancing absurd workplace comedy with police cases and strong team friendships."
  },
  {
    id: "the-crown",
    title: "The Crown",
    image: THE_CROWN_URL,
    genre: "Drama",
    rating: 8.6,
    setting: "London",
    about:
      "This historical drama follows Queen Elizabeth II through the pressures of monarchy, politics, family, and the constant tension between duty and personal life."
  },
  {
    id: "succession",
    title: "Succession",
    image: SUCCESSION_URL,
    genre: "Drama",
    rating: 8.8,
    setting: "New York City",
    about:
      "A powerful media family fights for control of a global empire, turning every business move and family gathering into a ruthless battle for influence."
  },
  {
    id: "westworld",
    title: "Westworld",
    image: WESTWORLD_URL,
    genre: "Sci-Fi",
    rating: 8.4,
    setting: "Westworld",
    about:
      "In a futuristic amusement park filled with lifelike android hosts, questions of consciousness, control, and morality begin to unravel the system."
  },
  {
    id: "doctor-who",
    title: "Doctor Who",
    image: DOCTOR_WHO_URL,
    genre: "Sci-Fi",
    rating: 8.5,
    setting: "Time and Space",
    about:
      "A brilliant time-traveling alien explores the universe with human companions, facing strange civilizations, impossible dangers, and moral choices across history."
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    image: THE_WITCHER_URL,
    genre: "Fantasy",
    rating: 8.0,
    setting: "The Continent",
    about:
      "A monster hunter with supernatural abilities becomes entangled in war, prophecy, and destiny as the fates of kingdoms and powerful individuals collide."
  },
  {
    id: "shadow-and-bone",
    title: "Shadow and Bone",
    image: SHADOW_AND_BONE_URL,
    genre: "Fantasy",
    rating: 7.5,
    setting: "Ravka",
    about:
      "A young soldier discovers a rare magical power that could change her war-torn world, drawing her into political schemes, danger, and hidden secrets."
  }
];

// App state values
let allShows = [...shows];
let sortDescending = true;
let favoriteIds = [];

// Card rendering
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, show);
    cardContainer.appendChild(nextCard);
  }
}

function editCardContent(card, show) {
  card.style.display = "block";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.dataset.showId = show.id;
  card.onclick = function () {
    openModal(show);
  };
  card.onkeydown = function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(show);
    }
  };

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = show.title;

  const favoriteButton = card.querySelector(".favorite-button");
  favoriteButton.onclick = function (event) {
    event.stopPropagation();
    toggleFavorite(show.id);
  };
  favoriteButton.onkeydown = function (event) {
    event.stopPropagation();
  };
  updateFavoriteButton(favoriteButton, show.id);

  const cardImage = card.querySelector("img");
  cardImage.src = show.image;
  cardImage.alt = show.title + " Poster";

  const cardBullets = card.querySelectorAll("li");
  cardBullets[0].textContent = "Genre: " + show.genre;
  cardBullets[1].textContent = "Rating: " + show.rating;
  cardBullets[2].textContent = "Setting: " + show.setting;
}

// Page setup
document.addEventListener("DOMContentLoaded", function () {
  showCards();
  updateSortButton();
  renderFavorites();
});

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Sorting logic
function sortByRating() {
  shows.sort(function (a, b) {
    if (sortDescending) {
      return b.rating - a.rating;
    }

    return a.rating - b.rating;
  });

  sortDescending = !sortDescending;
  updateSortButton();
  showCards();
}

// Search and filter logic
function applyFilters() {
  const genreSelect = document.getElementById("genre-select");
  const selectedGenre = genreSelect.value;
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value.toLowerCase().trim();

  shows = allShows.filter(function (show) {
    const matchesGenre =
      selectedGenre === "All" || show.genre === selectedGenre;
    const matchesSearch = show.title.toLowerCase().includes(searchText);

    return matchesGenre && matchesSearch;
  });

  showCards();
}

function filterByGenre() {
  applyFilters();
}

// Sort button label
function updateSortButton() {
  const sortButton = document.getElementById("sort-button");

  if (sortDescending) {
    sortButton.textContent = "Sort By Rating ↓";
  } else {
    sortButton.textContent = "Sort By Rating ↑";
  }
}

// Show details modal
function openModal(show) {
  const modal = document.getElementById("show-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalGenre = document.getElementById("modal-genre");
  const modalRating = document.getElementById("modal-rating");
  const modalSetting = document.getElementById("modal-setting");
  const modalAbout = document.getElementById("modal-about");

  modalTitle.textContent = show.title;
  modalImage.src = show.image;
  modalImage.alt = show.title + " Poster";
  modalGenre.textContent = "Genre: " + show.genre;
  modalRating.textContent = "Rating: " + show.rating;
  modalSetting.textContent = "Setting: " + show.setting;
  modalAbout.textContent = show.about;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal(event) {
  const modal = document.getElementById("show-modal");

  if (
    event.target.id === "show-modal" ||
    event.target.classList.contains("modal-close")
  ) {
    modal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
}

// Favorites state updates
function toggleFavorite(showId) {
  if (favoriteIds.includes(showId)) {
    favoriteIds = favoriteIds.filter(function (id) {
      return id !== showId;
    });
  } else {
    favoriteIds.push(showId);
  }

  showCards();
  renderFavorites();
}

function isFavorite(showId) {
  return favoriteIds.includes(showId);
}

// Favorite button display
function updateFavoriteButton(button, showId) {
  if (isFavorite(showId)) {
    button.textContent = "♥";
    button.classList.add("is-favorite");
    button.setAttribute("aria-label", "Remove from favorites");
  } else {
    button.textContent = "♡";
    button.classList.remove("is-favorite");
    button.setAttribute("aria-label", "Add to favorites");
  }
}

// Favorites modal
function openFavoritesModal() {
  const favoritesModal = document.getElementById("favorites-modal");
  renderFavorites();
  favoritesModal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeFavoritesModal(event) {
  const favoritesModal = document.getElementById("favorites-modal");

  if (
    event.target.id === "favorites-modal" ||
    event.target.classList.contains("modal-close")
  ) {
    favoritesModal.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
}

// Favorites card rendering
function renderFavorites() {
  const favoritesContainer = document.getElementById("favorites-container");
  const emptyState = document.getElementById("favorites-empty");
  const favoriteShows = allShows.filter(function (show) {
    return favoriteIds.includes(show.id);
  });

  favoritesContainer.innerHTML = "";

  if (favoriteShows.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  for (let i = 0; i < favoriteShows.length; i++) {
    const show = favoriteShows[i];
    const favoriteCard = document.querySelector(".card").cloneNode(true);
    editCardContent(favoriteCard, show);
    favoritesContainer.appendChild(favoriteCard);
  }
}
