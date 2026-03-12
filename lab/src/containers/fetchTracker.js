// src/containers/fetchTracker.js
export function createFetchTracker() {
  let attempts = 0;
  let lastFetch = null;

  return {
    recordAttempt: () => {
      attempts++;
      lastFetch = new Date().toLocaleTimeString();
    },
    getInfo: () => ({ attempts, lastFetch })
  };
}