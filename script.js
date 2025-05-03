// Sample movie data
const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://media.themoviedb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    type: "TV Show",
    year: 2022,
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    type: "TV Show",
    year: 2021,
  },
  {
    id: 3,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    type: "TV Show",
    year: 2021,
  },
  {
    id: 4,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    type: "TV Show",
    year: 2021,
  },
  {
    id: 5,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    type: "TV Show",
    year: 2013,
  },
  {
    id: 6,
    title: "The Queen's Gambit",
    image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "TV Show",
    year: 2020,
  },
  {
    id: 7,
    title: "Peaky Blinders",
    image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    type: "TV Show",
    year: 2022,
  },
  {
    id: 8,
    title: "The Crown",
    image: "https://m.media-amazon.com/images/M/MV5BODcyODZlZDMtZGE0Ni00NjBhLWJlYTAtZDdlNWY3MzkwMGVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    type: "TV Show",
    year: 2020,
  },
  {
    id: 9,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",
    type: "TV Show",
    year: 2020,
  },
  {
    id: 10,
    title: "Ozark",
    image: "https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    type: "TV Show",
    year: 2022,
  },
  {
    id: 11,
    title: "The Mandalorian",
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    type: "TV Show",
    year: 2020,
  },
  {
    id: 12,
    title: "Bridgerton",
    image: "https://media.themoviedb.org/t/p/w500/v2TL9tcfsFsFY1wM8rhwiQwo01t.jpg",
    type: "TV Show",
    year: 2020,
  },
  {
    id:13,
    title:"How to Train Your Dragon",
    image:"https://media.themoviedb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    type:"Movie",
    year:"2010"
  }
];

// Function to create movie card
function createMovieCard(movie) {
  return `
                <div class="movie-card">
                    <img src="${movie.image}" alt="${movie.title}">
                    <div class="movie-info">
                        <h3 class="font-bold">${movie.title}</h3>
                        <p class="text-sm">${movie.type} • ${movie.year}</p>
                        <div class="flex mt-2">
                            <button class="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center mr-2">
                                <i class="fas fa-play text-xs"></i>
                            </button>
                            <button class="border border-gray-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
}

// Populate movie rows
function populateMovieRows() {
  const popularRow = document.getElementById("popular-row");
  const trendingRow = document.getElementById("trending-row");
  const continueRow = document.getElementById("continue-row");
  const newRow = document.getElementById("new-row");

  // Shuffle movies for different rows
  const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());

  // Add movies to rows
  shuffledMovies.slice(0, 10).forEach((movie) => {
    popularRow.innerHTML += createMovieCard(movie);
  });

  shuffledMovies.slice(2, 12).forEach((movie) => {
    trendingRow.innerHTML += createMovieCard(movie);
  });

  shuffledMovies.slice(4, 14).forEach((movie) => {
    continueRow.innerHTML += createMovieCard(movie);
  });

  shuffledMovies.slice(6, 16).forEach((movie) => {
    newRow.innerHTML += createMovieCard(movie);
  });
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  populateMovieRows();
});
