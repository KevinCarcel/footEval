let prenomBjr = localStorage.getItem('prenom');
let bonjour1 = document.getElementById('bonjour1');

bonjour1.textContent = ('Bienvenue ' + prenomBjr );
bonjour1.style.fontStyle = 'lighter';
bonjour1.style.color = "grey";

let dateJour = new Date ();
let bonjour2 = document.getElementById('bonjour2');

bonjour2.textContent = ('Nous sommes le ' + dateJour.toLocaleDateString("fr"));
bonjour2.style.fontStyle = 'lighter';
bonjour2.style.color = "grey";

let dateCo = new Date();
let heures = dateCo.getHours();
let minutes = dateCo.getMinutes();
let secondes = dateCo.getSeconds();

let formatHeure = heures.toString().padStart(2,'0');
let formatMinutes = minutes.toString().padStart(2,'0');
let formatSecondes = secondes.toString().padStart(2,'0');

let formatHHMMSS= formatHeure + ":" + formatMinutes + ":" + formatSecondes;

let bonjour3 = document.getElementById('bonjour3');

bonjour3.textContent = ('Vous vous êtes connectés à : ' + formatHHMMSS);
bonjour3.style.fontStyle = 'lighter';
bonjour3.style.color = "grey";