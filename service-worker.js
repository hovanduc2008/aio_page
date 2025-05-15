const CACHE_NAME = 'all-in-one-api-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Thêm các file CSS, JS, hình ảnh cần cache
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
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
