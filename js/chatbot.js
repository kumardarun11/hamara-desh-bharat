const options = document.getElementById('options');
const responseDiv = document.getElementById('response');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const hopeMessage = document.getElementById('hope-message');

const responses = {
  'technical-issue': '<a href="../pages/helpcenter.html" target="_self">Please visit our help center for technical issues.</a>',
  'quiz': '<a href="../pages/quiz.html" target="_self">Let\'s play a quiz!</a>',
  'list-of-states': `
    <h2>States:</h2>
    
    <ul>
      <a href="https://en.wikipedia.org/wiki/Andhra_Pradesh" target="_self">Andhra Pradesh</a>
      <a href="https://en.wikipedia.org/wiki/Arunachal_Pradesh" target="_self">Arunachal Pradesh</a>
      <a href="https://en.wikipedia.org/wiki/Assam" target="_self">Assam</a>
      <a href="https://en.wikipedia.org/wiki/Bihar" target="_self">Bihar</a>
      <a href="https://en.wikipedia.org/wiki/Chhattisgarh" target="_self">Chhattisgarh</a>
      <a href="https://en.wikipedia.org/wiki/Goa" target="_self">Goa</a>
      <a href="https://en.wikipedia.org/wiki/Gujarat" target="_self">Gujarat</a>
      <a href="https://en.wikipedia.org/wiki/Haryana" target="_self">Haryana</a>
      <a href="https://en.wikipedia.org/wiki/Himachal_Pradesh" target="_self">Himachal Pra/a></li>
      <a href="https://en.wikipedia.org/wiki/Jharkhand" target="_self">Jharkhand</a>
      <a href="https://en.wikipedia.org/wiki/Karnataka" target="_self">Karnataka</a>
      <a href="https://en.wikipedia.org/wiki/Kerala" target="_self">Kerala</a>
      <a href="https://en.wikipedia.org/wiki/Madhya_Pradesh" target="_self">Madhya Pradesh/li>
      <a href="https://en.wikipedia.org/wiki/Maharashtra" target="_self">Maharashtra</a>
      <a href="https://en.wikipedia.org/wiki/Manipur" target="_self">Manipur</a>
      <a href="https://en.wikipedia.org/wiki/Meghalaya" target="_self">Meghalaya</a>
      <a href="https://en.wikipedia.org/wiki/Mizoram" target="_self">Mizoram</a>
      <a href="https://en.wikipedia.org/wiki/Nagaland" target="_self">Nagaland</a>
      <a href="https://en.wikipedia.org/wiki/Odisha" target="_self">Odisha</a>
      <a href="https://en.wikipedia.org/wiki/Punjab" target="_self">Punjab</a>
      <a href="https://en.wikipedia.org/wiki/Rajasthan" target="_self">Rajasthan</a>
      <a href="https://en.wikipedia.org/wiki/Sikkim" target="_self">Sikkim</a>
      <a href="https://en.wikipedia.org/wiki/Tamil_Nadu" target="_self">Tamil Nadu</a>
      <a href="https://en.wikipedia.org/wiki/Telangana" target="_self">Telangana</a>
      <a href="https://en.wikipedia.org/wiki/Tripura" target="_self">Tripura</a>
      <a href="https://en.wikipedia.org/wiki/Uttar_Pradesh" target="_self">Uttar Pradesh</i>
      <a href="https://en.wikipedia.org/wiki/Uttarakhand" target="_self">Uttarakhand</a>
      <a href="https://en.wikipedia.org/wiki/West_Bengal" target="_self">West Bengal</a>
    </ul>
    <h2>Union Territories:</h2>
    <ul>
      <a href="https://en.wikipedia.org/wiki/Andaman_and_Nicobar_Islands" target="_self">Andaman and Nicobar Islands</a>
      <a href="https://en.wikipedia.org/wiki/Chandigarh" target="_self">Chandigarh</a>
      <a href="https://en.wikipedia.org/wiki/Dadra_and_Nagar_Haveli" target="_self">Dadra and Nagar Haveli</a>
      <a href="https://en.wikipedia.org/wiki/Daman_and_Diu" target="_self">Daman and Diu</a>
      <a href="https://en.wikipedia.org/wiki/Delhi" target="_self">Delhi</a>
      <a href="https://en.wikipedia.org/wiki/Jammu_and_Kashmir_(union_territory)" target="_self">Jammu and Kashmir</a>
      <a href="https://en.wikipedia.org/wiki/Ladakh" target="_self">Ladakh</a>
      <a href="https://en.wikipedia.org/wiki/Lakshadweep" target="_self">Lakshadweep</a>
      <a href="https://en.wikipedia.org/wiki/Puducherry_(union_territory)" target="_self">Puducherry</a>
    </ ul>
  `,
  'travel-with-us': '<a href="../pages/travel.html" target="_self">Let\'s travel together!</a>',
  'other-query': '<p>Please provide more details about your query.</p>'
};

options.addEventListener('change', (e) => {
  const selectedOption = e.target.value;
  if (selectedOption) {
    responseDiv.innerHTML = responses[selectedOption];
    responseDiv.style.display = 'block';
  } else {
    responseDiv.innerHTML = 'Please choose an option!';
    responseDiv.style.display = 'block';
  }
});

submitBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  const selectedOption = options.value;

  // If "Other Query" is selected and user enters text
  if (selectedOption === 'other-query' && userInputValue) {
    responseDiv.innerHTML = 'Your query has been recorded. We will let you know as soon as we have a solution.';
    responseDiv.style.display = 'block';
  } 
  // For other options where the user submits text
  else if (userInputValue) {
    responseDiv.innerHTML = `You wrote: ${userInputValue}`;
    responseDiv.style.display = 'block';
  } 
  // When no text is entered
  else {
    responseDiv.innerHTML = 'Please type a message!';
    responseDiv.style.display = 'block';
  }
});








