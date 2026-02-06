const cacheName = 'phillimon-calc-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  // Ikani zithunzi kapena mafonts ena apa ngati mutawonjezera
];

// Kuyika mafayilo mu cache (Storage)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Kutsegula calculator popanda netiweki (Offline mode)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
