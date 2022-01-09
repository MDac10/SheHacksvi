let courses = [];

//Courses page 
const addCourseBtn = document.getElementById("addCourseBtn");
addCourseBtn.addEventListener("click", function() {
    console.log("button clicked");
    document.getElementById("h1").innerHTML = "test";
    //(1) makes modal appear (change display to visible) to input course info
    document.getElementById("add-course-form").style.display = "block";
	//TODO: (4) getCourseNameAndTeacher() function (to code later) that takes a course URL
	//  and sets courseName and courseTeacher variables to their respective values
})

const submitCourseBtn = document.getElementById("submit-new-course-btn");
submitCourseBtn.addEventListener("click", function() {
    //(2) takes input bar value and adds it to Courses[] field in user object
    let inputVal = document.getElementById("course-url-field").value;
    //create new course object
    let course = {
        name: "Algorithms and Data Structures",
        url: inputVal,
        progress: 0,
    }
    courses.push(course);
    //(3) render() that displays courses
    renderCourses();
})

function renderCourses() {
    const courseList = document.getElementById("course-list");
    for (let i = 0; i < courses.length; i++) {
        courseList.innerHTML = 
            `<li class="box">
                <img src="../images/course-progress.png" alt="course proress percentage">
                ${courses[i].name}
            </li>`
    }
}

//Progress Page
const progress = document.querySelector('.progress-done');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;