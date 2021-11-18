// Analyse de données 

const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];
  
  // filtre les entrepreneurs qui sont nés dans les années 70 : 
  
  const seventies = entrepreneurs.filter(yearsfilter => yearsfilter.year > 1969 && yearsfilter.year < 1980); // initialisation d'une constante qui va contenir les entrepreneurs nées dans les années 70 grace a la fonction "filter"
  console.log(seventies);

  // sors un array qui contient le nom et le prenom 
  
  console.log(entrepreneurs.map(e => `${e.first} ${e.last}`));

 //trie les entrepreuneurs par ordres alphabétiques du nom de famille

  entrepreneurs.sort(function tri(a,b){
    if (a.last < b.last)
      return -1;
    if (a.last > b.last)
      return 1;
    return 0; 
});
console.log(entrepreneurs); 

  // Age qu'aurait chaque inventeur aujourd'hui

 for (i=0; i <= entrepreneurs.length; i++) {
  let ageNow = 2021 - entrepreneurs[i].year
  console.log( entrepreneurs[i].first + " " + entrepreneurs[i].last + " " + "est née en " + entrepreneurs[i].year + " et a aujourd'hui " + ageNow + " ans");
  };




  
  