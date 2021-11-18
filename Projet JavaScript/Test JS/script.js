//Test 1 : les variables
/*
let data1 = "variable en let définie dans le bloc prinicpal";

{
    data1 = "variable en let définie dans le sous-bloc";
    var data2 = "variable en var définie dans le sous-bloc";
    let data3 = "variable en let définie dans le sous-bloc";
}

console.log(data1);
console.log(data2);
console.log(data3); //erreur cette data n'est pas visible dans le bloc principale 
*/

// Test 2 : Les opérateurs
/*
let a = 1;
let b = 1;

a++

console.log(a);
console.log(b += 2);
*/

// Test 3 : opération de string
/*
let a = "Bonjour", b = "Monde";
console.log(a + " " + b);
*/

//Test 4 : Les arrays
/*
let statusDeTHP = ["Moussaillon","Corsaire","Renégat"];

console.log(statusDeTHP[0]); // selectionne un élément 
console.log(statusDeTHP.length); //taille de l'array
console.log(statusDeTHP[0]="La moussaille"); //modifie la valeur de l'élément
console.log(statusDeTHP.push("Mentor")); //rajoute un élément a la fin
console.log(statusDeTHP.unshift("Mousse")); //rajoute un élément au début
console.log(statusDeTHP.pop()); //supprime l' élément du début
console.log(statusDeTHP.shift()); //supprime l'élément de la fin
console.log(statusDeTHP.splice(0.2)) // supprime deux éléments a partir de l'indice 0
console.log(statusDeTHP.slice(2.4)); // selectionne deux éléments 
*/

//Test 5 : les string
/*
let a = 3;
console.log("Bonjour à tous les " + a); //string plus notre variable
console.log(a + "3"); 

let numStudent = 4;
let statement = `Dans mon groupe on est ${numStudent} moussaillons`; //ajoute directement la varibale dans le string, délimité par `` et non ''
console.log(statement);

let Name = "The Hacking Project";
console.log(Name.length); //taille du mots
console.log(Name[0]); //obtient la lettre a l'index choisi
console.log(Name.indexOf("Hack")); //cherche un élément dans le string
console.log(Name.toLowerCase()); //met en MAJ
console.log(Name.toUpperCase()); //met en MIN
console.log(Name.split("-")); //sépare le texte avec un séparateur
console.log(Name.join('-')); //ajoute tout les éléments d'un tableau dans le même string avec un séprateur
*/

//Test 6 : les objets littéraux 
/*
let THPSessionNum2 = {
    numOfMouss: 80,
    cities: ["Paris","Lyon","Montpellier"],
    successRate: 0.80,
    sessionMoto: "Keep pushing to the top"
} //définition d'un objet JS

console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; //modification de l'attribut
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Presentation de Sinatra" //ajout d'un attribut a l'objet
console.log(THPSessionNum2); //je montre l'objet entier

let attributName = "successRate";
console.log(THPSessionNum2[attributName]); //J'accède a l'attribut qui n'est pas contenu dans mon objet
*/

//Test 7 : Les conditions 
/*
let number = 2;
if(number > 0) {
    console.log("number est positif");
} else if (number === 0) { 
    console.log("number est nul");
} else {
    console.log("number est négatif");
}

if (true && true) {
    console.log ("ce message s'affiche car avec un ET, si les deux conditions sont à TRUE, le résultat est TRUE");
} 
if (true || false) {
    console.log ("ce message s'affiche car avec un OU, si l'une des conditions est vérifiées");
}
if (!false) {
    console.log ("ce message s'affiche car la valeur est différente de FALSE donne TRUE");
}

weekNum = 1; 
switch (weekNum) {
  case 1:
    console.log("Semaine 1 - Introduction au Code");
    break; //permet de sortir de la case 
  case 2:
    console.log("Semaine 2 - Découverte de Ruby");
    break;
  case 3:
    console.log("Semaine 3 - Programmation Orientée Objet");
    break;
  case 4:
    console.log("Semaine 4 - Initiation à Rails");
    break;
  case 5:
    console.log("Semaine 5 - Rails intermédiaire");
    break;
  case 6:
    console.log("Semaine 6 - Rails avancé");
    break;
  case 7:
    console.log("Semaine 7 - HTML / CSS et intro au JS");
    break;
  case 8:
    console.log("Semaine 8 - JavaScript de front");
    break;

  default: //tous les cas non décrits dans la case finissent ici
    console.log("Cette entrée n'est pas reconnue");
    break;
}

let numberNil = 0;
if (numberNil){
    console.log("ce message ne s'affiche que si number est non nul");
}

let string = "";
if (string) {
    console.log("ce message ne s'affiche que si la valeur du string est non nul");
}

let myVariable
if (myVariable) {
    console.log ("ce message ne s'affiche que si myVariable contient une valeur");
} 
*/

//Test 8 : Les boucles
/*
for(let count = 0; count <= 5; count++){
    console.log(`on va compter jusqu'a 5 : ${count}`);
}

var count = 5//défini la variable count pour pouvoir lancer le log
console.log(count); 

let answer = "";
while(answer !== "oui") {
    console.log("alors?")
    answer = prompt("Tu Kiffes THP ?");
}
console.log("haaa, tu nous fais plaisir !")

let word = "";
let letter;

while (true) {
    letter = prompt("tape une lettre stpl :");
    if (letter) {
        word += letter;
        console.log(word);
    } else { //si la lettre est vide
        break; //on quitte la boucle
    }
}
console.log(`voila ce que tu as tapé : ${word}`);

let weekofTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];
let weekofTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

console.log("***** Parourons l'array :")
for(let weekAttribut in weekofTHPArray) {
    console.log(index = weekofTHPArray.slice(0.3)); //index va aller de 0 a 3
    console.log(weekofTHPArray[index]);
}

console.log("**** Parcourons l'objet :")
for(let weekAttribut in weekofTHPObject) {
    console.log(weekAttribut); //weekattribut va avoir les valeurs hors string donc les semaines
    console.log(weekofTHPObject[weekAttribut])
}

console.log("***** Parcourons le array en forEach :")
weekofTHPArray.forEach(weekContent => {
    console.log(weekContent)
});
*/

// Test 9 : Les fonctions
/*
function sayHello(){
    console.log("Bonjour toi !");
}
sayHello();

function multiply (input1, input2) {
    let outputNumber = input1 * input2;
    return outputNumber;
}
let outputNumber
console.log(multiply(2,3));
console.log(multiply(2, multiply(2,3)));
console.log(outputNumber); //créer une erreur car la variable let n'existe pas 

const otherMultiply = multiply; //on peut affecter la fonction a une autre variable
console.log(otherMultiply(2,3));

const Multiply2 = (num1, num2) => { //l'opérateur => permet de déclarer les fonctions anonymes
    let outputNumber = num1 * num2;
    return outputNumber
};
*/