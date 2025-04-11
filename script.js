//1. Récupère le btn par son identifiant
const btn = document.getElementById("btnApi");
const imgContainer = document.getElementById("img-container");

//Afficher l'élément dans la console.
// console.log(btn);

//2. Ajoute l'evenement sur le btn
btn.addEventListener("click", fetchRandomUsr);

//3 . Fonction qui se déclenche au clic
function updateImgContainer(){
    imgContainer.innerHTML = "<a href='https://google.fr'> aller sur google </a>"
}

//4. Fetch url image du chien 
async function fetchRandomUsr(){
    const request = await fetch("https://randomuser.me/api/");
    const response = await request.json();
    const urlImage = response.message;   
   
    // Extraire la race de l'URL de l'image
    const breed = urlImage.split('/')[4].replace('-', ' '); // Remplace le tiret par un espace pour une meilleure présentation

    // Afficher l'image et la race
    imgContainer.innerHTML = `
        <img src="${urlImage}" alt="user"/>
        <p>nom : ${breed}</p>
    `;
}



  

  
