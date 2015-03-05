var cartoon1 = {
	name: "Luntik",
	focusedOnMinAge: 1,
	focusedOnMaxAge: 8,
	forChildren: true,
	mainHeroIs: "good",
	manySeries: true,
};
var cartoon2 = { 
	name: "Futurama",
	focusedOnMinAge: 16,
	focusedOnMaxAge: 150,
	forChildren: false,
	mainHeroIs: "50 / 50",
	manySeries: true,
};
var cartoon3 = {
	name: "Ficsicki",
	focusedOnMinAge: 5,
	focusedOnMaxAge: 10,
	forChildren: true,
	mainHeroIs: "good",
	manySeries: true,
};
var cartoon4 = {
	name: "Tom & Jerry",
	focusedOnMinAge: 2,
	focusedOnMaxAge: 30,
	forChildren: true,
	mainHeroIs: "50 / 50",
	manySeries: true,
};
var cartoon5 = {
	name: "Beauty and the beast",
	focusedOnMinAge: 5,
	focusedOnMaxAge: 30,
	forChildren: true,
	mainHeroIs: "good",
	manySeries: false
}


//2. Create function that takes a string and one of your objects as the input and returns true if there is at least a single property 
//that contains that string. Search for the substring, not the exact match. 

function search (title, cartoon) {
	if (cartoon.name.indexOf(title) != -1) {
		console.log("Cartoon found!" + cartoon.name);
	} else {
		console.log("We are sorry, could not find any matches ")
	}
};


search ("g", cartoon5)

// 3. Write the function to compare two items between each other. The function returns:

// - negative number if the first item is less than the second
// - zero, if items are the same
// - positive number if the first number is bigger than the second

// Define "Bigger" and "Smaller" for your area. For example, you could compare books by number of pages or cars by weight.


 function compare (a, b) {
 	
 	 	if (a < b) {
 		var result1 =  a - b;
 		console.log(result1)
 	} else if (a == b) {
 		console.log("zero")
 	} else if (a > b) {
 		var result2 =  a - b;
 		console.log(result2)
 	}
 	}
 
 compare (cartoon5.focusedOnMaxAge, cartoon4.focusedOnMaxAge);


//4. Write the function that prints your object nicely to console.

function forWhom (a) {
	if (a == true) {
		return "mostly for children"
	} else {
		return "mostly for adult"
	}
}
forWhom ();

 function print () {
 	console.log("Cartoons:")
 	console.log("1)" + cartoon1.name + " Oriented for age since " + cartoon1.focusedOnMinAge + " till " + cartoon1.focusedOnMaxAge 
 	+ " " + forWhom (cartoon1.forChildren) );
 	console.log("2)" + cartoon2.name + " Oriented for age since " + cartoon2.focusedOnMinAge + " till " + cartoon2.focusedOnMaxAge 
 	+ " " + forWhom (cartoon2.forChildren) );
 	console.log("3)" + cartoon3.name + " Oriented for age since " + cartoon3.focusedOnMinAge + " till " + cartoon3.focusedOnMaxAge 
 	+ " " + forWhom (cartoon3.forChildren) );
 	console.log("4)" + cartoon4.name + " Oriented for age since " + cartoon4.focusedOnMinAge + " till " + cartoon4.focusedOnMaxAge 
 	+ " " + forWhom (cartoon4.forChildren) );
 	console.log("5)" + cartoon5.name + " Oriented for age since " + cartoon5.focusedOnMinAge + " till " + cartoon5.focusedOnMaxAge 
 	+ " " + forWhom (cartoon5.forChildren) );
 }
 
 print ();