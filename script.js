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
var numberPlayers;
var currentPlayer = 0;
var gameArray;
let ONE = 1;
let newRoundButton;
let toggleButton;
let nextButton;
let menuInput;

var newClick = false;
var oldClick = false;
	

function initialize()
{
	frontCard = document.getElementById("front");
	backCard = document.getElementById("back");
	newRoundButton = document.getElementById('new_round');
	toggleButton = document.getElementById('toggle');
	nextButton = document.getElementById('next');
	
	menuInput = document.getElementById("menuInput");
	
	frontCard.style.display = "none";
	backCard.style.display = "none";
	newRoundButton.style.visibility = 'hidden';
	toggleButton.style.visibility = 'hidden';
	nextButton.style.visibility = 'hidden';
	
	currentPlayer = 0;
	document.getElementById("player").innerHTML = "Player " + currentPlayer;
}

function newWordsGame()
{
	oldClick = false;
	newClick = true;
	menuInput.style.display = "block";
	document.getElementById("playerz").style.display = "block";
	backCard.style.display = "block";
	newRoundButton.style.visibility = 'visible';
	toggleButton.style.visibility = 'visible';
	nextButton.style.visibility = 'visible';
}

function oldWordsGame()
{
	newClick = false;
	oldClick = true;
	menuInput.style.display = "none";
	document.getElementById("playerz").style.display = "block";
	backCard.style.display = "block";
	newRoundButton.style.visibility = 'visible';
	toggleButton.style.visibility = 'visible';
	nextButton.style.visibility = 'visible';
	
}

function newRound()
{
	currentPlayer = 0;
	document.getElementById("player").innerHTML = "Player " + currentPlayer;
	
	document.getElementById("toggle_button").disabled = false;
	document.getElementById("next_button").disabled = false;
	
	alert("New Round!");
	
	cardWord = document.getElementById("word");
	gameArray = [];
	spyNumber = Math.floor((Math.random() * numberPlayers));
	
	rowNumber = Math.floor((Math.random() * words.length));
	
	cardWord.innerHTML = "Click Next";
		
	zeroOrOne = Math.floor(Math.random()*2);
	
	if (oldClick)
	{
		for (i = 0; i < numberPlayers; i++) {
			if(i == spyNumber)
			{
				gameArray.push(words[rowNumber][zeroOrOne]);
			}
			else
			{
				gameArray.push(words[rowNumber][1-zeroOrOne]);
			}
			
			console.log(gameArray);
		}
	}
	else if (newClick)
	{
		firstWord = document.getElementById("first_word").value;
		secondWord = document.getElementById("second_word").value;
		
		for (i = 0; i < numberPlayers; i++) {
			if(i == spyNumber)
			{
				gameArray.push(firstWord);
			}
			else
			{
				gameArray.push(secondWord);
			}
			
			console.log(gameArray);
		}
	}
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

function setPlayers()
{
	numberPlayers = document.getElementById("number_players").value;
	alert(numberPlayers);
}

window.onload = initialize;