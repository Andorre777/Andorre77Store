// users.js

// === Enregistrement (inscription) ===
function registerUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log("✅ Compte créé :", user.email);

      // Tu peux aussi enregistrer d'autres infos dans la DB
      firebase.database().ref("users/" + user.uid).set({
        email: user.email,
        uid: user.uid,
        createdAt: new Date().toISOString()
      });

      alert("Compte créé avec succès !");
      window.location.href = "login.html";
    })
    .catch(error => {
      console.error("❌ Erreur lors de l'inscription :", error.message);
      alert(error.message);
    });
}

// === Connexion ===
function loginUser(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      console.log("✅ Connecté :", user.email);
      alert("Connexion réussie !");
      window.location.href = "index.html"; // ou autre page
    })
    .catch(error => {
      console.error("❌ Erreur de connexion :", error.message);
      alert("Email ou mot de passe incorrect !");
    });
}

// === Vérifier si utilisateur est connecté ===
function checkAuthState(callbackIfLoggedIn, callbackIfNot) {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      callbackIfLoggedIn(user);
    } else {
      callbackIfNot();
    }
  });
}

// === Déconnexion ===
function logoutUser() {
  firebase.auth().signOut().then(() => {
    alert("Déconnecté avec succès !");
    window.location.href = "login.html";
  });
}
