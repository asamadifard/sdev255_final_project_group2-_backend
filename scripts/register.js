addEventListener("DOMContentLoaded", function(){
    document.querySelector("#typeToggle").addEventListener("change", toggleField)
    checkbox = document.querySelector("#typeToggle")
    if (checkbox.checked == true) {
        checkbox.checked = false
    }
    toggleMe = document.querySelector("#instructorCodeField")

    document.querySelector("#submit").addEventListener("click", register)
})

function toggleField(){
    console.log("a")
    if (toggleMe.innerHTML == ""){
        addField()
    }
    else {
        removeField()
    }
}
function addField(){
    html = ""
    toggleMe.innerHTML = `<label for="instructorCode">Instructor Code:</label> <input type="text" id="instructorCode">`
}

function removeField(){
    html = ""
    toggleMe.innerHTML = html
}

async function register(){
    if (checkbox.checked == false) { // STUDENTS
        const newUser = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            status: "Online"
        }

        const response = await fetch('http://localhost:3000/api/new_student', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })
        if (response.ok){
        alert("Registered!")
        }

        else {
            document.querySelector("#error").innerHTML = `Could not register... ${response.err}`
        }
    }
    else { // TEACHERS
        const newUser = {
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value,
            specialCode: document.querySelector("#instructorCode").value,
            status: "Online"
        }

        const response = await fetch('http://localhost:3000/api/new_instructor', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newUser)
        })

        if (response.ok){
        alert("Registered!")
        }

        else {
            document.querySelector("#error").innerHTML = `Could not register... ${response.error}`
        }
    }
}