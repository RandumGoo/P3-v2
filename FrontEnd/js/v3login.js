 const requestOptions = {
       method: "POST",
       body: formData,
       headers: {
         accept: "application/json",
         Authorization: `Bearer ${localStorage.getItem("token de connexion")}`,
       },
     };

     fetch("http://localhost:5678/api/works", requestOptions)
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
       })
       .catch((error) => {
         console.error("Erreur lors de l'envoi de la requête:", error);
       });
   } else {
     event.preventDefault();
     console.error("Aucun fichier sélectionné.");
}
});

 //LOG OUT!! a la fermeture onglet / redirection & Rechargement pour la sécurité
 function removeToken() {
   // Supprime le token du localStorage
   localStorage.removeItem("token de connexion");
 }

 //événement fermeture onglet ou redirection vers un autre site
 window.addEventListener("unload", removeToken);