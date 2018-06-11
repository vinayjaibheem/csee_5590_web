// Function for displaying the course info based on user selection
function displayCourses() {
    "use strict";
    var education = document.getElementById("education_select").value;
    var career = document.getElementById("career_select").value;
    if (education === "Bachelor Degree" && career === "Computer Science") {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./registration.html">CSEE 5590</a>
                </td>
                <td>Dr. Sam</td>
                <td>Web/Mobile/Cloud programming</td>
                <td>3</td>
                <td>Tu and Thu from 1:00 P.M. to 4:00 P.M.</td>
            </tr>
        `;
    } else if (education === "Bachelor" && career === "Electronics") {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./registration.html">EE 491</a>
                </td>
                <td>Dr. Zham</td>
                <td>None</td>
                <td>3</td>
                <td>Monday from 8:00 A.M. to 9:45 A.M.</td>
            </tr>
        `;
    } else {
        document.getElementById("course_info").innerHTML = `
            <tr>
                <td>
                    <a href="./registration.html">CS 5551</a>
                </td>
                <td>Dr. Sing</td>
                <td>Software Engineering CS 441</td>
                <td>3</td>
                <td>Friday from 2:00 P.M. to 05:00 P.M.</td>
            </tr>
        `;
    }
}

// Function for registering the class
function register() {
    "use strict";
    var total = parseInt(document.getElementById("total").innerText);
    var available = parseInt(document.getElementById("available").innerText);
    if (available !== 0) {
        document.getElementById("available").innerHTML = available - 1;
        document.getElementById("total").innerHTML = total + 1;
        document.getElementById("success").style.visibility = "visible";
        document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("success").style.visibility = "hidden";
        document.getElementById("success").style.display = "none";
        document.getElementById("fail").style.visibility = "visible";
        document.getElementById("fail").style.display = "block";
    }
}