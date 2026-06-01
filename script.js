// VROOM 2026 JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Countdown Timer
    const countdownElement = document.getElementById('countdown');
    
    // Target Event Date: 09 August 2026 at 00:00:00 (Chennai time)
    // Note: JS Date handles time zones differently based on locale. 
    // This is a rough estimation for the landing page.
    const targetDate = new Date('August 9, 2026 00:00:00 GMT+0530').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // If count down is finished
        if (distance < 0) {
            countdownElement.innerHTML = "<span>Event Started!</span>";
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        countdownElement.innerHTML = `
            <div class="countdown-block card text-center">
                <span class="time-unit">${days.toString().padStart(2, '0')}</span>
                <span class="label">Days</span>
            </div>
            <div class="countdown-block card text-center">
                <span class="time-unit">${hours.toString().padStart(2, '0')}</span>
                <span class="label">Hours</span>
            </div>
            <div class="countdown-block card text-center">
                <span class="time-unit">${minutes.toString().padStart(2, '0')}</span>
                <span class="label">Min</span>
            </div>
            <div class="countdown-block card text-center">
                <span class="time-unit">${seconds.toString().padStart(2, '0')}</span>
                <span class="label">Sec</span>
            </div>
        `;
    }

    // Update countdown immediately
    updateCountdown();
    
    // Update the count down every 1 second
    setInterval(updateCountdown, 1000);
});