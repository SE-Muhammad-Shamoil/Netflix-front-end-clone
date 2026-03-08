// Netflix Clone - Advanced Logic and Mock API

const movies = [
  { id: 1, title: "Stranger Things", image: "https://media.themoviedb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg", type: "TV Show", year: 2022, match: "98%", maturity: "16+", duration: "4 Seasons", youtubeId: "b9EkMc79ZSU", desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.", cast: "Winona Ryder, David Harbour, Millie Bobby Brown", genres: "Sci-Fi, Thriller, Horror" },
  { id: 2, title: "The Witcher", image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", type: "TV Show", year: 2021, match: "95%", maturity: "18+", duration: "3 Seasons", youtubeId: "ndl1W4ltcmg", desc: "Geralt of Rivia, a mutated monster-hunter for hire.", cast: "Henry Cavill, Anya Chalotra, Freya Allan", genres: "Fantasy, Action, Drama" },
  { id: 3, title: "Money Heist", image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", type: "TV Show", year: 2021, match: "99%", maturity: "18+", duration: "5 Parts", youtubeId: "_InqQJRqGW4", desc: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain.", cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño", genres: "Crime, Thriller, Action" },
  { id: 4, title: "Squid Game", image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", type: "TV Show", year: 2021, match: "97%", maturity: "18+", duration: "1 Season", youtubeId: "oqxA15vYYfI", desc: "Hundreds of cash-strapped players accept a strange invitation.", cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun", genres: "Thriller, Drama, Survival" },
  { id: 5, title: "Breaking Bad", image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", type: "TV Show", year: 2013, match: "99%", maturity: "18+", duration: "5 Seasons", youtubeId: "HhesaQXLuRY", desc: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing methamphetamine.", cast: "Bryan Cranston, Aaron Paul", genres: "Crime, Drama, Thriller" },
  { id: 6, title: "The Queen's Gambit", image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg", type: "TV Show", year: 2020, match: "94%", maturity: "16+", duration: "Limited Series", youtubeId: "oZn3qIQmLjc", desc: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess.", cast: "Anya Taylor-Joy, Bill Camp", genres: "Drama" },
  { id: 7, title: "Peaky Blinders", image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg", type: "TV Show", year: 2022, match: "96%", maturity: "18+", duration: "6 Seasons", youtubeId: "oVzVdvGIC7U", desc: "A notorious gang in 1919 Birmingham, England.", cast: "Cillian Murphy, Helen McCrory", genres: "Crime, Drama" },
  { id: 8, title: "Dark", image: "https://image.tmdb.org/t/p/w500/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg", type: "TV Show", year: 2020, match: "91%", maturity: "18+", duration: "3 Seasons", youtubeId: "rrwycJ08PSA", desc: "A missing child sets four families on a frantic hunt for answers.", cast: "Louis Hofmann, Oliver Masucci", genres: "Sci-Fi, Mystery" },
  { id: 9, title: "Ozark", image: "https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg", type: "TV Show", year: 2022, match: "93%", maturity: "18+", duration: "4 Seasons", youtubeId: "5hAXVqrljbs", desc: "A financial adviser drags his family to the Missouri Ozarks.", cast: "Jason Bateman, Laura Linney", genres: "Crime, Thriller" },
  { id: 10, title: "The Mandalorian", image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg", type: "TV Show", year: 2020, match: "95%", maturity: "12+", duration: "3 Seasons", youtubeId: "aOC8E8z_ifw", desc: "After the fall of the Galactic Empire, lawlessness has spread.", cast: "Pedro Pascal", genres: "Sci-Fi, Action" },
  { id: 11, title: "Bridgerton", image: "https://media.themoviedb.org/t/p/w500/v2TL9tcfsFsFY1wM8rhwiQwo01t.jpg", type: "TV Show", year: 2020, match: "90%", maturity: "16+", duration: "2 Seasons", youtubeId: "gpv7ayf_tyE", desc: "The eight close-knit siblings of the Bridgerton family look for love.", cast: "Adjoa Andoh, Julie Andrews", genres: "Romance, Drama" },
  { id: 12, title: "How to Train Your Dragon", image: "https://media.themoviedb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg", type: "Movie", year: 2010, match: "94%", maturity: "PG", duration: "1h 38m", youtubeId: "oKiYuIsPxYk", desc: "A hapless young Viking who aspires to hunt dragons.", cast: "Jay Baruchel, Gerard Butler", genres: "Animation, Adventure" },
  { id: 13, title: "Inception", image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", type: "Movie", year: 2010, match: "98%", maturity: "13+", duration: "2h 28m", youtubeId: "YoHD9XEInc0", desc: "A thief steals corporate secrets through dream-sharing.", cast: "Leonardo DiCaprio", genres: "Action, Sci-Fi" },
  { id: 14, title: "Interstellar", image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", type: "Movie", year: 2014, match: "97%", maturity: "13+", duration: "2h 49m", youtubeId: "zSWdZVtXT7E", desc: "Explorers travel through a wormhole in space to ensure humanity's survival.", cast: "Matthew McConaughey", genres: "Adventure, Sci-Fi" },
  { id: 15, title: "Avengers: Endgame", image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", type: "Movie", year: 2019, match: "99%", maturity: "13+", duration: "3h 1m", youtubeId: "TcMBFSGVi1c", desc: "The universe is in ruins. The Avengers assemble once more.", cast: "Robert Downey Jr., Chris Evans", genres: "Action, Sci-Fi" }
];

const rowConfigs = [
    { id: 'popular', title: 'Popular on Netflix', slice: [0, 8] },
    { id: 'trending', title: 'Trending Now', slice: [5, 13] },
    { id: 'action', title: 'Action & Adventure', slice: [2, 10] },
    { id: 'scifi', title: 'Sci-Fi & Fantasy', slice: [1, 9] },
];

const myListStorageKey = 'netflix_my_list';
let myLists = JSON.parse(localStorage.getItem(myListStorageKey)) || [];

// --- VIEW ROUTING ---
const profileView = document.getElementById('profile-view');
const browseView = document.getElementById('browse-view');
const playerView = document.getElementById('player-view');

let heroInterval;

function goToBrowseView() {
    profileView.classList.add('opacity-0');
    // Scale up slightly for transition
    profileView.style.transform = "scale(1.2)";
    setTimeout(() => {
        profileView.classList.add('hidden');
        browseView.classList.remove('hidden');
        // Force reflow
        void browseView.offsetWidth;
        browseView.classList.remove('opacity-0');
        browseView.classList.add('opacity-100');

        initBrowse(); // Starts loading the rows & hero interval
    }, 700);
}

function goToProfileView() {
    stopVideoInteractions();
    clearInterval(heroInterval);
    
    browseView.classList.remove('opacity-100');
    browseView.classList.add('opacity-0');

    setTimeout(() => {
        browseView.classList.add('hidden');
        profileView.classList.remove('hidden');
        profileView.style.transform = "scale(1)";
        
        void profileView.offsetWidth;
        profileView.classList.remove('opacity-0');
    }, 500);
}

// Player routing
let playerMockProgress;
let currentPlayProgress = 0;

function triggerPlay(source) {
    let movie = null;
    hideModal(); // hide metadata modal if open
    
    if(source === 'hero') {
        const id = document.getElementById('hero-section').dataset.id;
        movie = id ? getMovieById(id) : movies[0];
    } else {
        movie = getMovieById(source.dataset.id);
    }
    if(!movie) return;

    // Open Player View
    document.getElementById('player-video-title').textContent = movie.title;
    
    // Create iframe centered without padding
    const ytCont = document.getElementById('fullscreen-yt');
    // Using a scaled iframe trick to remove black bars
    ytCont.innerHTML = `<iframe src="https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3" 
        allow="autoplay; encrypted-media" frameborder="0" class="w-full h-full object-cover"></iframe>`;
    
    // Transition
    browseView.classList.remove('opacity-100');
    browseView.classList.add('opacity-0');
    
    setTimeout(() => {
        browseView.classList.add('hidden');
        playerView.classList.remove('hidden');
        playerView.classList.add('flex');
        
        void playerView.offsetWidth;
        playerView.classList.remove('opacity-0');
        playerView.classList.add('opacity-100');
        
        // Mock progress bar running
        document.getElementById('skip-intro-btn').classList.remove('hidden');
        currentPlayProgress = 0;
        playerMockProgress = setInterval(() => {
            currentPlayProgress += 0.2; // mock progress speed
            if(currentPlayProgress > 20) {
               document.getElementById('skip-intro-btn').classList.add('hidden');
            }
            if(currentPlayProgress > 100) clearInterval(playerMockProgress);
            document.getElementById('play-progress-inner').style.width = `${currentPlayProgress}%`;
            document.getElementById('play-knob').style.left = `${currentPlayProgress}%`;
        }, 100);
        
    }, 500);
}

function closePlayer() {
    clearInterval(playerMockProgress);
    document.getElementById('fullscreen-yt').innerHTML = ''; // halt video
    
    playerView.classList.remove('opacity-100');
    playerView.classList.add('opacity-0');

    setTimeout(() => {
        playerView.classList.remove('flex');
        playerView.classList.add('hidden');
        
        browseView.classList.remove('hidden');
        void browseView.offsetWidth;
        browseView.classList.remove('opacity-0');
        browseView.classList.add('opacity-100');
    }, 500);
}

function stopVideoInteractions() {
    hideModal();
    const herovideo = document.getElementById('youtube-container');
    if(herovideo) herovideo.innerHTML = '';
}


// --- BROWSE LOGIC ---
const heroData = [
    {
        title: "Stranger Things",
        desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        bg: "url('https://cdn.wallpapersafari.com/24/74/zgeTuV.jpg')",
    },
    {
        title: "The Witcher",
        desc: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        bg: "url('https://wallpapers.com/images/hd/the-witcher-netflix-u0h1a47l18k0mpxs.jpg')"
    },
    {
        title: "Squid Game",
        desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
        bg: "url('https://images7.alphacoders.com/118/1182226.jpg')"
    }
];

let currentHeroIndex = 0;

function rotateHero() {
    const heroSec = document.getElementById('hero-section');
    const title = document.getElementById('hero-title');
    const desc = document.getElementById('hero-desc');
    const content = document.getElementById('hero-content');
    if(!heroSec) return;

    content.style.opacity = 0;
    setTimeout(() => {
        const obj = heroData[currentHeroIndex];
        heroSec.style.backgroundImage = obj.bg;
        title.textContent = obj.title;
        desc.textContent = obj.desc;
        heroSec.setAttribute('data-id', movies.find(m => m.title === obj.title)?.id || 1);
        content.style.opacity = 1;
        currentHeroIndex = (currentHeroIndex + 1) % heroData.length;
    }, 500);
}

function initBrowse() {
    rotateHero(); 
    heroInterval = setInterval(rotateHero, 8000); 

    setupSearch();
    renderSkeletonRows();
    setTimeout(renderActualRows, 1500);
}

// Helpers
function getMovieById(id) {
    return movies.find(m => m.id === parseInt(id));
}

function createMovieCard(movie, isGrid = false) {
  const isInList = myLists.includes(movie.id);
  const cardClass = isGrid ? 'search-grid-card' : 'movie-card';
  const listIcon = isInList ? 'fa-check' : 'fa-plus';

  return `
    <div class="${cardClass}" data-id="${movie.id}">
        <img src="${movie.image}" alt="${movie.title}" loading="lazy" class="opacity-0 transition-opacity duration-500" onload="this.classList.remove('opacity-0')">
        <div class="movie-info">
            <div class="flex items-center space-x-2 mb-3">
                <button class="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center transition play-btn" title="Play">
                    <i class="fas fa-play text-xs ml-1"></i>
                </button>
                <button class="border border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition list-btn">
                    <i class="fas ${listIcon} text-sm"></i>
                </button>
                <button class="border border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition like-btn">
                    <i class="far fa-thumbs-up text-sm"></i>
                </button>
                <div class="ml-auto flex-grow flex justify-end">
                    <button class="border border-gray-500 hover:border-white text-white rounded-full w-8 h-8 flex items-center justify-center transition info-btn">
                        <i class="fas fa-chevron-down text-sm"></i>
                    </button>
                </div>
            </div>
            <div class="flex items-center space-x-2 text-xs font-bold mb-1">
                <span class="text-green-500">${movie.match || '90%'} Match</span>
                <span class="border border-gray-500 px-1 text-gray-300 rounded">${movie.maturity || '16+'}</span>
                <span class="text-gray-300 font-medium">${movie.duration}</span>
                <span class="border border-gray-500 px-1 text-[10px] rounded text-gray-300">HD</span>
            </div>
            <div class="text-white text-[11px] mt-2 flex items-center space-x-2 card-dropdown">
                <span>${movie.genres.split(',')[0]}</span><span class="text-gray-600 font-bold">•</span>
                <span>${movie.genres.split(',')[1] || 'Exciting'}</span>
            </div>
        </div>
    </div>
  `;
}

function renderSkeletonRows() {
    const mainContent = document.getElementById("main-content");
    let contentHTML = `
    <div class="row-container">
        <h2 class="row-header">My List</h2>
        <div class="slider"><div class="movie-row"></div></div>
    </div>`;
    rowConfigs.forEach(config => {
        let skeletons = '';
        for(let i=0; i<6; i++) {
            skeletons += `<div class="movie-card relative overflow-hidden bg-[#222]">
                <div class="skeleton"></div><div style="aspect-ratio:16/9;"></div>
            </div>`;
        }
        contentHTML += `
        <div class="row-container">
            <h2 class="row-header">${config.title}</h2>
            <div class="slider"><div class="movie-row">${skeletons}</div></div>
        </div>
        `;
    });
    mainContent.innerHTML = contentHTML;
}

function renderActualRows() {
    const mainContent = document.getElementById("main-content");
    let contentHTML = '';
    
    if(myLists.length > 0) {
        let myListCards = '';
        myLists.forEach(id => {
            const movie = getMovieById(id);
            if(movie) myListCards += createMovieCard(movie);
        });
        contentHTML += `
        <div class="row-container" id="my-list-container">
            <h2 class="row-header">My List</h2>
            <div class="slider">
                <div class="handle left-handle"><i class="fas fa-chevron-left"></i></div>
                <div class="movie-row" id="my-list-row">${myListCards}</div>
                <div class="handle right-handle"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>`;
    }

    rowConfigs.forEach(config => {
        let cardsHTML = '';
        let selectedMovies = [...movies, ...movies].slice(config.slice[0], config.slice[1] + 6).sort(()=> 0.5 - Math.random());
        selectedMovies.forEach(movie => { cardsHTML += createMovieCard(movie); });
        contentHTML += `
        <div class="row-container">
            <h2 class="row-header">${config.title}</h2>
            <div class="slider">
                <div class="handle left-handle"><i class="fas fa-chevron-left"></i></div>
                <div class="movie-row fade-in">${cardsHTML}</div>
                <div class="handle right-handle"><i class="fas fa-chevron-right"></i></div>
            </div>
        </div>`;
    });
    mainContent.innerHTML = contentHTML;
    setupInteractiveElements();
}

function goHome() {
    window.scrollTo(0, 0);
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');
    if(searchInput && searchInput.value !== '') {
        searchInput.value = '';
        searchInput.dispatchEvent(new Event('input'));
    }
    if(searchContainer) {
        searchContainer.classList.remove('active');
    }
}

function setupSearch() {
    const searchBtn = document.getElementById('search-btn');
    const clrSearchBtn = document.getElementById('clear-search-btn');
    const searchInput = document.getElementById('search-input');
    const searchContainer = document.getElementById('search-container');
    const displayGroups = [document.getElementById('hero-section'), document.getElementById('main-content')];
    const sResultBox = document.getElementById('search-results-container');
    const grid = document.getElementById('search-grid');
    const queryEl = document.getElementById('search-query');
    
    searchBtn.addEventListener('click', () => {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) searchInput.focus();
    });

    clrSearchBtn.addEventListener('click', () => {
        goHome();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if(query.length > 0) {
            clrSearchBtn.classList.remove('hidden');
            displayGroups.forEach(d => d.classList.add('hidden'));
            sResultBox.classList.remove('hidden');
            queryEl.textContent = query;

            const results = movies.filter(m => m.title.toLowerCase().includes(query) || m.genres.toLowerCase().includes(query) || m.cast.toLowerCase().includes(query));
            grid.innerHTML = '';
            if(results.length > 0) {
                document.getElementById('no-results').classList.add('hidden');
                results.forEach(m => grid.innerHTML += createMovieCard(m, true));
                setupInteractiveElements(grid);
            } else {
                document.getElementById('no-results').classList.remove('hidden');
                document.getElementById('no-search-query').textContent = query;
            }
        } else {
            clrSearchBtn.classList.add('hidden');
            displayGroups.forEach(d => d.classList.remove('hidden'));
            sResultBox.classList.add('hidden');
        }
    });
}

function setupInteractiveElements(ctx = document) {
    ctx.querySelectorAll('.row-container').forEach(c => {
        const row = c.querySelector('.movie-row');
        const lH = c.querySelector('.left-handle');
        const rH = c.querySelector('.right-handle');
        if(lH && rH && row) {
            lH.addEventListener('click', () => row.scrollBy({left: -window.innerWidth*0.7, behavior:'smooth'}));
            rH.addEventListener('click', () => row.scrollBy({left: window.innerWidth*0.7, behavior:'smooth'}));
        }
    });

    ctx.querySelectorAll('.list-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const icon = this.querySelector('i');
            const id = parseInt(this.closest('[data-id]').dataset.id);
            if (icon.classList.contains('fa-plus')) {
                icon.classList.replace('fa-plus', 'fa-check');
                myLists.push(id);
            } else {
                icon.classList.replace('fa-check', 'fa-plus');
                myLists = myLists.filter(mid => mid !== id);
            }
            localStorage.setItem(myListStorageKey, JSON.stringify(myLists));
            if(document.getElementById('search-results-container').classList.contains('hidden')) {
                const sY = window.scrollY;
                renderActualRows();
                window.scrollTo(0, sY);
            }
        });
    });

    ctx.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); const i = this.querySelector('i'); i.classList.toggle('fas'); i.classList.toggle('far'); });
    });

    // Play Triggers Player Interface
    ctx.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); triggerPlay(this.closest('[data-id]')); });
    });

    // Info Triggers Modal
    ctx.querySelectorAll('.info-btn').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); openTrailerModal(getMovieById(this.closest('[data-id]').dataset.id)); });
    });
}

// Modal
const modal = document.getElementById('video-modal');
const modalContent = document.getElementById('video-modal-content');
const ytContainer = document.getElementById('youtube-container');

function openTrailerModal(movie) {
    if (!movie) return;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-match').textContent = movie.match;
    document.getElementById('modal-duration').textContent = movie.year + " | " + movie.duration;
    document.getElementById('modal-maturity').textContent = movie.maturity;
    document.getElementById('modal-desc').textContent = movie.desc;
    document.getElementById('modal-cast').textContent = movie.cast;
    document.getElementById('modal-genre').textContent = movie.genres;

    // Attach play event via movie dataset
    document.getElementById('modal-play-btn').onclick = () => triggerPlay({dataset: {id: movie.id}});

    ytContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${movie.youtubeId}" allow="autoplay; encrypted-media" class="w-full h-full transform scale-125 md:scale-150"></iframe>`;

    modal.classList.remove('hidden'); modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.replace('opacity-0', 'opacity-100');
        modalContent.classList.replace('scale-95', 'scale-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    ytContainer.innerHTML = '';
    modal.classList.replace('opacity-100', 'opacity-0');
    modalContent.classList.replace('scale-100', 'scale-95');
    setTimeout(() => {
        modal.classList.replace('flex', 'hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

document.getElementById('close-modal')?.addEventListener('click', hideModal);
modal?.addEventListener('click', e => { if(e.target === modal) hideModal(); });

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if(nav) {
      if(window.scrollY > 10) nav.classList.add("nav-scroll", "shadow-xl");
      else nav.classList.remove("nav-scroll", "shadow-xl");
  }
});

// Skip Intro button animation mock
const skipIntroBtn = document.getElementById('skip-intro-btn');
if(skipIntroBtn) {
    skipIntroBtn.addEventListener('click', () => {
        skipIntroBtn.classList.add('scale-90');
        setTimeout(() => skipIntroBtn.classList.add('hidden'), 200);
        currentPlayProgress += 10;
    });
}

// Do not render browse yet, wait for profile pick
document.addEventListener("DOMContentLoaded", () => {
     // User is on Profile View.
});
