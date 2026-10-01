let students = [];
let courses = [];
let instructors = [];
let enrollments = [];


function showSection(sectionName) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionName).classList.add("active");
}


/* Student */

function addStudent() {

    let name = document.getElementById("studentName").value;
    let email = document.getElementById("studentEmail").value;
    let phone = document.getElementById("studentPhone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please enter all student details");
        return;
    }

    students.push({
        name: name,
        email: email,
        phone: phone
    });

    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentPhone").value = "";

    displayStudents();
    updateDashboard();
}


function displayStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(function(student) {

        list.innerHTML += `
            <div class="item">
                <h3>${student.name}</h3>
                <p>Email: ${student.email}</p>
                <p>Phone: ${student.phone}</p>
            </div>
        `;

    });
}


/* Course */

function addCourse() {

    let name = document.getElementById("courseName").value;
    let category = document.getElementById("courseCategory").value;
    let duration = document.getElementById("courseDuration").value;
    let fee = document.getElementById("courseFee").value;

    if (name === "" || duration === "" || fee === "") {
        alert("Please enter all course details");
        return;
    }

    courses.push({
        name: name,
        category: category,
        duration: duration,
        fee: fee
    });

    document.getElementById("courseName").value = "";
    document.getElementById("courseDuration").value = "";
    document.getElementById("courseFee").value = "";

    displayCourses();
    updateDashboard();
}


function displayCourses() {

    let list = document.getElementById("courseList");

    list.innerHTML = "";

    courses.forEach(function(course) {

        list.innerHTML += `
            <div class="item">
                <h3>${course.name}</h3>
                <p>Category: ${course.category}</p>
                <p>Duration: ${course.duration}</p>
                <p>Course Fee: ₹${course.fee}</p>
            </div>
        `;

    });
}


/* Instructor */

function addInstructor() {

    let name = document.getElementById("instructorName").value;
    let code = document.getElementById("instructorCode").value;
    let expertise = document.getElementById("instructorExpertise").value;

    if (name === "" || code === "" || expertise === "") {
        alert("Please enter all instructor details");
        return;
    }

    instructors.push({
        name: name,
        code: code,
        expertise: expertise
    });

    document.getElementById("instructorName").value = "";
    document.getElementById("instructorCode").value = "";
    document.getElementById("instructorExpertise").value = "";

    displayInstructors();
    updateDashboard();
}


function displayInstructors() {

    let list = document.getElementById("instructorList");

    list.innerHTML = "";

    instructors.forEach(function(instructor) {

        list.innerHTML += `
            <div class="item">
                <h3>${instructor.name}</h3>
                <p>Code: ${instructor.code}</p>
                <p>Expertise: ${instructor.expertise}</p>
            </div>
        `;

    });
}


/* Enrollment */

function addEnrollment() {

    let student = document.getElementById("enrollmentStudent").value;
    let course = document.getElementById("enrollmentCourse").value;
    let status = document.getElementById("enrollmentStatus").value;

    if (student === "" || course === "") {
        alert("Please enter student and course");
        return;
    }

    enrollments.push({
        student: student,
        course: course,
        status: status
    });

    document.getElementById("enrollmentStudent").value = "";
    document.getElementById("enrollmentCourse").value = "";

    displayEnrollments();
    updateDashboard();
}


function displayEnrollments() {

    let list = document.getElementById("enrollmentList");

    list.innerHTML = "";

    enrollments.forEach(function(enrollment) {

        list.innerHTML += `
            <div class="item">
                <h3>${enrollment.student}</h3>
                <p>Course: ${enrollment.course}</p>
                <p>Status: ${enrollment.status}</p>
            </div>
        `;

    });
}


/* Dashboard */

function updateDashboard() {

    document.getElementById("studentCount").innerText =
        students.length;

    document.getElementById("courseCount").innerText =
        courses.length;

    document.getElementById("instructorCount").innerText =
        instructors.length;

    document.getElementById("enrollmentCount").innerText =
        enrollments.length;
}