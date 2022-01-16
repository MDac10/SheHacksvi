
$(function() {
    $(".link-btn").hide(300)

    let courses = [];
    let testCourse = {          //TODO: remove
        name: "Test Course",
        url: "link_url",
        progress: 50,
    }
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
                `<div class="course1">
                    <img src="../images/course-progress.png" alt="course progress percentage" width="170" height="170">
                    <br>
                    ${courses[i].name}
                </div>`
        }
    }

    //Progress Page

    //next steps: get progress percentage text to render & progress bar to update dynamically (on page load)
    const progressPercentage = document.getElementById("progress-percentage");
    progressPercentage.innerHTML = currentCourse.progress + "%";

    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    progressBar.style.width = progressPercentage / 100 * progressContainer.width

<<<<<<< Updated upstream
        
        

    //jQuery


});
=======
//Schedule Page
const monday = document.getElementById("monday");
monday.addEventListener("click", function() {
    console.log("clicked monday")
})

// weekdays.addEventListener("click", function() {
//     console.log(weekdays)
//     if (weekdayBtn.classList.contains("sunday")) {
//         document.getElementByID("sunday-input").classList.toggle("hidden");
//     }


>>>>>>> Stashed changes
