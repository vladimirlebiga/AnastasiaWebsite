import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


document.addEventListener("DOMContentLoaded", function () {
 // Initialize Swiper
 const settings = {
  loop: true,
  speed: 700,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets"
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};

const swiper = new Swiper(".mySwiper", settings);


  // Function to handle the scroll to specific sections
  function scrollToId(id) {
    const section = document.querySelector(id);
    if (section) {
      setTimeout(() => {
        let headerHeight = document.querySelector("nav").offsetHeight; // Get the height of the nav bar
        window.scrollTo({
          top: section.offsetTop - headerHeight,
          behavior: "smooth",
        });
      }, 10); // Delay to account for any dynamic layout changes on page load
    }
  }

  // Check if the URL has a hash and if so, scroll to the corresponding section
  function checkHashAndScroll() {
    const hash = window.location.hash;
    if (hash) {
      scrollToId(hash);
    }
  }

  // Event listener for page links
  let links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href");
      history.pushState(null, null, sectionId);
      scrollToId(sectionId);
    });
  });

  checkHashAndScroll(); // Initial check to handle incoming hash URLs
});

