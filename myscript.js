let nome = prompt('inserisci nome');
let cognome= prompt('inserisci cognome');
let colore= prompt('inserisci colore preferito');

let pass=  nome + cognome + colore + '22'
console.log(pass);

document.getElementById('output').innerHTML= pass;