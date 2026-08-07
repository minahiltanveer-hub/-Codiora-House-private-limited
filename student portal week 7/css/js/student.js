const searchInput = document.getElementById("searchInput");
const table = document.getElementById("studentTable");
const rows = table.getElementsByTagName("tr");

searchInput.addEventListener("keyup", function () {

    const filter = searchInput.value.toUpperCase();

    for (let i = 1; i < rows.length; i++) {

        const cells = rows[i].getElementsByTagName("td");

        let found = false;

        for (let j = 0; j < cells.length; j++) {

            if (cells[j].textContent.toUpperCase().indexOf(filter) > -1) {

                found = true;
                break;

            }

        }

        rows[i].style.display = found ? "" : "none";

    }

});