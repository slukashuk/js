
var state = 1;
var cartoons = {
    age: {

    }
};

function openUserInput() {
	process.stdin.setEncoding('utf-8');
	process.stdin.resume();
	process.stdin.on('data', onUserInput);	
}

function onUserInput(input) {
	input = normalizeInput(input);
	if (input == "exit") {
	console.log("bye!");
 	process.exit();
 }
	if (input == "again"){
		state = 1;
		
	}
	if (input == ""){
	console.log("Error, you did not enter anything!");
	} else {	
		if (state == 1) { // name 
			cartoons.name = input;
			state = 2;  
			console.log("Is main hero good? Type 'good' if yes or 'bad' if not");

		}else if (state == 2) { // Main hero good or not
			cartoons.mainHeroIs = input;
			state = 3; 
			console.log("Please enter the number of series");

		} else if(state == 3) { // Number of series
			   if (isValidNumberOfSeries(input)){
				cartoons.numberOfSeries = input;
				state = 4;
				console.log("What age is cartoon oriented at?");
				console.log("Since");
			} 
			
			else {
				console.log("Error, " + input + " is not a number");
				console.log("Please enter the number of series");
			}
		} else if (state == 4) { // Age
			cartoons.age.focusedOnMinAge = input;
			state = 5
			console.log("Till");
		} else if(state == 5) {
			cartoons.age.focusedOnMaxAge = +input;
			state = 6;
			console.log("For whom this cartoon is? Type 'children' or 'adult'")

		} else if(state == 6) { // Oriented for Children?
			cartoons.forChildren = input;
			printCartoon(cartoons);
		}
					
		}
	}
	
function printCartoon(cartoons) {
	console.log("============");
	console.log("Thank you!");
	console.log("Your favorite cartoon is " + cartoons.name + " with " + cartoons.mainHeroIs + " main hero.");
	console.log("This cartoon has " + cartoons.numberOfSeries + " series.");
	console.log("It oriented to age since " + cartoons.age.focusedOnMinAge + " till " + cartoons.age.focusedOnMaxAge + ".");
	console.log("So it oriented for " + cartoons.forChildren + ".");
	console.log("Type 'exit' to quit or 'again' to enter the data again.");
	
}

 

function isValidNumberOfSeries(input){
	return !isNaN(input);
}


function normalizeInput(input) {
	return input.trim();
}

function printBanner() {
	console.log("Hello, welcome to Baby Land!");
	console.log("type exit to exit");
	console.log("Enter a name of your favorite cartoon");
}

openUserInput();
printBanner();