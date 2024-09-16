// Function to handle form submission and scroll to the Travel button
document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Scroll to the Travel button section
    const travelButton = document.querySelector('.button-travel');
    travelButton.scrollIntoView({ behavior: 'smooth' });
  
    // Optionally display a success message or perform additional actions
    alert('Form submitted successfully. Scroll to Travel button.');
  });
  