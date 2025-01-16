const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to add a message
function addMessage(text, sender) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
}

// Handle send button click
sendButton.addEventListener('click', () => {
  const userMessage = messageInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, 'user'); // Add user message
    messageInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
      addMessage('Bot response: ' + userMessage, 'bot');
    }, 1000);
  }
});

// Handle Enter key for sending message
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click();
  }
});