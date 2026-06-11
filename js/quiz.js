let totalScore = 0;

window.nextStep = function(stepNumber, points) {
    totalScore += points;
    document.querySelectorAll('.quiz-step').forEach(step => step.style.display = 'none');
    document.getElementById('step-' + stepNumber).style.display = 'block';
};

window.showResults = function(points) {
    totalScore += points;
    document.querySelectorAll('.quiz-step').forEach(step => step.style.display = 'none');

    const scoreDisplay = document.getElementById('score-display');
    const scoreTitle = document.getElementById('score-title');
    const scoreDesc = document.getElementById('score-desc');

    scoreDisplay.textContent = totalScore + '%';

    if (totalScore >= 70) {
        scoreDisplay.style.color = '#ef4444';
        scoreTitle.textContent = "Extreme Famine Risk";
        scoreDesc.textContent = "You are relying entirely on hope and referrals. When your current reqs dry up, you will have a massive gap in revenue. You need an outbound system immediately.";
    } else if (totalScore >= 35) {
        scoreDisplay.style.color = '#f59e0b';
        scoreTitle.textContent = "Moderate Volatility";
        scoreDesc.textContent = "You have some momentum, but your lack of consistency means you are leaving significant money on the table. It's time to build a repeatable framework.";
    } else {
        scoreDisplay.style.color = '#10b981';
        scoreTitle.textContent = "Systematic & Stable";
        scoreDesc.textContent = "You have a solid foundation! A discovery call can help you optimize your current engine to scale from 6-figures to 7-figures.";
    }

    document.getElementById('quiz-results').style.display = 'block';
};

window.resetQuiz = function(e) {
    e.preventDefault();
    totalScore = 0;
    document.querySelectorAll('.quiz-step').forEach(step => step.style.display = 'none');
    document.getElementById('step-1').style.display = 'block';
};
