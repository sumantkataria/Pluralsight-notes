# Web Workers -
    - a javascript process that runs in the background of a webpage.
    - way to implement multi-threading.
    - JS is Single-threaded(main thread). Web-worker is a separate JS thread that allows to execute multiple JS threads to work parallel to each other.
    - Used to offload any CPU intensive work so that main thread doesn't get bogged down & can continue executing some other code.
    - Can't perform any DOM manipulation.(only main thread can perform)
    - NO ACCESS to -
        a. window object
        b. document object
        c. parent object
    - ACCESS to -
        a. navigator object(useragent, geolocation)
        b. location object(host, href, hostname etc)
        c. XMLHttpRequest
        d. setTimeout(), clearTimeout(), setInterval(), clearInterval()
        e. Application cache
        f. spawning other Web workers
        g. myWorker.terminate() // terminate workers
    - Example
        # Worker File
        self.onmessage = function(message) {
            // any CPU computation like adding or subtracting etc.
            self.postMessage(sum)
        }

        # Main File
        const worker = new Worker("worker.js)
        sumButton.addEventListener("click", (event) => {
            worker.postMessage("hello")
        })
        worker.onmessage = function(message) {
            alert(`The final sum is${message.data}`)
        }