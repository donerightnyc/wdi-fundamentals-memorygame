// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardThree = "king";
//
// console.log('User flipped' + cardOne);
// console.log('User flipped' + cardTwo);

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

function checkForMatch() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	checkForMatch();
	cardsInPlay.push(cards[cardId]);
	console.log('User flipped ' + cards[cardId]);
}

flipCard(0);
flipCard(2);
