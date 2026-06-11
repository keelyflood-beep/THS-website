const chatToggle = document.getElementById('chatbot-toggle');
const chatWindow = document.getElementById('chatbot-window');
const chatClose = document.getElementById('chatbot-close');
const chatForm = document.getElementById('chatbot-form');
const chatInput = document.getElementById('chatbot-input');
const chatMessages = document.getElementById('chatbot-messages');

let chatInteractionCount = 0;

if (chatToggle && chatWindow && chatClose) {
    chatToggle.addEventListener('click', () => {
        const isOpen = chatWindow.style.display === 'flex';
        chatWindow.style.display = isOpen ? 'none' : 'flex';
        if (!isOpen) chatInput.focus();
    });

    chatClose.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });
}

if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        chatMessages.innerHTML += `<div class="user-msg">${text}</div>`;
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
        chatInteractionCount++;

        setTimeout(() => {
            let response;
            if (chatInteractionCount === 1) {
                response = "Let's be honest... did you really think an AI chatbot was going to fix your sales pipeline? Sales is about human connection. Stop typing and <a href='#calendar' onclick='document.getElementById(\"chatbot-window\").style.display=\"none\"'>book a call with a real human</a>.";
            } else if (chatInteractionCount === 2) {
                response = "You're still typing? I am literally 30 lines of JavaScript pretending to be a sales expert. Go click the calendar.";
            } else {
                response = "I am ignoring you until you book a discovery call. Beep boop. 🤖";
            }
            chatMessages.innerHTML += `<div class="bot-msg">${response}</div>`;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 800);
    });
}
