{[Live Link](https://ahmedragibhasan.github.io/BBC-JANALA-NEWS/)}

{[API URL](https://news-api-fs.vercel.app/)}


# BBC জানালা — News App

A conceptual BBC Bangla-inspired news web app built with vanilla HTML, Tailwind CSS, and JavaScript.  
This is a **learning project** focused on practicing async API fetching, DOM manipulation, and component-style UI building without a framework.

🔗 **Live Demo:** https://ahmedragibhasan.github.io/BBC-JANALA-NEWS/  
📡 **API Source:** https://news-api-fs.vercel.app/

---

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| Tailwind CSS | Utility-first styling |
| Vanilla JavaScript (ES6+) | Logic, API calls, DOM rendering |
| GitHub Pages | Free static hosting |

---

## Features

- Fetches news categories and articles from a REST API
- Dynamic card rendering based on API response
- Category-based news filtering
- Bookmark functionality to save articles
- Loading state while data is being fetched
- Responsive layout

---

## What I Learned Building This

### 1. Async JavaScript & Fetch API
- How to use `fetch()` to call a REST API
- Writing `async/await` functions instead of chained `.then()`
- Handling errors with `try/catch` when a fetch fails
- Understanding what a JSON response looks like and how to parse it

### 2. DOM Manipulation
- Dynamically creating and injecting HTML elements using JavaScript
- Using `innerHTML` and `createElement` to render API data as cards
- Updating specific parts of the page without reloading

### 3. CORS & Browser Security
- Learned what a CORS error is and why browsers block certain requests
- Understood the difference between opening a file directly (`origin: null`) vs serving it through a local server
- Why `Live Server` in VS Code is necessary during local development

### 4. Tailwind CSS
- Utility-class approach to styling without writing custom CSS
- Responsive design using Tailwind's breakpoint prefixes (`sm:`, `md:`)
- Configuring `tailwind.config.js` for custom settings

### 5. Project Structure
- Separating concerns: `index.html` for structure, `script.js` for logic
- Organizing assets in a dedicated folder
- Deploying a static project to GitHub Pages

### 6. Git & Version Control
- Regular commits with meaningful messages
- Deploying via GitHub Pages from the `main` branch

---

## Known Issues / Limitations

- The external API (`news-api-fs.vercel.app`) may block requests from certain origins due to CORS restrictions
- Must be served via a local server (e.g. VS Code Live Server) during development — opening `index.html` directly in the browser will cause CORS errors
- Bookmarks are not persisted (resets on page refresh) — localStorage implementation planned

---

## Code Map — How HTML and JS connect

### DOM elements and their roles

| Element ID | HTML tag | What it does |
|---|---|---|
| `#category_Container` | `<ul>` in `<nav>` | Receives `<li>` tags injected by `showCategory()` |
| `#news_Container` | `<div>` in `<main>` | Receives article cards injected by `showNewsByCategory()` |
| `#bookmarkcontainer` | `<div>` in sidebar | Receives bookmark cards injected by `showBookmarks()` |
| `#bookmarkcount` | `<p>` in sidebar | Count updated by `showBookmarks()` |
| `#news_details_modal` | `<dialog>` | Opened via `.showModal()` in `showDtailsNews()` |
| `#modal_Container` | `<div>` inside dialog | Receives article detail content |

### Function call chain

### Key patterns practiced
- **Event delegation** — one listener on the parent container handles clicks on all dynamically created child buttons
- **DOM traversal** — `e.target.parentNode` walks up the tree to find the article id from any button click
- **Array as state** — bookmarks stored in `let bookmarks = []`, mutated via `.filter()` then re-rendered
- **Two async styles** — `.then().catch()` chaining in active code; `async/await` version in commented code at bottom
- **Native `<dialog>`** — opened with `.showModal()`, closed with `<form method="dialog">` requiring no JS

## Planned Improvements

- [ ] Persist bookmarks using `localStorage`
- [ ] Refactor repeated code into reusable functions
- [ ] Add proper error UI when API fails
- [ ] Improve mobile responsiveness

---

## Author

**Ahmed Ragib Hasan**  
Learning project — part of the Programming Hero web development curriculum.