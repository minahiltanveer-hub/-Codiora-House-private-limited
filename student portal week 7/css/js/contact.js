const form = document.getElementById("contactForm");

const success = document.getElementById("successMessage");

form.addEventListener("submit", function(e){

e.preventDefault();

success.innerHTML = "Your message has been sent successfully.";

form.reset();

});