// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardThree = "king";
//
// console.log('User flipped' + cardOne);
// console.log('User flipped' + cardTwo);

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-hearts.png"
}
];

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
	cardsInPlay.push(cards[cardId].rank);
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

flipCard(0);
flipCard(2);
