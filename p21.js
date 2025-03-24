document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Transport card hover animations
    const transportCards = document.querySelectorAll('.transport-card');
    transportCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.transport-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) translateY(-5px)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.transport-icon');
            if (icon) {
                icon.style.transform = 'scale(1) translateY(0)';
            }
        });
    });

    // Dynamic time updates for transport schedules
    function updateSchedules() {
        const now = new Date();
        const schedules = document.querySelectorAll('.schedule-time');
        schedules.forEach(schedule => {
            // Add "Updated X mins ago" text
            schedule.setAttribute('data-last-update', 
                `Updated ${Math.floor(Math.random() * 5) + 1} mins ago`);
        });
    }

    updateSchedules();
    setInterval(updateSchedules, 300000); // Update every 5 minutes
}); 