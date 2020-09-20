const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/icons/icon-512x512.png",
  "/icons/icon-192x192.png",
];

const PRECACHE = "precache-v1";
const RUNTIME = "runtime";

//* Calls install event
self.addEventListener("install", (event) => {
  console.log(`Service Worker: Installed.`);
  event.waitUntil(
    caches
      .open("PRECACHE")
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(self.skipWaiting())
  );
});

