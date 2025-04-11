const nom=document.getElementById("nom");
const prenom=document.getElementById("prenom");
const genre=document.getElementById("genre");
const telephone=document.getElementById("telephone");
const email=document.getElementById("email");
const photo=document.getElementById("photo");

//4. Fetch url image de l'utilisateur
async function fetchRandomUsr(){
    const request = await fetch("https://randomuser.me/api/?results=20");
    const response = await request.json();
    
    
for (let i = 0; i < response.results.length; i++) {


        const resultat =response.results[i];
        const cardecontainer=document.getElementById("cardecontainer");
        console.log(resultat)

        cardecontainer.innerHTML += `<div id="section1">
      <div class="main-left">
        <img id="photo" src="${resultat.picture.large}" />
      </div>
      <div class="main-right">
        <ul>
          <li id="nom">${resultat.name.last}</li>
          <li id="prenom">${resultat.name.first}</li>
          <li id="genre">${resultat.name.title}</li>
          <li id="telephone">${resultat.phone}</li>
          <li id="email">${resultat.email}</li>
        </ul>
      </div>
     
    </div>
     <h1>CARTE DE VISITE</h1>`
   
   
console.log(resultat.name.last)
console.log(resultat.name.first)
console.log(resultat.name.title)
console.log(resultat.phone)
console.log(resultat.email)
console.log(resultat.picture.medium)

}
};
fetchRandomUsr()

