function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
        chatbotContainer.style.display = 'block';
    } else {
        chatbotContainer.style.display = 'none';
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    
    const userMessage = chatInput.value;
    if (userMessage.trim() === '') return;

    appendMessage(userMessage, 'user-message');

    // Simulate bot response after a short delay
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        appendMessage(botMessage, 'bot-message');
    }, 1000);

    chatInput.value = '';
}

function appendMessage(message, className) {
    const chatOutput = document.getElementById('chat-output');
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = `message ${className}`;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

function getBotResponse(userMessage) {
    // Basic example of bot responses
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I help you today?';
    } else if (lowerCaseMessage.includes('hey')) {
        return 'Hello! How can I help you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
        return 'I am just a bot, but I am functioning as expected!'
    } else {
        return 'I am sorry, I do not understand that. Can you please rephrase?';
    }
}
