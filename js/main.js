//main.js du programme Cursor v0.0.1
//Restauration de la sauvegarde du numero
//alert('Bonjour ! ');

var num_ordre;
if (localStorage.getItem('numOrdre1') === null){
  num_ordre = 0;
}else{
  num_ordre = localStorage.getItem('numOrdre1');
}

var appeler = function(num_guichet, num_client){
  alert("Le numéro "+ num_client +" est appelé au guichet N°" + num_guichet);
};

alert(num_ordre);
var suivant = function(){
  num_ordre++;
  localStorage.setItem('numOrdre1', num_ordre);
};

// En attente d'une touche pressé.
window.addEventListener('keydown', whatKey, true);

function whatKey(e) {
    switch (e.keyCode) {
        // Flèche gauche.
        case 37:
            suivant();
            appeler('1', num_ordre);
            break;

        // Flèche droite.
        case 39:
            suivant();
            appeler('2', num_ordre);
            break;
    }
}
