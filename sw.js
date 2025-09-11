// sw.js (GitHub Pages용)
const VERSION = 'v1.0.1';
const CACHE_NAME = `easycart-${VERSION}`;
const BASE = '/easy-cart-local/';

const APP_SHELL = [
  `${BASE}`,
  `${BASE}index.html`,
  `${BASE}edit.html`,
  `${BASE}icon.png`,
  `${BASE}manifest.json`
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // 같은 오리진만 캐싱
  if (url.origin !== location.origin) return;

  // 1) 네비게이션: 캐시 우선 → 네트워크 → 실패 시 index.html 폴백
  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req)
          .then(res => {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(req, copy));
            return res;
          })
          .catch(() => caches.match(`${BASE}index.html`));
      })
    );
    return;
  }

  // 2) 앱셸/정적 파일: 캐시 우선 → 없으면 네트워크(그리고 캐시에 저장)
  const isAppShell = APP_SHELL.includes(url.pathname);
  if (isAppShell) {
    e.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
          return res;
        });
      })
    );
    return;
  }

  // 3) 그 외: 네트워크 → 실패 시 캐시
  e.respondWith(
    fetch(req)
      .then(res => {
        // 원하면 정적 에셋 조건 걸어 put 가능
        return res;
      })
      .catch(() => caches.match(req))
  );
});
