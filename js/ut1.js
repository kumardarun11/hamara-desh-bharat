const stateInfo = [
    {
      stateName: 'Andaman and Nicobar Islands',
      stateImage: '../images/anda.jpg',
      stateVideo: '../videos/andaman.mp4',
      stateAcr: 'Emerald Isles',
      redirectUrl: 'https://www.ap.gov.in/#/', 
    },
    {
        stateName: 'Chandigarh',
        stateImage: '../images/ch.jpg',
        stateVideo: '../videos/chandigarh.mp4',
        stateAcr: 'Emerald Isles',
        redirectUrl: 'https://www.ap.gov.in/#/', 
      },
    {
      stateName: 'Dadra and Nagar Haveli',
      stateImage: '../images/dnh.jpg',
      stateVideo: '../videos/dadra and nagar hevli.mp4',
      stateAcr: 'Land of the Rising Sun',
      redirectUrl: 'https://arunachalpradesh.gov.in/', 
    },
    {
      stateName: 'Daman and Diu',
      stateImage: '../images/dd.jpg',
      stateVideo: '../videos/diu.mp4',
      stateAcr: 'The Tea Garden of India',
      redirectUrl: 'https://assam.gov.in/',
    },
    {
      stateName: 'Delhi',
      stateImage: '../images/del.webp',
      stateVideo: '../videos/delhi.mp4',
      stateAcr: 'Dilwalion ki Dilli',
      redirectUrl: 'https://delhi.gov.in/', 
    },
    {
      stateName: 'Jammu & Kashmir',
      stateImage: '../images/jk.jpg',
      stateVideo: '../videos/jammu and kashmir.mp4',
      stateAcr: 'Rice Bowl of India',
      redirectUrl: 'https://cgstate.gov.in/en', 
    },
    {
        stateName: 'Ladakh',
        stateImage: '../images/ladakh.jpg',
        stateVideo: '../videos/ladakh.mp4',
        stateAcr: 'The Land of High Passes',
        redirectUrl: 'https://ladakh.nic.in', 
    },
    {
        stateName: 'Lakshadweep',
        stateImage: '../images/laksha.jpg',
        stateVideo: '../videos/lakshdweep.mp4',
        stateAcr: 'The Coral Paradise of India',
        redirectUrl: 'https://www.ap.gov.in/#/', 
    },
    {
      stateName: 'Pondicherry',
      stateImage: '../images/pond.jpg',
      stateVideo: '../videos/pondicherry.mp4',
      stateAcr: 'The French Riviera of the East',
      redirectUrl: 'https://www.goa.gov.in/', 
    },
  ];
  
  const swiperContainer = document.querySelector('#swiper-wrapper-1');
  const searchBar = document.querySelector('#search');
  
  const showSlider = (states) => {
    swiperContainer.innerHTML = ''; 
    states.forEach((item) => {
      swiperContainer.innerHTML += `
        <div class="swiper-slide" style="padding: 10px;">
          <div class="box" style="position: relative; background-color: #000;">
            <!-- Image as default display -->
            <img src="${item.stateImage}" alt="${item.stateName} Image" />
            
            <!-- Video for hover (hidden by default) -->
            <video src="${item.stateVideo}" muted loop preload="auto" autoplay></video>
  
            <div class="content">
              <h2>${item.stateName}</h2>
              <h3>${item.stateAcr}</h3>
              <a href="#" class="btns" onclick="showPopup('${item.stateName}', '${item.redirectUrl}')">
                <i class="fa fa-plane fa-2x"></i>
              </a>
            </div>
          </div>
        </div>`;
  
      // Add event listeners for video control on hover
      const box = document.querySelector('.swiper-slide:last-child .box');
      const video = box.querySelector('video');
  
      box.addEventListener('mouseover', () => {
        video.play(); // Start playing the video when hovered
      });
  
      box.addEventListener('mouseout', () => {
        video.pause(); // Pause the video when the cursor leaves
        video.currentTime = 0; // Reset the video to the start
      });
    });
  };
  
  
  const showPopup = (stateName, redirectUrl) => {
    const userConfirmed = confirm(`Do you want to explore ${stateName}?`);
    if (userConfirmed) {
      window.location.href = redirectUrl;
    }
  };
  
  showSlider(stateInfo);
  
  searchBar.addEventListener('keyup', (input_value) => {
    const inputValue = input_value.target.value.toLowerCase();
    const findStates = stateInfo.filter((item) => {
      return item.stateName.toLowerCase().includes(inputValue);
    });
    showSlider(findStates);
  });
  
  