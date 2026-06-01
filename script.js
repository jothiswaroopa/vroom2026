document.addEventListener('DOMContentLoaded', () => {
    // 1. Premium High-Precision Countdown Configurator
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date('August 9, 2026 00:00:00 GMT+0530').getTime();

    function computeCountdownMetrics() {
        const currentMoment = new Date().getTime();
        const absoluteDistance = targetDate - currentMoment;

        if (absoluteDistance < 0) {
            countdownElement.innerHTML = "<div class='time-container-node'><span class='time-digit'>LIVE</span></div>";
            return;
        }

        const computationalDays = Math.floor(absoluteDistance / (1000 * 60 * 60 * 24));
        const computationalHours = Math.floor((absoluteDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const computationalMinutes = Math.floor((absoluteDistance % (1000 * 60 * 60)) / (1000 * 60));
        const computationalSeconds = Math.floor((absoluteDistance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="time-container-node">
                <span class="time-digit">${computationalDays.toString().padStart(2, '0')}</span>
                <span class="time-label">Days</span>
            </div>
            <div class="time-container-node">
                <span class="time-digit">${computationalHours.toString().padStart(2, '0')}</span>
                <span class="time-label">Hours</span>
            </div>
            <div class="time-container-node">
                <span class="time-digit">${computationalMinutes.toString().padStart(2, '0')}</span>
                <span class="time-label">Min</span>
            </div>
            <div class="time-container-node">
                <span class="time-digit">${computationalSeconds.toString().padStart(2, '0')}</span>
                <span class="time-label">Sec</span>
            </div>
        `;
    }

    computeCountdownMetrics();
    setInterval(computeCountdownMetrics, 1000);
});

// 2. Interactive Form Submission State Handler
function handleFormSubmit() {
    const targetForm = document.getElementById('vroomRegistrationForm');
    const targetSuccessMessage = document.getElementById('formSuccessMessage');
    
    targetForm.classList.add('hidden');
    targetSuccessMessage.classList.remove('hidden');
    
    // Smooth scroll directly onto the verification message block
    targetSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
