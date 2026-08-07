const totalStudents = 250;
const averageMarks = 84;
const topScore = 98;
const passPercentage = 96;

let studentCount = 0;
let averageCount = 0;
let topperCount = 0;
let passCount = 0;

const studentElement = document.getElementById("students");
const averageElement = document.getElementById("average");
const topperElement = document.getElementById("topper");
const passElement = document.getElementById("pass");

const counter = setInterval(() => {

    if (studentCount < totalStudents) {
        studentCount += 5;
        studentElement.innerHTML = studentCount;
    }

    if (averageCount < averageMarks) {
        averageCount++;
        averageElement.innerHTML = averageCount + "%";
    }

    if (topperCount < topScore) {
        topperCount++;
        topperElement.innerHTML = topperCount;
    }

    if (passCount < passPercentage) {
        passCount++;
        passElement.innerHTML = passCount + "%";
    }

    if (
        studentCount >= totalStudents &&
        averageCount >= averageMarks &&
        topperCount >= topScore &&
        passCount >= passPercentage
    ) {
        clearInterval(counter);
    }

}, 30);