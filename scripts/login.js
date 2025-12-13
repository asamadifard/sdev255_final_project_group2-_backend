let token

addEventListener("DOMContentLoaded", function(){
    document.querySelector("#submit").addEventListener("click", login)
    checkbox = document.querySelector("#typeToggle")
})

async function login(){
    if (checkbox.checked == true) {
        loginType = "instructor"
    }
    else {
        loginType = "student"
    }

    const login_cred = {
        username : document.querySelector("#username").value,
        password : document.querySelector("#password").value,
        type : loginType
    }

    const response = await fetch("http://localhost:3000/api/auth/", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(login_cred)
    })

    if(response.ok){
        const tokenResponse = await response.json()
        token = tokenResponse.token
        uname = tokenResponse.username2
        auth = tokenResponse.auth
        type = tokenResponse.type

        localStorage.setItem("token", token)
        localStorage.setItem("uname", uname)
        localStorage.setItem("auth", auth)
        localStorage.setItem("type", type)

        alert("Logged in successfully")
        window.location.replace("./index.html")
    }
    else{
        document.querySelector("#errorMsg").innerHTML = "Bad username/password"
    }
}