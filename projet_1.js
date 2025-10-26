 const sidebar = document.querySelector(".sidebar");
const slideshow = document.querySelector(".slideshow");
document.getElementById("home_page").addEventListener("click", () => { sidebar.style.display = "block" ; slideshow.style.display = "none" ; });
document.getElementById("def").addEventListener("click", () => {definitions.style.display = "block" ; });
document.getElementById("fondateurs").addEventListener("click", () => {profils.style.display = "block" ; definitions.style.display = "none" ; });
/* Les lignes 2 & 3 sont des initialisations appliquées sur des class mais pas sur des id, j'ignore pourquoi */