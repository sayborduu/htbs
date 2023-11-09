importScripts('https://hypertabs-production-5eb8.up.railway.app/uv/uv.sw.js');
const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
	event.respondWith(sw.fetch(event));
});
