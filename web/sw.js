const C='cloth-v1';const F=['/','/index.html','/web/manifest.json','/web/icon-192.png','/web/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>new Response('Offline',{status:503})))});
