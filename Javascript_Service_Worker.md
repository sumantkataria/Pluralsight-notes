# Service Workers
    # Definition
    - JS file that gets registered with the browser.
    - stays registered with the browser even when OFFLINE.
    - can load content even with no connection.
    - a type of Web Worker(an object that executes separately from the main browser thread)

    # Features
    - Cannot directly access DOM
    - programmable network proxy
    - terminated when not being used.
    - make use of ES6 Promises
    - requires HTTPS unless on localhost(to prevent MITM attack)
    - Supported in All major browsers

    # Use Cases
    - caching assets & API calls
    - Push notifications
    - Store content for offline use
    - Background data sync/preload
    - Used in Progressive Web Apps
    - E.g. Instagram Mobile App

    # Lifecycle Events
        REGISTER         ->         INSTALL       ->        ACTIVATE
                            triggers install event     triggers activate event
    - After that it receives Message events & Functional Events such as 'fetch', 'push' & 'sync'
    
    # Example
        # Service Worker file
        // Cache Name
        const cacheName = 'v1';
        // Cache Pages
        const cacheAssets = [
            'index.html',
            'about.html',
            '/css/style.css',
            '/js/main.js'
        ]

        // Call Install event
        self.addEventListener('install', (e) => {
            console.log('Service Worker Installed')
            e.waitUntil(
                caches
                    .open(cacheName)
                    .then(cache => {
                        console.log('Service Worker: caching files')
                        cache.addAll(cacheAssets)
                    })
                    .then(() => self.skipWaiting())
            )
        })

        //Install Activate Event
        self.addEventListener('activate', (e) => {
            console.log('Service Worker Activated')
            e.waitUntil(
                caches.keys().then(cacheNames => {
                    return Promise.all(
                        cacheNames.map(cache => {
                            if(cache !== cacheName) {
                                console.log('Service Worker: Clearing Old Cache')
                                return caches.delete(cache)
                            }
                        })
                    )
                })
            )
        })

        // Call Fetch Event
        self.addEventListener('fetch', (e) => {
            console.log('Service Worker: fetching');
            e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
        })

        # Main file
        if('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                .register('../path/to/serviceWorker.js')
                .then((reg) => console.log('Service Worker registered'))
                .catch((err) => console.log(`Service worker error - ${err}`))
            })
        }