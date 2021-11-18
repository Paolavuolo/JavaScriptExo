// Le nombre Factorielle 

let ChooseNbr = window.prompt("Entre un nombre entier stpl"); //on défini la variable qui demande le nombre
n = Number(ChooseNbr); //on injecte la variable du nombre choisi dans une autre variable

function fact(x){ //on créé la fonction qui va calculer le factorielle
    if (x<0) throw new Error('Il faut un entier positif') //pas possibilité de rentrer un nombre négatif
    if (x <= 1) return 1;
    else return x*fact(x-1); //calcul du nombre factorielle, avec pour facteur x-1
}
try { // permet d'afficher une fenêtre Windows avec le résultat 
    Result= fact(n); //ici on défini la variable Result qui est le résultat du calcul 
    window.alert("factoriel ("+n+") =" +Result); //affichage du message
}
catch(e) { //création du message d'erreur, complémentaire a la fonction throw new plus haut
    if (e instanceof Error) { 
        window.alert(e.name + " : " + e.message); //affiche le message d'erreur sous la forme Erro : " message défini dans notre fonction plus haut"
    }
}


