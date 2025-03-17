document.addEventListener('DOMContentLoaded', () => {
    // Animation for culture cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.culture-card').forEach(card => {
        observer.observe(card);
    });

    // Festival countdown timer
    function updateFestivalCountdown() {
        const festivals = {
            'Bangalore Karaga': new Date('2024-04-15'),
            'Dussehra': new Date('2024-10-12'),
            'Deepavali': new Date('2024-11-01')
        };

        const now = new Date();
        let nextFestival = null;
        let minDays = Infinity;

        for (let [festival, date] of Object.entries(festivals)) {
            const timeDiff = date - now;
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            
            if (days > 0 && days < minDays) {
                minDays = days;
                nextFestival = { name: festival, days: days };
            }
        }

        if (nextFestival) {
            document.querySelector('.festival-countdown').textContent = 
                `${nextFestival.name} in ${nextFestival.days} days`;
        }
    }

    updateFestivalCountdown();
    setInterval(updateFestivalCountdown, 86400000); // Update daily
}); 