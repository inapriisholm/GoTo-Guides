// AutismGoTo – service worker
// Cacher selve appen (skal-app) så den kan åbnes uden internet.
// PDF-guider og fotos hentes fra autismgoto.com og kræver internet.

// VIGTIGT: Hæv dette versionsnummer (v1 -> v2 -> v3 osv.) hver gang du laver
// en større opdatering, hvis du vil tvinge alle brugere til at hente helt
// frisk indhold med det samme. Normalt er det ikke nødvendigt længere,
// fordi appen nu altid prøver netværket først.
const CACHE = 'autismgoto-v2';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // App-filer (samme oprindelse): netværk først, så brugere altid får
  // nyeste version når de har internet. Falder tilbage til cache,
  // hvis de er offline.
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // Eksterne fotos (autismgoto.com): netværk først, gem en kopi til offline-brug.
  if (/\.(jpg|jpeg|png|webp)$/i.test(url.pathname)) {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req))
    );
    return;
  }
  // PDF-guider og alt andet: lad browseren hente normalt (kræver internet).
});
