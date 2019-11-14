let etage = -1 ;
const br = "<br>";
while (etage < 1) {
	etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu (nombre positif!) ?");
	}

	let nb = 1;

	while(nb <= etage) {
		console.log(' '.repeat(etage - nb) + '#'.repeat(nb));
		 nb +=1 ;
		 br ;
	//prompt = ouvre une fenetre d'input
	}
	
