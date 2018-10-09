self.addEventListener('install',function (e) {
	e.waitUntil(
      caches.open('app-v1').then(function (cache) {
      	console.log('open cache')
      	return cache.addAll([
      		'app.js',
            'main.css'
      		])

      })
	)
})

self.addEventListener('fetch',function (e) {
	e.respondWith(
		caches.
	)
})