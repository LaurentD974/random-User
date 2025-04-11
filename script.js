const nom=document.getElementById("nom");
const prenom=document.getElementById("prenom");
const genre=document.getElementById("genre");
const telephone=document.getElementById("telephone");
const email=document.getElementById("email");
const photo=document.getElementById("photo");

//4. Fetch url image de l'utilisateur
async function fetchRandomUsr(){
    const request = await fetch("https://randomuser.me/api/");
    const response = await request.json();
    const resultat = response.results[0]

    nom.innerHTML = resultat.name.last
    prenom.innerHTML = resultat.name.first
    genre.innerHTML = resultat.name.title
    telephone.innerHTML = resultat.phone
    email.innerHTML = resultat.email
    photo.src = resultat.picture.large
    
console.log(resultat.name.last)
console.log(resultat.name.first)
console.log(resultat.name.title)
console.log(resultat.phone)
console.log(resultat.email)
console.log(resultat.picture.medium)

}

fetchRandomUsr()


  

  
