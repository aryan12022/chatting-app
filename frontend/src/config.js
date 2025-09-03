// src/config.js

// Automatically switch between local and production
export const BASE_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
