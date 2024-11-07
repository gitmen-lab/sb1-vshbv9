// Create and inject the promotion styles
const style = document.createElement('style');
style.textContent = `
  .promotion-popup {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .promotion-popup.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .promotion-banner {
    background: linear-gradient(to right, #16a34a, #15803d);
    color: white;
    padding: 0.75rem 1rem;
    width: 100%;
  }
  .promotion-banner.top {
    border-bottom: 1px solid #166534;
  }
  .promotion-banner.bottom {
    border-top: 1px solid #166534;
  }
`;
document.head.appendChild(style);

// Create and inject the popup HTML
const popupHTML = `
<div class="promotion-popup">
  <div class="bg-white rounded-2xl max-w-md w-full relative p-6 m-4">
    <button class="absolute right-4 top-4 text-gray-500 hover:text-gray-700" onclick="closePopup()">✕</button>
    
    <div class="text-center mb-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-3">Master Cannabis Cultivation</h2>
      <p class="text-gray-600">Learn from industry legend Jorge Cervantes and other experts at THC University</p>
    </div>
    
    <ul class="space-y-2 mb-6">
      <li class="flex items-center text-gray-700">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        Expert-led video courses
      </li>
      <li class="flex items-center text-gray-700">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        Professional growing techniques
      </li>
      <li class="flex items-center text-gray-700">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        Certification programs
      </li>
      <li class="flex items-center text-gray-700">
        <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
        Industry-recognized training
      </li>
    </ul>
    
    <a href="https://thcuniversity.org/ref/usmariano/" 
       target="_blank" 
       rel="noopener noreferrer"
       class="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-center">
      Start Learning Today
    </a>
    
    <p class="text-xs text-gray-500 text-center mt-4">
      Join thousands of successful growers who've mastered their craft
    </p>
  </div>
</div>
`;

const bannerHTML = `
<div class="promotion-banner">
  <div style="max-width: 80rem; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
    <div class="flex items-center">
      <span class="font-medium">Learn Cannabis Cultivation from Industry Experts</span>
    </div>
    <a href="https://thcuniversity.org/ref/usmariano/"
       target="_blank"
       rel="noopener noreferrer"
       class="inline-block bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50">
      Enroll Now
    </a>
  </div>
</div>
`;

// Inject the HTML
document.body.insertAdjacentHTML('beforeend', popupHTML);

// Add top banner
document.body.insertAdjacentHTML('afterbegin', bannerHTML);

// Add bottom banner
document.body.insertAdjacentHTML('beforeend', bannerHTML);

// Show popup after 5 seconds
setTimeout(() => {
  document.querySelector('.promotion-popup').classList.add('active');
}, 5000);

// Close popup function
window.closePopup = function() {
  document.querySelector('.promotion-popup').classList.remove('active');
};
