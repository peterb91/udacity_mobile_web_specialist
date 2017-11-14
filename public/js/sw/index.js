self.addEventListener('fetch', function(event) {
    event.respondWith(
        new Response('Hello <b>world</b>', {
            headers: {"foo": "bar"}
        })
    );
});