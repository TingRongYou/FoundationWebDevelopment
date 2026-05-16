$(document).ready(function () {
  // Get all animation sections
  var animationSections = document.querySelectorAll('.animation-section');

  // Function to check if an element is in the viewport
  function isInViewport(element, threshold = 0.5) {
    var rect = element.getBoundingClientRect();
    var height = rect.bottom - rect.top;
    return (
      rect.top + height * threshold >= 0 &&
      rect.bottom - height * threshold <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Function to handle scroll events
  function handleScroll() {
    animationSections.forEach(function (section) {
      if (isInViewport(section)) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  // Initial check on page load
  handleScroll();

  // Attach the handleScroll function to the scroll event
  window.addEventListener('scroll', handleScroll);
});


const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})