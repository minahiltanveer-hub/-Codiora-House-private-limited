let students = [
    {
        name: "Ali Khan",
        email: "ali@gmail.com",
        age: 21,
        gender: "Male",
        status: "Active"
    },
    {
        name: "Sara Ahmed",
        email: "sara@gmail.com",
        age: 22,
        gender: "Female",
        status: "Active"
    },
    {
        name: "Usman Malik",
        email: "usman@gmail.com",
        age: 23,
        gender: "Male",
        status: "Inactive"
    },
    {
        name: "Ayesha Noor",
        email: "ayesha@gmail.com",
        age: 20,
        gender: "Female",
        status: "Active"
    },
    {
        name: "Hamza Ali",
        email: "hamza@gmail.com",
        age: 24,
        gender: "Male",
        status: "Inactive"
    },
    {
        name: "Hina Shah",
        email: "hina@gmail.com",
        age: 21,
        gender: "Female",
        status: "Active"
    }
];

let currentPage = 1;
const studentsPerPage = 4;
let filteredStudents = students;


/* Display Students */
function displayStudents() {

    const tableBody =
        document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    const start =
        (currentPage - 1) * studentsPerPage;

    const end =
        start + studentsPerPage;

    const pageStudents =
        filteredStudents.slice(start, end);

    pageStudents.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.age}</td>
            <td>${student.gender}</td>
            <td>${student.status}</td>
        `;

        tableBody.appendChild(row);
    });

    document.getElementById("pageNumber").textContent =
        `Page ${currentPage}`;
}


/* Search and Filter */
function applyFilters() {

    const searchValue =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const genderValue =
        document.getElementById("genderFilter").value;

    const statusValue =
        document.getElementById("statusFilter").value;

    filteredStudents = students.filter(student => {

        const matchesSearch =
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue);

        const matchesGender =
            genderValue === "all" ||
            student.gender === genderValue;

        const matchesStatus =
            statusValue === "all" ||
            student.status === statusValue;

        return matchesSearch &&
               matchesGender &&
               matchesStatus;
    });

    currentPage = 1;

    displayStudents();
}


document
    .getElementById("searchInput")
    .addEventListener("input", applyFilters);

document
    .getElementById("genderFilter")
    .addEventListener("change", applyFilters);

document
    .getElementById("statusFilter")
    .addEventListener("change", applyFilters);


/* Pagination */

document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

        const maxPage =
            Math.ceil(
                filteredStudents.length /
                studentsPerPage
            );

        if (currentPage < maxPage) {
            currentPage++;
            displayStudents();
        }
    });


document
    .getElementById("previousBtn")
    .addEventListener("click", () => {

        if (currentPage > 1) {
            currentPage--;
            displayStudents();
        }
    });


/* Add Student Form */

document
    .getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("studentName").value.trim();

        const email =
            document.getElementById("studentEmail").value.trim();

        const age =
            document.getElementById("studentAge").value;

        const gender =
            document.getElementById("studentGender").value;

        const status =
            document.getElementById("studentStatus").value;

        const errorMessage =
            document.getElementById("errorMessage");


        if (
            name === "" ||
            email === "" ||
            age === "" ||
            gender === "" ||
            status === ""
        ) {

            errorMessage.textContent =
                "Please fill all fields.";

            return;
        }


        if (age < 16 || age > 100) {

            errorMessage.textContent =
                "Age must be between 16 and 100.";

            return;
        }


        students.push({

            name: name,
            email: email,
            age: Number(age),
            gender: gender,
            status: status

        });


        errorMessage.textContent =
            "Student added successfully!";

        this.reset();

        filteredStudents = students;

        displayStudents();

        updateStatistics();

        updateCharts();
});


/* Statistics */

function updateStatistics() {

    document
        .getElementById("totalStudents")
        .textContent = students.length;


    const totalAge =
        students.reduce(
            (sum, student) => sum + student.age,
            0
        );


    const averageAge =
        totalAge / students.length;


    document
        .getElementById("averageAge")
        .textContent =
        averageAge.toFixed(1);


    const activeStudents =
        students.filter(
            student => student.status === "Active"
        ).length;


    document
        .getElementById("activeStudents")
        .textContent =
        activeStudents;
}


/* Notifications */

document
    .getElementById("notificationBtn")
    .addEventListener("click", () => {

        const box =
            document.getElementById("notificationBox");

        if (box.style.display === "block") {
            box.style.display = "none";
        } else {
            box.style.display = "block";
        }
    });


/* CSV Export */

function exportCSV() {

    let csv =
        "Name,Email,Age,Gender,Status\n";

    students.forEach(student => {

        csv += `${student.name},${student.email},${student.age},${student.gender},${student.status}\n`;

    });

    const blob =
        new Blob([csv], {
            type: "text/csv"
        });

    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        "students.csv";

    link.click();
}


/* PDF Export */

function exportPDF() {

    const { jsPDF } =
        window.jspdf;

    const doc =
        new jsPDF();

    doc.text(
        "Student Records",
        14,
        15
    );

    const tableData =
        students.map(student => [

            student.name,
            student.email,
            student.age,
            student.gender,
            student.status

        ]);

    doc.autoTable({

        head: [[
            "Name",
            "Email",
            "Age",
            "Gender",
            "Status"
        ]],

        body: tableData

    });

    doc.save("students.pdf");
}


/* Charts */

let genderChart;
let statusChart;


function updateCharts() {

    const maleCount =
        students.filter(
            student => student.gender === "Male"
        ).length;

    const femaleCount =
        students.filter(
            student => student.gender === "Female"
        ).length;

    const activeCount =
        students.filter(
            student => student.status === "Active"
        ).length;

    const inactiveCount =
        students.filter(
            student => student.status === "Inactive"
        ).length;


    if (genderChart) {
        genderChart.destroy();
    }

    if (statusChart) {
        statusChart.destroy();
    }


    genderChart = new Chart(

        document.getElementById("genderChart"),

        {
            type: "doughnut",

            data: {

                labels: [
                    "Male",
                    "Female"
                ],

                datasets: [{

                    data: [
                        maleCount,
                        femaleCount
                    ]

                }]
            }
        }
    );


    statusChart = new Chart(

        document.getElementById("statusChart"),

        {
            type: "bar",

            data: {

                labels: [
                    "Active",
                    "Inactive"
                ],

                datasets: [{

                    label: "Students",

                    data: [
                        activeCount,
                        inactiveCount
                    ]

                }]
            }
        }
    );
}


/* Initial Load */

displayStudents();

updateStatistics();

updateCharts();