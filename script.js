// Sample movie data
const movies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://media.themoviedb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
    type: "TV Show",
    year: 2022,
    match: "98%",
    maturity: "16+",
    duration: "4 Seasons"
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    type: "TV Show",
    year: 2021,
    match: "95%",
    maturity: "18+",
    duration: "3 Seasons"
  },
  {
    id: 3,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    type: "TV Show",
    year: 2021,
    match: "99%",
    maturity: "18+",
    duration: "5 Parts"
  },
  {
    id: 4,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    type: "TV Show",
    year: 2021,
    match: "97%",
    maturity: "18+",
    duration: "1 Season"
  },
  {
    id: 5,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    type: "TV Show",
    year: 2013,
    match: "99%",
    maturity: "18+",
    duration: "5 Seasons"
  },
  {
    id: 6,
    title: "The Queen's Gambit",
    image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "TV Show",
    year: 2020,
    match: "94%",
    maturity: "16+",
    duration: "Limited Series"
  },
  {
    id: 7,
    title: "Peaky Blinders",
    image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    type: "TV Show",
    year: 2022,
    match: "96%",
    maturity: "18+",
    duration: "6 Seasons"
  },
  {
    id: 8,
    title: "The Crown",
    image: "https://m.media-amazon.com/images/M/MV5BODcyODZlZDMtZGE0Ni00NjBhLWJlYTAtZDdlNWY3MzkwMGVhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    type: "TV Show",
    year: 2020,
    match: "92%",
    maturity: "16+",
    duration: "5 Seasons"
  },
  {
    id: 9,
    title: "Dark",
    image: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg",
    type: "TV Show",
    year: 2020,
    match: "91%",
    maturity: "18+",
    duration: "3 Seasons"
  },
  {
    id: 10,
    title: "Ozark",
    image: "https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    type: "TV Show",
    year: 2022,
    match: "93%",
    maturity: "18+",
    duration: "4 Seasons"
  },
  {
    id: 11,
    title: "The Mandalorian",
    image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    type: "TV Show",
    year: 2020,
    match: "95%",
    maturity: "12+",
    duration: "3 Seasons"
  },
  {
    id: 12,
    title: "Bridgerton",
    image: "https://media.themoviedb.org/t/p/w500/v2TL9tcfsFsFY1wM8rhwiQwo01t.jpg",
    type: "TV Show",
    year: 2020,
    match: "90%",
    maturity: "16+",
    duration: "2 Seasons"
  },
  {
    id:13,
    title:"How to Train Your Dragon",
    image:"https://media.themoviedb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg",
    type:"Movie",
    year:"2010",
    match: "94%",
    maturity: "PG",
    duration: "1h 38m"
  }
];

// Configuration for rows
const rowConfigs = [
    { id: 'popular', title: 'Popular on Netflix', slice: [0, 10] },
    { id: 'trending', title: 'Trending Now', slice: [2, 12] },
    { id: 'continue', title: 'Continue Watching for Shamoil', slice: [4, 14] },
    { id: 'new', title: 'New Releases', slice: [6, 16] },
    { id: 'action', title: 'Action & Adventure', slice: [1, 11] },
];

function createMovieCard(movie) {
  return `
    <div class="movie-card" data-title="${movie.title}" data-match="${movie.match}" data-year="${movie.year}" data-maturity="${movie.maturity}">
        <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        <div class="movie-info">
            <div class="flex items-center space-x-2 mb-3">
                <button class="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition play-btn" title="Play">
                    <i class="fas fa-play text-xs ml-1"></i>
                </button>
                <button class="border-2 border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition list-btn" title="Add to My List">
                    <i class="fas fa-plus text-sm"></i>
                </button>
                <button class="border-2 border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition like-btn" title="Like">
                    <i class="far fa-thumbs-up text-sm"></i>
                </button>
                <div class="ml-auto flex-grow flex justify-end">
                    <button class="border-2 border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition info-btn" title="More Info">
                        <i class="fas fa-chevron-down text-sm"></i>
                    </button>
                </div>
            </div>
            
            <div class="flex items-center space-x-2 text-xs font-bold mb-1">
                <span class="text-green-500">${movie.match || '90%'} Match</span>
                <span class="border border-gray-500 px-1 text-gray-300 rounded">${movie.maturity || '16+'}</span>
                <span class="text-gray-300 font-medium">${movie.duration || '1 Season'}</span>
                <span class="border border-gray-500 px-1 text-[10px] rounded text-gray-300 font-medium">HD</span>
            </div>
            <div class="text-white text-[11px] mt-2 flex items-center space-x-2 card-dropdown">
                <span>Programmes</span><span class="text-gray-600 font-bold">•</span><span>Exciting</span><span class="text-gray-600 font-bold">•</span><span>Action</span>
            </div>
        </div>
    </div>
  `;
}

// Populate structural movie rows
function renderRows() {
    const mainContent = document.getElementById("main-content");
    if(!mainContent) return;
    let contentHTML = '';
    
    // Using simple pseudo-random generation to fill empty slides based on config
    rowConfigs.forEach(config => {
        const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
        // Since we don't have enough movies for multiple long rows, we just duplicate for the UI effect
        const selectedMovies = [...shuffledMovies, ...shuffledMovies].slice(config.slice[0], config.slice[1] + 5);
        
        let cardsHTML = '';
        selectedMovies.forEach(movie => {
            cardsHTML += createMovieCard(movie);
        });

        contentHTML += `
        <div class="row-container">
            <h2 class="row-header">${config.title}</h2>
            <div class="slider">
                <div class="handle left-handle">
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div class="movie-row" id="${config.id}-row">
                    ${cardsHTML}
                </div>
                <div class="handle right-handle">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
        `;
    });
    
    mainContent.innerHTML = contentHTML;
    
    // Add event listeners for sliders and interactions
    setupInteractiveElements();
}

function setupInteractiveElements() {
    // Slider functionality
    document.querySelectorAll('.row-container').forEach(container => {
        const row = container.querySelector('.movie-row');
        const leftHandle = container.querySelector('.left-handle');
        const rightHandle = container.querySelector('.right-handle');

        leftHandle.addEventListener('click', () => {
            row.scrollBy({ left: -window.innerWidth * 0.7, behavior: 'smooth' });
        });

        rightHandle.addEventListener('click', () => {
            row.scrollBy({ left: window.innerWidth * 0.7, behavior: 'smooth' });
        });
    });

    // Toggle functionalities
    document.querySelectorAll('.list-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.replace('fa-plus', 'fa-check');
            } else {
                icon.classList.replace('fa-check', 'fa-plus');
            }
        });
    });

    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        });
    });

    // Mute button in Hero
    const muteBtn = document.getElementById('mute-btn');
    if(muteBtn) {
        muteBtn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            if(icon.classList.contains('fa-volume-mute')) {
                icon.classList.replace('fa-volume-mute', 'fa-volume-up');
            } else {
                icon.classList.replace('fa-volume-up', 'fa-volume-mute');
            }
        });
    }

    // Modal functionality
    const modal = document.getElementById('video-modal');
    const modalContent = document.getElementById('video-modal-content');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');

    document.querySelectorAll('.play-btn, .info-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.movie-card');
            if(modalTitle && card.dataset.title) {
                modalTitle.textContent = card.dataset.title;
            }
            if(modal && modalContent) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                
                // tiny delay for animation
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.classList.add('opacity-100');
                    modalContent.classList.remove('scale-95');
                    modalContent.classList.add('scale-100');
                }, 10);
                
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function hideModal() {
        if(!modal || !modalContent) return;
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    if(closeModal) {
        closeModal.addEventListener('click', hideModal);
    }

    if(modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal();
            }
        });
    }
}

// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if(!navbar) return;
  if (window.scrollY > 10) {
    navbar.classList.add("nav-scroll");
    navbar.classList.remove("from-black/80");
  } else {
    navbar.classList.remove("nav-scroll");
    navbar.classList.add("from-black/80");
  }
});

// Initialize on load
document.addEventListener("DOMContentLoaded", function () {
  renderRows();
});
