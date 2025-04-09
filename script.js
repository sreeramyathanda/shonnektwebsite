document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded ✅");

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked 🍔");
    navLinks.classList.toggle("active");
  });

  // --- Form submission to Google Sheets ---
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxVB47q9tT9mzf6ieaScasvNZRcPpMKZnPBo3IhT4-ZfBfYgT958pD0eLS71kUkPcfj/exec';
  const form = document.forms['submit-to-google-sheet'];
  const status = document.getElementById('form-status');
  const thankYou = document.getElementById('thank-you-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.style.display = "block";
      status.textContent = "Submitting...";

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          console.log('Success!', response);
          status.style.display = "none";
          thankYou.style.display = "block";
          form.reset();

          // Hide the thank you message after a few seconds (optional)
          setTimeout(() => {
            thankYou.style.display = "none";
          }, 5000);
        })
        .catch(error => {
          console.error('Error!', error.message);
          status.textContent = "Oops, something went wrong.";
        });
    });
  }

  // --- Carousel Tap Effect for Mobile ---
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    carousel.addEventListener('touchstart', () => {
      carousel.style.transform = 'scale(1.02)';
      setTimeout(() => {
        carousel.style.transform = 'scale(1)';
      }, 200);
    });
  });
});
