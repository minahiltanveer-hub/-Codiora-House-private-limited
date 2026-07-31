function login() {
    let role = document.getElementById("role").value;

    if (role === "") {
        alert("Please select a role.");
        return;
    }

    if (role === "admin") {
        window.location.href = "admin.html";
    } else if (role === "teacher") {
        window.location.href = "teacher.html";
    } else if (role === "student") {
        window.location.href = "student.html";
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function showNotification() {
    let notification = document.getElementById("notification");

    if (notification.style.display === "block") {
        notification.style.display = "none";
    } else {
        notification.style.display = "block";
    }
}