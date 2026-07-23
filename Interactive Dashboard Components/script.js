const loginPage = document.getElementById("loginPage");
const dashboardPage = document.getElementById("dashboardPage");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");
const navButtons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");
const pageTitle = document.getElementById("pageTitle");
const searchInput = document.getElementById("searchInput");
const studentTable = document.getElementById("studentTable");
const saveSettings = document.getElementById("saveSettings");
const saveMessage = document.getElementById("saveMessage");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        loginMessage.textContent = "Please fill all fields";
        loginMessage.style.color = "red";
        return;
    }

    loginPage.style.display = "none";
    dashboardPage.style.display = "block";
});

navButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const sectionId = button.getAttribute("data-section");

        navButtons.forEach(function(navButton) {
            navButton.classList.remove("active");
        });

        button.classList.add("active");

        sections.forEach(function(section) {
            section.classList.remove("active-section");
        });

        document.getElementById(sectionId).classList.add("active-section");

        pageTitle.textContent = button.textContent;
    });
});

logoutBtn.addEventListener("click", function() {
    dashboardPage.style.display = "none";
    loginPage.style.display = "flex";

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
});

searchInput.addEventListener("keyup", function() {
    const searchValue = searchInput.value.toLowerCase();
    const rows = studentTable.querySelectorAll("tr");

    rows.forEach(function(row) {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

saveSettings.addEventListener("click", function() {
    saveMessage.textContent = "Settings saved successfully";
    saveMessage.style.color = "green";
});