// users.js

// Fonction pour récupérer les utilisateurs depuis localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem("users") || "[]");
}

// Fonction pour sauvegarder un nouvel utilisateur
function saveUser(newUser) {
  const users = getUsers();
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

// Fonction de vérification login
function loginUser(email, password) {
  const users = getUsers();
  return users.find(user => user.email === email && user.password === password);
}
