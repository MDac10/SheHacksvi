let courses = [];

//Courses page 
const addCourseBtn = document.getElementById("addCourseBtn");
function testFunction() {
    document.getElementById("add-course-form").style.display = "block";
	//TODO: (4) getCourseNameAndTeacher() function (to code later) that takes a course URL
	//  and sets courseName and courseTeacher variables to their respective values 
}

const submitCourseBtn = document.getElementById("submit-new-course-btn");
submitCourseBtn.addEventListener("click", function() {
    const urlField = document.getElementById("course-url-field");
    let inputVal = urlField.value;
    document.getElementById("add-course-form").style.display = "none";
    let course = {
        name: inputVal,
        url: inputVal,
        progress: 0,
    }
    courses.push(course);
    renderCourses();
    urlField.value = "";
})

//TODO: Courses don't wrap around page when more than 2 are added
function renderCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    for (let i = 0; i < courses.length; i++) {
        courseList.innerHTML += 
            `<td class="course1">
                <img src="../images/course-progress.png" alt="course progress percentage" width="170" height="170">
                <br>
                ${courses[i].name}
            </td>`
    }
}

//Progress Page
const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;