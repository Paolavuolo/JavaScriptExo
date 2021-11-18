const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  //Est ce que tout les livres été au moins empruntés une fois

    //création d'une fonction
  function IsRented(){
       //boucle for pour verifier la condition 
      for (i=0; i < books.length; i++){
      if (books[i].rented >= 1) {
          return true //si tout les livres ont été loué au moins une fois
      } else {
          return false //si certains livrs n'ont jamais été loué
      }
    }
  }; 
  console.log(IsRented());

  //Quel est le livre le plus et le moins emprunté 
  books.sort((a,b) => (a.rented > b.rented) ? 1 : -1)
  console.log("le livre " + books[0].title + " est celui qui a été le moins emprunté avec : " + books[0].rented + " emprunts", 
              "le livre " + books[11].title + " est celui qui a été le plus emprunté avec : " + books[11].rented + " emprunts");
  
  //Trouve le livre avec l'ID: 873495
  console.log(books.find(e => e.id == 873495));
  //supprime le livre avec l'ID: 133712

  let removed;
  for (let i = 0; i < books.length; i++){
    if (books[i].id == 133712){
      removed = books.splice(i,1);
    }
  }
  console.log(books)
  //trie par ordre alphabétique 
  books.sort(function tri(a,b){
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0; 
});
console.log(books); 