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


//Est-ce que tous les livres ont été au moins empruntés une fois ?

  let read = true;
  //initialisation à 0, puis condtion de l'index, puis ajout de 1
  for (let i=0; i < books.length; i++){
    if(books[i].rented == 0){
      read = false;
      break;
    }
  }
  console.log(read)

//Quel est livre le plus emprunté ?

let debut = 0;
let book;
    for (let i=0; i < books.length; i++){
    if(books[i].rented >= debut){
      debut = books[i].rented;
      book = books[i] ;
    }
  }
console.log(book);


//Quel est le livre le moins emprunté ?

let lessbook = books[0];
    for (let i=1; i < books.length; i++){
    if(books[i].rented <= lessbook.rented){
      lessbook = books[i] ;
    }
  }
console.log(lessbook);


//Trouve le livre avec l'ID: 873495
let bookid;
    for (let i=1; i < books.length; i++){
    if(books[i].id == 873495){
      bookid = books[i] ;
    }
  }
console.log(bookid);


 //Supprime le livre avec l'ID: 133712 ;
  let supprime;
  for (let i = 0; i < books.length; i++){
    if (books[i].id == 133712){
      supprime = books.splice(i,1);
    }
  }
  console.log(supprime);

//Trie les livres par ordre alphabétique 
function compare(a,b) {
  if (a.title < b.title)
     return -1;
  if (a.title > b.title)
    return 1;
  return 0;
}

console.log(books.sort(compare));




