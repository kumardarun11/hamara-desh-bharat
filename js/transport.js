document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user details from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Get the selected transport option and its displayed text
    const transportSelect = document.getElementById('transport');
    const transportText = transportSelect.options[transportSelect.selectedIndex].text;

    // Display the alert with the selected transport text
    alert(`Thank you, ${name}! You have selected ${transportText} as your preferred transport. We will contact you at ${email}.`);
});
