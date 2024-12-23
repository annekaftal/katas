function getRandomInt(max) {
  return Math.floor(Math.random(max) * max);
}

function burnCard() {
  deck.splice(getRandomInt(deck.length), 1);
}

function flop() {
  let centerCards = [];
  // first round
  burnCard();
  centerCards.push(deal(3));
  // second and third round
  for (let i = 0; i < 2; i++) {
    burnCard();
    centerCards.push(deal(1));
  }
  return centerCards;
}

function deal(numberOfCards) {
  let hand = [];
  for (let i = 0; i < numberOfCards; i++) {
    let randomCard = getRandomInt(deck.length);
    hand.push(deck[randomCard]);
    deck.splice(randomCard, 1);
  }
  return hand;
}

function shuffleCards(array, newArray) {
  if (array.length === 0) {
    return;
  } else {
    let randomCardNumber = getRandomInt(array.length);
    newArray.push(array[randomCardNumber]);
    array.splice(randomCardNumber, 1);
    shuffleCards(array, newArray);
  }
}

function createDeck() {
  const cardType = ["♠︎", "♥︎", "♣︎", "♦︎"];
  const cardNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let cardDeck = [];
  let shuffledDeck = [];
  for (let i = 0; i < cardType.length; i++) {
    for (let j = 0; j < cardNumber.length; j++) {
      cardDeck.push(cardType[i] + cardNumber[j]);
    }
  }
  shuffleCards(cardDeck, shuffledDeck);
  return shuffledDeck;
}

let deck = createDeck();
console.log(`Deck: ${deck}`);
console.log(`Number of cards in deck: ${deck.length}`);

const player1 = deal(2);
console.log(`Player 1: ${player1}`);
console.log(`Number of cards left in deck: ${deck.length}`);

const player2 = deal(2);
console.log(`Player 2: ${player2}`);
console.log(`Number of cards left in deck: ${deck.length}`);

let cards = flop();
console.log(`Flop: ${cards}`);
console.log(`Number of cards left in deck: ${deck.length}`);
