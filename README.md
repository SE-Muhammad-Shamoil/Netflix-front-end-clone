# Netflix Front-End Clone - Advanced Portfolio Project

Welcome to the advanced Netflix Front-End Clone! This project goes beyond basic UI cloning by implementing interactive, highly polished, real-world features designed to mimic the exact behavior of Netflix's theater-mode streaming platform.

## 🚀 Key Features and Interfaces

1. **Profile Selection Interface ("Who's Watching?")**
   - The application starts with a pristine, accurately modeled profile selection screen.
   - Includes subtle scale animations, border transitions, and profile-management mock buttons.
   - Clicking a profile seamlessly transitions the user into the main browse experience using Single Page Application (SPA) routing techniques.

2. **Main Browse Interface (Home)**
   - **Dynamic Rotating Hero Section:** The primary featured content rotates automatically every 8 seconds, cross-fading imagery and updating text metadata flawlessly without reloading the page.
   - **Scroll Navigation Transition:** The navbar transforms from a transparent gradient to a solid dark header dynamically as the user scrolls down the page.
   - **Skeletons & Mock API Loading:** Before actual movie rows load, the application simulates asynchronous network requests by displaying polished CSS Skeleton loaders, giving the feel of a production REST API fetch.
   - **Advanced Hover Mechanics:** Movie cards perform a complex `transform: scale()` operation on hover, breaking out of the overflow boundaries to display a hidden dropdown window providing detailed maturity ratings, match percentages, duration, and genres.

3. **Active Search Interface**
   - Incorporates a seamless active search bar in the top right.
   - Clicking the magnifying glass smoothly expands the text input.
   - Typing instantly hides the Hero and Movie Rows, injecting a dynamic CSS Grid of filtered search results.
   - Handles zero-result queries with targeted UI suggestions.

4. **Persistent "My List" Cache (LocalStorage)**
   - Real data persistence integration.
   - Clicking the "+" button on any movie card adds it to a dedicated "My List" row that renders at the very top of the interface.
   - List data is cached to the browser's `localStorage` meaning it persists across tab closes and page refreshes.

5. **Fullscreen Custom Video Player Interface**
   - Replaced basic static playback with a dedicated theater-mode media player interface.
   - Auto-embeds and automatically scales actual YouTube trailers for the corresponding movie using dynamically injected generic IFrames.
   - Includes full-screen Netflix-styled custom progress bars (that simulate playing), custom UI iconography, "Skip Intro" animations, and an exit button to smoothly transition back to the browse grid.

6. **Information Metadata Modal**
   - Fully fledged info overlay that dims the background and draws focus to movie descriptions, casting, and details while auto-playing a muted preview of the trailer.

## 🛠️ Technology Stack

- **HTML5:** Semantic architecture managing distinct visual states (Profile, Browse, Player).
- **Tailwind CSS & Vanilla CSS:** Combined utility classes with advanced custom CSS Keyframes (`@keyframes shimmer`), pseudo-classes, and sibling selectors for complex hover logic (`z-index` layering).
- **Vanilla JavaScript (ES6+):** Pure DOM manipulation, Array methods (filter/map/slice), interval management, and LocalStorage APIs without heavy frameworks like React.
- **YouTube IFrame API:** Simulating media distribution networks dynamically.

## 🏃 Setup

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Hover around, click a profile, search for a show, add titles to your list, and interact with the video player to experience the clone. No node dependencies or servers are required.
