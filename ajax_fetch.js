// Utilisation de la méthode fetch pour notre requête ajax
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>{
    // Si la réponse est autre que 200
    if(!response.ok){
        console.log('Erreur de la requête');
        return false; // J'arrête l'exécution du script
    }
    // Je retourne ma réponse en JSON
    return response.json();
})
.then(data =>{
    // Je retourne les infos de ma requêtes
    console.log('Résultat '+data);
})
.catch(error =>{
    // Si il y a une erreur réseau (vive bouygues) ou autre
    console.log('Erreur '+error);
});