
const form = document.querySelector(".form-login");
const modifieBtn = document.querySelector(".modification");
const tri = document.querySelector(".tri");
const editVersion = document.querySelector(".edit-mod");
//const loginOut = document.querySelector(".login-logout");

const connected = localStorage.getItem("token de connexion") ? true : false;

if (connected) {
  modifieBtn.style.display = "flex";
  tri.style.display = "none";
  editVersion.style.display = "flex";
  loginOut.innerText = "Logout";
}

// //LOG OUT!! a la fermeture onglet / redirection & Rechargement pour la sécurité
// function removeToken() {
//   // Supprime le token du localStorage
//   localStorage.removeItem("token de connexion");
// }

// //événement fermeture onglet ou redirection vers un autre site
// window.addEventListener("unload", removeToken);

window.addEventListener("load", fetcher);
