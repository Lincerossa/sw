

const CACHE_NAME = "worker_compose"

const CACHED_RESOURCES = [
  'slide_1.png'
]

// dopo la registrazione al workwer, provo ad installare nella cache "worker_compose"
// una lista di risorse da cachare
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      cache.addAll(CACHED_RESOURCES)
    })
  )
})

// quando l'utente chiede nuovamente risorse già in cache, allora gliele mando dalla cache
self.addEventListener('fetch', function(event) {
  event.responseWith(
    caches.match(event.request)
      .then(cachedResponse => fetch(event.request) || cachedResponse)
  )
});