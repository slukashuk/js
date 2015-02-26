var text = "A quick black fox jumped over the lazy dog ";
var counter = 0;
var less3Letters = 0;
var fourLeters = 0;
var fiveLetters = 0;
var sixLetters = 0;
var moreThen7Letters = 0;
var wordStart = 0;


while (counter < text.length){
	var letter = text[counter];
	if(letter == " " || counter == text.length - 1) {
		var wordLength = counter - wordStart;
		if (wordLength <=3){
			less3Letters ++;
		} else if (wordLength == 4) {
			fourLeters ++;
		}else if (wordLength == 5){
			fiveLetters ++;
		}else if (wordLength == 6) {
		sixLetters ++;
		} else {
			moreThen7Letters ++;
		}
		wordStart = counter + 1;
	}
	counter++;
}

console.log(less3Letters + " word(s) with 3 or less letters");
console.log(fourLeters + " word(s) with 4 letters");
console.log(fiveLetters + " word(s) with 5 letters");
console.log(sixLetters + " word(s) with 6 letters");
console.log(moreThen7Letters + " word(s) with 7 or more letters");
