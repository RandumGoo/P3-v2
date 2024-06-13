// DOM elements recovery
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btnSeConnecter = document.getElementById("submit");
const btnMdpOublie = document.querySelector("#forgot-password"); // fixed selector
const loginFailed = document.querySelector("#login-failed");
const modifieBtn = document.querySelector(".modification");
const tri = document.querySelector(".tri");
const editVersion = document.querySelector(".edit-mod");
const loginOut = document.querySelector(".login-logout");

// Fetch login function with token and userId recovery
btnSeConnecter.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("function called");
    const infosLog = {
        "email": emailInput.value,
        "password": passwordInput.value
    };
    console.log(infosLog);
    const infosLogJSON = JSON.stringify(infosLog);
    console.log(infosLogJSON);

    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: infosLogJSON,
        headers: {
            "Content-Type": "application/json",
        }
    }).then(function (response) {
        console.log("response received");
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 404 || response.status === 401) {
            console.log(response);
            loginFailed.innerText = "Erreur dans l'identifiant ou le mot de passe";
        } else {
            console.log("Erreur " + response.status);
        }
    }).then(function (response) {
        if (response && response.token) {
            localStorage.setItem("token", response.token);
            localStorage.setItem("userId", response.userId);
            window.location.href = "INDEX.html";
        }
    }).catch(function (error) {
        console.log(error);
    });
});

// Check if user is logged in
const connected = localStorage.getItem("token") ? true : false;

if (connected) {
    if (modifieBtn) modifieBtn.style.display = "flex";
    if (tri) tri.style.display = "none";
    if (editVersion) editVersion.style.display = "flex";
    if (loginOut) loginOut.innerText = "Logout";
}

// Logout functionality
if (loginOut) {
    loginOut.addEventListener("click", function() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "login.html"; // Redirect to login page after logout
    });
}

// Fetch additional data on page load if needed
window.addEventListener("load", fetcher);

function fetcher() {
    // Add your fetch logic here if needed
    console.log("Fetcher function called");
}
