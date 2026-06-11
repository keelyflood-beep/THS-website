const feeSlider = document.getElementById('fee-slider');
const dealsSlider = document.getElementById('deals-slider');
const feeVal = document.getElementById('fee-val');
const dealsVal = document.getElementById('deals-val');
const result = document.getElementById('result');

function updateCalc() {
    if (!feeSlider) return;
    const fee = parseInt(feeSlider.value);
    const deals = parseInt(dealsSlider.value);
    feeVal.textContent = '$' + fee.toLocaleString();
    dealsVal.textContent = deals;
    result.textContent = '+$' + (deals * 0.30 * fee).toLocaleString(undefined, { maximumFractionDigits: 0 });
}

function fireConfetti() {
    if (typeof confetti !== 'function') return;
    const rect = result.getBoundingClientRect();
    confetti({
        particleCount: 60,
        spread: 70,
        origin: {
            x: (rect.left + rect.width / 2) / window.innerWidth,
            y: (rect.top + rect.height / 2) / window.innerHeight
        },
        colors: ['#10b981', '#34d399', '#ffffff'],
        disableForReducedMotion: true,
        zIndex: 1000
    });
}

if (feeSlider && dealsSlider) {
    feeSlider.addEventListener('input', updateCalc);
    dealsSlider.addEventListener('input', updateCalc);
    feeSlider.addEventListener('change', fireConfetti);
    dealsSlider.addEventListener('change', fireConfetti);
}
