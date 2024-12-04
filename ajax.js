// Créer un objet XMLHttpRequest  pour créer une requête
let xhr = new XMLHttpRequest();
// Configurer ma requête AJAX
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
// Je vais définir mon callback
xhr.onload = function(){
    // Si j'ai un code 200 c'est que tout est ok
    if(xhr.status === 200){
        // J'affiche le résultat dans la console avec xhr.responseText
        console.log('Reponse ajax:'+JSON.parse(xhr.responseText));
    }else{
        console.log('Erreur site hébergé par Bouygues !!!'+xhr.statusText);
    }
};
// On gère les erreurs réseaux (en option)
xhr.oneerror = function(){
    console.log('Erreur réseau va chez free');
};
// Pour finir j'envoie ma requête
xhr.send();
