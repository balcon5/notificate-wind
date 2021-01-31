console.log('Sevice worker...');

self.addEventListener('push', e => {
    const data = e.data.json();
    self.registration.showNotification(data.title,{
        body: data.message,
        icon: 'https://simpleicon.com/wp-content/uploads/rocket.svg'
    });
});