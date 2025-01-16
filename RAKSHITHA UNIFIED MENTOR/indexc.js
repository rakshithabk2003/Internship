const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Function to add a message to the chat
function addMessage(content, isUser = true) {
  const messageDiv = document.createElement('div');
  messageDiv.textContent = content;
  messageDiv.classList.add('message', isUser ? 'user-message' : 'incoming-message');
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the latest message
}

// Event listener for the Send button
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message); // Add user's message
    messageInput.value = ''; // Clear input field
    simulateResponse(); // Simulate a response
  }
});

// Simulate an incoming response
function simulateResponse() {
  setTimeout(() => {
    addMessage("This is a simulated response.", false);
  }, 1000);
}