let frontCard = null;
let backCard = null;
let cardLetter = null;
let cardWord = null;
let footerLetter = null;
let footerWord = null;
var skyline;
let words = [
	["backpack", "suitcase"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"],
	["soccer", "baseball"]
]
	

function initialize()
{
	console.log(words[0]);
	console.log(words[0][0]);
	console.log(words[0][1]);
	
	frontCard = document.getElementById("front");
	backCard = document.getElementById("back");
	frontCard.style.display = "none";
	backCard.style.display = "block";

	cardWord = document.getElementById("word");
	rowNumber = Math.floor((Math.random() * words.length) + 1);
	console.log(rowNumber);
	cardWord.innerHTML = words[rowNumber][0];

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
	cardLetter.innerHTML = "B";
	cardWord.innerHTML = "Beijing";
	footerLetter.innerHTML = "B";
	footerWord.innerHTML = "Beijing";
	document.getElementById("skyline").src = "beijing.png";

}

function previousFlashcard()
{
	cardLetter.innerHTML = "C";
	cardWord.innerHTML = "Chicago";
	footerLetter.innerHTML = "C";
	footerWord.innerHTML = "Chicago";
	document.getElementById("skyline").src = "chicago-skyline-clipart-4.jpg";

}

window.onload = initialize;