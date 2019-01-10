let frontCard = null;
let backCard = null;
let cardWord = null;
let words = [
	["backpack", "suitcase"],
	["soccer", "baseball"],
	["mango", "pineapple"],
	["ice cream", "popsicle"],
	["pillow", "couch"],
	["computer", "tablet"],
	["guitar", "ukulele"],
	["spoon", "fork"],
	["plastic bag", "purse"],
	["burrito", "taco"],
	["wrapping paper", "gift bag"],
	["fork", "knife"],
	["knife", "spoon"],
	["dog", "cat"],
	["hamster", "guinea pig"],
	["backpack", "handbag"],
	["textbook", "dictionary"],
	["Mac Computer", "Windows Computer"],
	["apple", "pear"],
	["pencil", "pen"],
	["stuffed animal", "animal"],
	["bowls", "plates"],
	["dance", "sing"],
	["burger", "hotdog"],
	["burger", "fried chicken"],
	["fried chicken", "hotdog"],
	["geometry dash", "doodle jump"],
	["Pudong", "Puxi"],
	["Shanghai", "Beijing"],
	["Palo Alto", "Mountain View"],
	["Boston", "New York"],
	["Hugs", "Kisses"],
	["Bed", "Beanbag"],
	["Charcoal", "Paint"],
	["Charcoal", "Watercolor"],
	["Watercolor", "Paint"],
	["Wendy", "Glenda"],
	["Wendy", "Josh"],
	["Wendy", "Ivy"],
	["Glenda", "Josh"],
	["Glenda", "Ivy"],
	["Ivy", "Josh"],
	["Hard Contacts", "Soft Contacts"],
	["Hoodie", "Jacket"],
	["chips", "crackers"],
	["white", "black"],
	["water", "juice"],
	["angry", "frustrated"],
	["sad", "depressed"],
	["gudetama", "egg"],
	["chicken", "duck"],
	["leaf", "root"],
	["pen", "pencil"],
	["left", "right"],
	["bone", "blood"],
	["sun", "moon"],
	["Japan", "South Korea"],
	["fur", "hair"],
	["hands", "feet"],
	["bicycle", "tricycle"],
	["father", "mother"],
	["deciduous trees", "evergreen trees"],
	["peanut", "almond"],
	["white", "black"],
	["cramps", "period"],
	["bagel", "donut"],
	["donut", "donut hole"],
	["krispy creme", "dunkin' donuts"],
	["tsunami", "hurricame"],
	["town house", "apartment"],
	["moon", "sun"],
	["credit card", "debit card"],
];
let PLAYERS = 5;
var currentPlayer = 0;
var gameArray;
	

function initialize()
{
	frontCard = document.getElementById("front");
	backCard = document.getElementById("back");
	frontCard.style.display = "none";
	backCard.style.display = "block";
	
	currentPlayer = 1;
	document.getElementById("player").innerHTML = "Player " + currentPlayer;
}

function newRound()
{
	currentPlayer = 1;
	document.getElementById("player").innerHTML = "Player " + currentPlayer;
	
	document.getElementById("toggle_button").disabled = false;
	document.getElementById("next_button").disabled = false;
	
	alert("New Round!");
	
	cardWord = document.getElementById("word");
	rowNumber = Math.floor((Math.random() * words.length));
	console.log(rowNumber);
	cardWord.innerHTML = "Click Next";
	
	spyNumber = Math.floor((Math.random() * PLAYERS));
	zeroOrOne = Math.floor(Math.random()*2);
	gameArray = [];
	
	for (i = 0; i < PLAYERS; i++) {
		if(i == spyNumber)
		{
			gameArray.push(words[rowNumber][zeroOrOne]);
		}
		else
		{
			gameArray.push(words[rowNumber][1-zeroOrOne]);
		}
		
		console.log(gameArray);
9	}

	//skyline = document.getElementById("skyline").src;
}

function toggleFlashcard()
{
	if(backCard.style.display === "block")
	{
		frontCard.style.display = "block";
		backCard.style.display = "none";
	}
	else
	{
		frontCard.style.display = "none";
		backCard.style.display = "block";
	}
}

function nextFlashcard()
{
	cardWord.innerHTML = gameArray[currentPlayer];
	console.log(currentPlayer);
	currentPlayer += 1;
	document.getElementById("player").innerHTML = "Player " + currentPlayer;
}

window.onload = initialize;