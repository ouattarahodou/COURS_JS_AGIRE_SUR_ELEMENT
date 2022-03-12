
console.log("Merci");

//var javascript = document.getElementById("javascript")

//var section = document.getElementsByClassName("section")

//var password = document.getElementsByName("password")

//var input = document.getElementsByTagName("input")

//var css = document.querySelector("#css")
//console.log("css");


// les attributs html sont des propriétés, meme nom en minuscule, avec 
// conversion camelback ( className)
var formLine = document.querySelector(".form-line")



// innerHTML pour manipuler le contenu d'élément html 
// textContent represente le contenu textuel d'un élément
var section = document.querySelectorAll(".section")[0]


// pour manipuler le style css
/*section.style.backgroundColor="gold"
section.style.color="blue"
section.style.fontSize="1.5rem"
section.style. border="5px solid red" 
section.style.borderRadius="20px"*/

// window.getComputedStyle(section).border :: il me permet de voir le css
//que j'ai mis sur la (SECTION)


// C'EST UN EXEMPLE DE OPENCLASSROOMS
/*const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
    elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

const elt = document.getElementById('mon-lien');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
});*/

// LA PROGRAMMATION EVENEMENTIELLE, (abonnement et désabonnement) qui s'appel (listener)
var h2 = document.querySelector("section#html h2")
var listenerFuction = () =>{
    window.alert("Click détecté sur H2")
    console.log("Click détecté sur H2");
    h2.removeEventListener("Click",listenerFuction)
}
h2.addEventListener("click", listenerFuction)

//********************************************** */

window.onload =()=>{
    
}






 


