// document.addEventListener("DOMContentLoaded", function () {
//   // Function to handle the scroll
//   function scrollToSection(event) {
//     event.preventDefault(); // Prevent the default anchor click behavior
//     let sectionId = this.getAttribute("href"); // Get the href attribute of the clicked link
//     let headerHeight = document.querySelector("nav").offsetHeight; // Get the height of the nav bar
//     let section = document.querySelector(sectionId);
//     window.scrollTo({
//       top: section.offsetTop - headerHeight, // Adjust scroll position to be just below the nav
//       behavior: "smooth",
//     });
//   }

//   // Attach the event listener to multiple links
//   let links = document.querySelectorAll('a[href^="#"]'); // Select all links that link to an ID
//   links.forEach((link) => {
//     link.addEventListener("click", scrollToSection);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
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
