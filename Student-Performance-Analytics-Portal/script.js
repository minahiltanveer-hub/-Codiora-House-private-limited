function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const marks = document.getElementById("studentMarks").value;

    alert("Student " + name + " added successfully with " + marks + " marks!");

    document.getElementById("studentForm").reset();
});