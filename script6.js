console.log(ARNtoProteins('CCGUCGUUGCGCUACAGC'))
console.log(ARNtoProteins('CCUCGCCGGUACUUCUCG'))
function ARNtoProteins(arn) {
	var ARNArray = stringToArray(arn);
	var proteinsArray = []
	for (let index in ARNArray) {
		let protein = transform(ARNArray[index]) ;
		proteinsArray.push(protein);
	}
	return proteinsArray.join("-")
}
function stringToArray(arn) {
	return arn.match(/.{1,3}/g);
}
function transform (string) {
	if (string === "UCU" || string === "UCC" || string === "UCA" || string === "UCG" || string === "AGU" || string === "AGC") {
		return "Sérine";
	} else if (string === "CCU" || string === "CCC" || string === "CCA" || string === "CCG") {
		return "Proline";
	} else if (string === "UUA" || string === "UUG") {
		return "Leucine";
	} else if (string === "UUU" || string === "UUC") {
		return "Phénylalanine";
	} else if (string === "CGU" || string === "CGC" || string === "CGA" || string === "CGG" || string === "AGA" || string === "AGG") {
		return "Arginine";
	} else if (string === "UAU" || string === "UAC") {
		return "Tyrosine";
	} else {
		return "Acidé aminé non défini"
	}
}