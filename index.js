window.onload = (event) => {
    //Progress Page: progress bar
    const progressPercentage = document.getElementById("progress-percentage");
    progressPercentage.innerHTML = currentCourse.progress + "%";

    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = testCourse.progress + '%';
  };


let testCourse = {         
    name: "Test Course",
    url: "link_url",
    progress: 30,
}
let courses = [testCourse]; //TODO: empty
let currentCourse = testCourse; //TODO: change to null; this is just a placeholder

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
    setCurrentCourse(course);
    renderCourses();
    urlField.value = "";
})

function setCurrentCourse(course) {
    currentCourse = course;
}

//TODO: Courses don't wrap around page when more than 2 are added
function renderCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";
    for (let i = 0; i < courses.length; i++) {
        courseList.innerHTML += 
            `<div class="course1" id="course-item">
                ${courses[i].name}
                <br>
                <div class="progress-container-courses">
                    <div id="progress-bar-courses">
                    </div>
                </div>
                Course Progress: ${courses[i].progress}%
            </div>`
        document.getElementById("progress-bar-courses").style.width = "30%"; //this is setting that for all courses of this div
    } //here, make the progress-bar-courses width the correct

    // Add a class in the div using .classList.add()
    // Target the div of that class of that class and change its width


    //Set correct ID's
    // - for each course in courses.length, give them an id that is course + i
    // - set the course width of element that has progress-bar-courses to courses[i].progress + %
}

//Progress Page

//next steps: get progress percentage text to render & progress bar to update dynamically (on page load)




//Schedule Page

function submitSchedule() {
    console.log("I'm clicked!")
}

function openSunday() {
    toggleCorrectWeekday("sunday-input");
}

function openMonday() {
    toggleCorrectWeekday("monday-input");
}

function openTuesday() {
    toggleCorrectWeekday("tuesday-input");
}

function openWednesday() {
    toggleCorrectWeekday("wednesday-input");
}

function openThursday() {
    toggleCorrectWeekday("thursday-input");
}

function openFriday() {
    toggleCorrectWeekday("friday-input");
}

function openSaturday() {
    toggleCorrectWeekday("saturday-input");
}

function toggleCorrectWeekday(className) {
    const inputElement = document.getElementById(className);
    inputElement.classList.toggle("hidden");
}
