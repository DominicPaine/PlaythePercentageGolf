const CACHE_NAME = 'percentage-golf-v1';
const urlsToCache = [
  '/',
  '/statstracker2.95.html',
  // You can add paths to your CSS, JS, and image files here
  // For this app, the HTML file is self-contained.
  'icon-192.png',
  'icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});