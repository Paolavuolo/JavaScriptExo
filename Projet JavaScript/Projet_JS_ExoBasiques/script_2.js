// Pyramide de Mario

let Rows = window.prompt("Choisi le nombre d'étages que tu veux ")
n = Number(Rows) //création d'une variable qui contient le nbr 
    
    // création de la fonction pyramide 
    function Pyramid(n){
    // message d'erreur si nombre negatif
    if (n<0) throw new Error('il faut un nombre positif')
    //creation de plusieur boucle
    for (let i = 0; i < n; i++) { //i doit être a 0, il ne doit pas dépasser n et la variable augmente a chaque tour jusqu'a atteindre n 
        str = ""; //on créé notre variable

        for (let j = 0; j < n-1; j++) { //j doit être inférieur a n-1
            str += " "; //on ajoute les espaces a notre varibales
        }
        for (let k=0; k <= i; k++) { // k ne doit pas dépasser i donc n
            str += " #"; //on a joute les tag coté droit 
        }
        console.log(str)
    }
}

console.log(Pyramid(n));

