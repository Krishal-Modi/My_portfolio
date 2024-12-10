//Responsive Navbar
function closeMenu() {
  document.getElementById('click').checked = false;
}




document.getElementById('openAndDownloadBtn').addEventListener('click', function() {
    // Create a new window or tab and set its location to the PDF file
    var pdfWindow = window.open('./resources/Krishal-Modi.pdf', '_blank');
    
    // Check if the window object is not null
    if (pdfWindow) {
        // Focus on the new window/tab
        pdfWindow.focus();
    } else {
        // If the window object is null, show an error message or fallback behavior
        alert('Popup blocked. Please allow popups to open the PDF.');
    }
});



// Carousel
const carousel = document.getElementById('image-carousel');
  let currentIndex = 0;
  let continuousRollCount = 0;

  function showSlide(index) {
    const newTransformValue = -index * 100 + '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel-item').length;

    if (currentIndex === 0) {
      continuousRollCount++;

      if (continuousRollCount === 2) {
        // If it has rolled twice, apply the rolling effect
        carousel.style.transition = 'none';
        currentIndex = 1; // Set to the second slide instantly
        showSlide(currentIndex);
        setTimeout(() => {
          carousel.style.transition = 'transform 0.5s ease-in-out';
          currentIndex = 0; // Set back to the first slide
          showSlide(currentIndex);
        }, 0);
        continuousRollCount = 0; // Reset the continuous roll count
      }
    } else {
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel-item').length) % document.querySelectorAll('.carousel-item').length;
    continuousRollCount = 0; // Reset the continuous roll count when going back to previous slides
    showSlide(currentIndex);
  }






