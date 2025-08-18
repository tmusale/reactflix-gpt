### Reactflix GPT

    -   Create React App
    -   Configured TalwindCSS
    -   Header
    -   Routing of APP
    -   Login Form
    -   Sign up form
    -   Form validation
    -   useRef Hook
    -   Firebase setup
    -   Deploying our app to production
    -   Create Signup User Account
    -   Implement Sign In user API
    -   created Redux store with userSlice
    -   Implemented sign out
    -   update profile
    -   BugFix: Sign up  user displayName and profile picture update
    -   BugFix: if the user is not logged in Redirect /browse to Login page and vice-versa
    -   unsuscribe to the onAuthStateChanged callback
    -   Added hardcoded values to constant file
    -   Register TMDB API & create an app & get access token
    -   Get data from TMDB now playing movies list API
    -   Custom hook for now playing movies
    -   create Movie Slice
    -   update store with movies data
    -   planning for Main container and secondary container
    -   Fetch data for trailer video
    -   update store with trailer video data
    -   Embedded the Youtube video and make it autoplay and mute
    -   Tailwind classes to make container look awesome
    -   Build Secondary Component
    -   Build Movie List
    -   build Movie card
    -   TMDB Image CDN URL
    -   Made the Browser page with Tailwind CSS
    -   usePopularMovies, useTopRatedMovies,useUpcomingMovies Custiom hooks
    -   GPT search Page
    -   GPT search Bar
    -   *** made GPT search page Multi-language
    -   Get open AI API key
    -   GPT  search API call
    -   fetch GPTMovieSuggestions from TMDB
    -   created GptSlice added data
    -   Reused Movie List compoennt to make suggestion container
    -   Memoization
    -   Added .env file
    -   Added .env file to gitignore
    -   Made our Application responsive

### Features

    - Login / Sign Up
      - Sign In / Sign UP form
      - redirect to browse page
    - Browse
      - Header
      - Main Movie
        - Trailer in Background
        - Title & description
        - MovieSuggestions
          - MovieLists * N
    - NetflixGPT
      - Search Bar
      - Movie suggestions

# 🎬 Reactflix GPT

Reactflix GPT is a **Netflix-inspired movie streaming web application** built with **React, TailwindCSS, Firebase, Redux, and OpenAI GPT**. It fetches live movie data from **TMDB API** and integrates **AI-powered movie search** using GPT. The app provides a seamless streaming-like experience with authentication, responsive UI, and multi-language GPT-powered recommendations.

---

## 🚀 Features

### 🔐 Authentication

- Login / Sign Up with Firebase
- Form validation with error handling
- Update user profile (display name & profile picture)
- Persistent session with `onAuthStateChanged`
- Auto-redirect:
  - Non-logged-in users → Login Page
  - Logged-in users → Browse Page

### 🎥 Browse Experience

- Responsive **Netflix-like UI** with **TailwindCSS**
- Header navigation
- Main movie container with:
  - Background trailer (autoplay & mute)
  - Title & description
- Movie suggestions with reusable **Movie List** & **Movie Card** components
- Fetches from TMDB:
  - Now Playing
  - Popular
  - Top Rated
  - Upcoming

### 🤖 NetflixGPT

- AI-powered search using **OpenAI GPT API**
- Multi-language GPT search support
- Fetches movie suggestions from TMDB
- Displays results using reusable Movie List component

---

## 🛠️ Tech Stack

- **React** (CRA)
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **Firebase** for Authentication & Hosting
- **TMDB API** for movie data
- **YouTube Embed API** for trailers
- **OpenAI GPT API** for AI-powered search

---

## 📂 Project Structure

src/
┣ components/ # Reusable UI components (Header, MovieCard, MovieList, etc.)
┣ hooks/ # Custom hooks (useNowPlayingMovies, usePopularMovies, etc.)
┣ store/ # Redux slices (userSlice, movieSlice, gptSlice)
┣ pages/ # Page-level components (Login, Browse, NetflixGPT)
┣ utils/ # Constants, API helpers
┣ App.js # Routing setup
┣ index.js # Entry point

### Install Dependencies

- npm install

# or

- yarn install

### Setup Environment Variables

REACT_APP_OPENAI_KEY=your_openai_api_key
REACT_APP_TMDB_API_KEY=your_tmdb_api_key

### Run the Development Server

npm start

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web application to your project
4. Enable Authentication (Email/Password and Google Sign-in)
5. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section

### Deployment

- firebase login
- firebase init
- firebase deploy
