function validateForm(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const destinationSelect = document.getElementById('destination');
  const destination = destinationSelect.options[destinationSelect.selectedIndex].text; // Get the actual text of the selected option
  const date = document.getElementById('date').value;

  // Check for empty fields
  if (name === "" || email === "" || destination === "" || date === "") {
    alert("Please fill in all the fields.");
    return false;
  }

  // Display confirmation with actual destination name
  alert(`Thank you, ${name}! Your trip to ${destination} on ${date} is being planned.`);
  
  // Reset the form
  document.getElementById('travelForm').reset();
  return true; 
}

// Smooth scroll to the form when CTA button is clicked
document.querySelector('.cta-button').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#form-section').scrollIntoView({ behavior: 'smooth' });
});
