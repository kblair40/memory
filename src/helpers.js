const STACK = [
  "AS",
  "2S",
  "3S",
  "4S",
  "5S",
  "6S",
  "7S",
  "8S",
  "9S",
  "0S",
  "AD",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "0D",
];
const CARDS = {
  easy: STACK.slice(0, 5).concat(STACK.slice(0, 5)),
  moderate: STACK.slice(0, 12).concat(STACK.slice(0, 12)),
  hard: STACK.concat(STACK),
};

function getCards(difficulty) {
  return CARDS[difficulty];
}

function shuffle(deck) {
  return deck.sort(() => Math.random() - 0.5);
}

export { CARDS, shuffle, getCards };
