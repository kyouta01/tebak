// sw.js (letakkan di root repo, mis. /sw.js)
const CACHE_NAME = 'tebak-gambar-menu-v2';
const ASSETS = [
  './',                // root (index)
  './index.html',
  './manifest.json',

  // halaman HTML (relatif ke lokasi sw.js — jika sw.js di root, './file.html' OK)
  './buahmateri.html',
  './materiplay.html',
  './buahplay.html',
  './playbuah.html',
  './hewanmateri.html',
  './hewanplay.html',
  './hobimateri.html',
  './hobiplay.html',
  './materi.html',
  './organmateri.html',
  './organplay.html',
  './play.html',
  './scoreboard.html',
  './petunjuk.html',

  // CSS (gunakan path absolut dari root jika file ada di /asset/...)
  '/asset/assetscss/buahmateri.css',
  '/asset/assetscss/hewanmateri.css',
  '/asset/assetscss/hewanplay.css',
  '/asset/assetscss/hobimateri.css',
  '/asset/assetscss/hobiplay.css',
  '/asset/assetscss/materi.css',
  '/asset/assetscss/organmateri.css',
  '/asset/assetscss/organplay.css',
  '/asset/assetscss/petunjuk.css',
  '/asset/assetscss/play.css',
  '/asset/assetscss/scoreboard.css',
  '/asset/assetscss/style.css',

  // JS
  '/asset/assetsjs/buahmateri.js',
  '/asset/assetsjs/buahplay.js',
  '/asset/assetsjs/hewanmateri.js',
  '/asset/assetsjs/hewanplay.js',
  '/asset/assetsjs/hobimateri.js',
  '/asset/assetsjs/hobiplay.js',
  '/asset/assetsjs/materi.js',
  '/asset/assetsjs/organmateri.js',
  '/asset/assetsjs/organplay.js',
  '/asset/assetsjs/petunjuk.js',
  '/asset/assetsjs/play.js',
  '/asset/assetsjs/scoreboard.js',
  '/asset/assetsjs/script.js',

  // tambahkan icon/asset lain jika perlu:

];

// Install -> precache
self.addEventListener('install', event => {
  self.skipWaiting(); // langsung aktifkan versi baru (opsional)
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .catch(err => {
        console.error('Pre-cache gagal:', err);
      })
  );
});

// Activate -> hapus cache lama
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch -> strategi:
// - navigation (HTML): network-first, fallback ke cache (index.html)
// - asset (css/js/img): cache-first, lalu fetch dan cache
self.addEventListener('fetch', event => {
  const req = event.request;

  // hanya tangani GET
  if (req.method !== 'GET') return;

  // network-first untuk navigasi / HTML
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith(
      fetch(req)
        .then(response => {
          // update cache
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // cache-first untuk assets lain
  event.respondWith(
    caches.match(req).then(cachedResp => {
      if (cachedResp) return cachedResp;
      return fetch(req).then(networkResp => {
        // simpan salinan ke cache (non-blocking)
        caches.open(CACHE_NAME).then(cache => {
          try { cache.put(req, networkResp.clone()); } catch(e){ /* some requests can't be cached */ }
        });
        return networkResp;
      }).catch(() => {
        // fallback jika perlu (mis. gambar fallback)
        if (req.destination === 'image') {
          // kembalikan data uri kecil atau file fallback jika ada
          return caches.match('/icons/icon-192.png');
        }
      });
    })
  );
});
