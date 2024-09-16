document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Simple validation
    if (name && email && password) {
      // Store user data (in a real app, this would be sent to a server)
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
  
      // Redirect to the sign-in page
      window.location.href = 'signin.html';
    } else {
      // Error handling
      errorMessage.textContent = 'Please fill in all fields';
    }
  });
  