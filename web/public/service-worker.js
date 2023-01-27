self.addEventListener('push', function (event) {
    const body =  event.data?.text() ?? ''


    // waitUntil: basicamente diz ao service worker, mantenha-se rodando, espere até receber uma notificacao
    event.waitUntil(
        self.registration.showNotification('Habits', {
            body
        })
    )
})