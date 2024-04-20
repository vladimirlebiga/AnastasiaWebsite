// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let contactLink = document.querySelector('a[href="#contact"]');
//   contactLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     let headerHeight = document.querySelector("nav").offsetHeight; // Get the height of the nav bar
//     let contactSection = document.querySelector("#contact");
//     window.scrollTo({
//       top: contactSection.offsetTop - headerHeight, // Adjust scroll position to be just below the nav
//       behavior: "smooth",
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the scroll
  function scrollToSection(event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    let sectionId = this.getAttribute("href"); // Get the href attribute of the clicked link
    let headerHeight = document.querySelector("nav").offsetHeight; // Get the height of the nav bar
    let section = document.querySelector(sectionId);
    window.scrollTo({
      top: section.offsetTop - headerHeight, // Adjust scroll position to be just below the nav
      behavior: "smooth",
    });
  }

  // Attach the event listener to multiple links
  let links = document.querySelectorAll('a[href^="#"]'); // Select all links that link to an ID
  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
});
