// DOM elements recovery
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const btnSeConnecter = document.getElementById("submit");
const loginFailed = document.querySelector("#login-failed");
const modifieBtn = document.querySelector(".modification");
const tri = document.querySelector(".tri");
const editVersion = document.querySelector(".edit-mod");
const loginOut = document.querySelector(".login-logout");
const modal = document.querySelector('.modal');

// Fetch login function with token and userId recovery
if (btnSeConnecter) {
    btnSeConnecter.addEventListener("click", async function (event) {
        event.preventDefault();
        const infosLog = {
            email: emailInput.value,
            password: passwordInput.value,
        };

        const infosLogJSON = JSON.stringify(infosLog);

        try {
            const response = await fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                body: infosLogJSON,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                localStorage.setItem("userId", data.userId);
                window.location.href = "INDEX.html";
            } else if (response.status === 404 || response.status === 401) {
                loginFailed.innerText = "Erreur dans l'identifiant ou le mot de passe";
            } else {
                console.error("Erreur " + response.status);
            }
        } catch (error) {
            console.error(error);
        }
    });
}

// Check if user is logged in
const connected = localStorage.getItem("token") ? true : false;

if (connected) {
    if (modifieBtn) modifieBtn.style.display = "flex";
    if (tri) tri.style.display = "none";
    if (editVersion) editVersion.style.display = "flex";
    if (loginOut) loginOut.innerText = "Logout";
    if (modal) modal.style.display = "block";
} else {
    if (modal) modal.style.display = "none";
}

// Logout functionality
if (loginOut) {
    loginOut.addEventListener("click", function(event) {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "login2.html";
    });
}

// Fetch additional data on page load if needed
window.addEventListener("load", fetcher);

async function fetcher() {
    console.log("Fetcher function called");
}
