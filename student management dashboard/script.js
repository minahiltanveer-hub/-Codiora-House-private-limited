let students = [
    {
        name: "Ali Khan",
        email: "ali@example.com",
        course: "Computer Science",
        marks: 88,
        attendance: 92
    },
    {
        name: "Sara Ahmed",
        email: "sara@example.com",
        course: "Software Engineering",
        marks: 94,
        attendance: 96
    },
    {
        name: "Hassan Raza",
        email: "hassan@example.com",
        course: "Information Technology",
        marks: 76,
        attendance: 85
    },
    {
        name: "Ayesha Malik",
        email: "ayesha@example.com",
        course: "Computer Science",
        marks: 91,
        attendance: 90
    }
];

function displayStudents(data = students) {
    const container = document.getElementById("studentContainer");

    container.innerHTML = "";

    data.forEach(student => {
        container.innerHTML += `
            <div class="student-card">
                <h3>${student.name}</h3>
                <p><strong>Email:</strong> ${student.email}</p>
                <p><strong>Course:</strong> ${student.course}</p>
                <p><strong>Marks:</strong> ${student.marks}%</p>
                <p><strong>Attendance:</strong> ${student.attendance}%</p>
            </div>
        `;
    });

    updatePerformance(data);
}

function updatePerformance(data) {
    document.getElementById("totalStudents").textContent = data.length;

    const averageMarks = data.reduce((sum, student) => sum + student.marks, 0) / data.length;
    const averageAttendance = data.reduce((sum, student) => sum + student.attendance, 0) / data.length;

    document.getElementById("averageMarks").textContent = Math.round(averageMarks) + "%";
    document.getElementById("averageAttendance").textContent = Math.round(averageAttendance) + "%";
}

function searchStudents() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchValue) ||
        student.course.toLowerCase().includes(searchValue) ||
        student.email.toLowerCase().includes(searchValue)
    );

    displayStudents(filteredStudents);
}

function sortStudents() {
    const sortValue = document.getElementById("sortSelect").value;

    let sortedStudents = [...students];

    if (sortValue === "name") {
        sortedStudents.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortValue === "marks") {
        sortedStudents.sort((a, b) => b.marks - a.marks);
    }

    if (sortValue === "attendance") {
        sortedStudents.sort((a, b) => b.attendance - a.attendance);
    }

    displayStudents(sortedStudents);
}

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function openRegister() {
    document.getElementById("registerModal").style.display = "flex";
}

function openForgotPassword() {
    closeModal("loginModal");
    document.getElementById("forgotModal").style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");

    closeModal("registerModal");
}

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
        alert("Login successful!");
        closeModal("loginModal");
    } else {
        alert("Invalid email or password!");
    }
}

function resetPassword(event) {
    event.preventDefault();

    const email = document.getElementById("resetEmail").value;

    alert("Password reset link sent to " + email);

    closeModal("forgotModal");
}

function showStudents() {
    document.getElementById("students").scrollIntoView({
        behavior: "smooth"
    });
}

window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

displayStudents();