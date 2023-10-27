let prenomUser = localStorage.getItem('prenom');
let submitCom = document.getElementById('submitCom')
submitCom.addEventListener("click", function () {

  // Date du message
  let dateCom = new Date();
  let jourCom = dateCom.getDay();
  let moisCom = dateCom.getMonth();
  let anneeCom= dateCom.getFullYear();
  let heuresCom = dateCom.getHours();
  let minutesCom = dateCom.getMinutes();

  let formatJourCom = jourCom.toString().padStart(2,'0');
  let formatMoisCom = moisCom.toString().padStart(2,'0');
  let formatAnneeCom = anneeCom.toString().padStart(2,'0');
  let formatHeureCom = heures.toString().padStart(2,'0');
  let formatMinutesCom = minutes.toString().padStart(2,'0');
  
  let formatHHMMSSCom= formatJourCom + "/" + formatMoisCom + "/" + formatAnneeCom + "à" + formatHeureCom + ":" + formatMinutesCom;

// Prenom
let prenomUser = localStorage.getItem('prenom');

// Commentaire
let addComField = document.getElementById("addComField");
let commentaireUser = addComField.value;

// Affichage Final
let comFinal = document.getElementById("comAuto");
comFinal.textContent = (formatHHMMSSCom + " - " + prenomUser + " : " + commentaireUser);
comFinal.style.color = 'black';
let para = document.createElement("p");
para.textContent = comFinal;
document.getElementById("boxCom").appendChild(para);
document.getElementById("para").value = "";
})
