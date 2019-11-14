function factorial(n) {
  return (n > 1) ? n * factorial(n - 1) : 1;
	}


let number = -1;
	while(number < 0) {
	  number = prompt("Hey ! Entre un nombre entier postif !");

	resultat = number * factorial(number-1); 
		}
	console.log(`Le resultat est ${resultat}`);
