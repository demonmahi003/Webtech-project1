document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading for landmark images
    const lazyImages = document.querySelectorAll('.landmark-card img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Card animation on scroll
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.landmark-card').forEach(card => {
        cardObserver.observe(card);
    });

    // Initialize map
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        const mapIframe = document.createElement('iframe');
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8594085151!2d77.59121931482186!3d12.979245990855987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1679900000000!5m2!1sen!2sin";
        mapIframe.width = "100%";
        mapIframe.height = "100%";
        mapIframe.style.border = "0";
        mapIframe.allowFullscreen = true;
        mapIframe.loading = "lazy";
        mapIframe.referrerPolicy = "no-referrer-when-downgrade";
        mapContainer.appendChild(mapIframe);
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});