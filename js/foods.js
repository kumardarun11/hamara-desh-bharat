function filterFoods() {
    // Get the value from the search input and convert it to lowercase
    const searchInput = document.getElementById('search').value.toLowerCase();
    
    // Get all the food items with the class 'box'
    const foodItems = document.getElementsByClassName('box');
  
    // Loop through each food item and check if it matches the search input
    Array.from(foodItems).forEach(function(item) {
      // Get the food name from the h3 element inside the box
      const foodName = item.querySelector('h3').textContent.toLowerCase();
      
      // If the food name includes the search input, display the item; otherwise, hide it
      if (foodName.includes(searchInput)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  