addEventListener("DOMContentLoaded", function(){
    navbar = document.querySelector("nav")
    const auth = localStorage.getItem("auth")
    console.log(auth)
    if (auth == 1) {
        navbar.innerHTML += `<div class="nav-links">
                                <a href="index.html">Home</a>
                                <a href="add-course.html">Add a New Course</a>
                                <a href="courses.html">View Added Courses</a>
                                <a href="registration.html">Account Registration</a>
                                <button id="logoutBtn" type="button">Log Out</button>
                            </div>`
        document.querySelector("#logoutBtn").addEventListener("click", logOut)
    }
    else {
        navbar.innerHTML += `<div class="nav-links">
                                <a href="index.html">Home</a>
                                <a href="add-course.html">Add a New Course</a>
                                <a href="courses.html">View Added Courses</a>
                                <a href="registration.html">Account Registration</a>
                                <a href="login.html">Log In</a>
                            </div>`
    }
    
})

function logOut(){
    localStorage.removeItem("auth")
    localStorage.removeItem("token")
    localStorage.removeItem("uname")
    localStorage.removeItem("type")

    window.location.replace("./index.html")
}
