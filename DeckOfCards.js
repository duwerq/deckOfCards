function Card(suit, rank) {
  this.suit = suit;
  this.rank = this.rank;
}

var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["♠","♥", "♦", "♣"];

function createDeck() {
  var deck = []
  suits.map(function(suit) {
    ranks.map(function(rank,i) {
      deck.push(suit + rank)
    })
  })
  return deck
}

var fullDeck = createDeck()
var shuffledDeck = fullDeck

function shuffleCards(deck) {
  shuffDeck = []
  temp = []
  function random(){
    return Math.floor(Math.random() * 52)
   }
  deck.map(function(card) {
    var p = random();
    if (temp.indexOf(p) < 0) {
      shuffDeck.push(deck[p])
      temp.push(p)
    } else {
      while(temp.indexOf(p) > -1) {
        p = random()
        if(temp.indexOf(p) < 0) {
          shuffDeck.push(deck[p])
          break;
        } 
      }
    }
  })
  return shuffDeck
}

function dealCards(number, faceDown, position){
  var dealtCards = []
  var selectedCards = shuffledDeck.splice(0,number)
  if (number > shuffledDeck.length) {
    var notEnoughCards = shuffledDeck.splice(0,number)
    notEnoughCards.map((card) => {
      dealtCards.push({card: card, faceDown: faceDown, position: position})
    })
    dealtCards.push({card: "No More Cards"})
  } else {
  selectedCards.map((card) => {
  dealtCards.push({card: card, faceDown: faceDown, position: position})
  })
  }
  return dealtCards
}

function cutDeck(position) {
  var deckCut = []
  var deckCut = shuffledDeck.splice(position, 51)
  deckCut.push(...shuffledDeck)
  shuffledDeck = deckCut
}
/*
document.createElement('body');
var shuffle = document.createElement('button');
document.body.appendChild(shuffle);
shuffle.onclick = function() {
  shuffledDeck = shuffleCards(fullDeck); 
}
shuffle.textContent = "shuffle deck"
var pickCard = document.createElement('button');
document.body.appendChild(pickCard);
pickCard.textContent = "draw card";
pickCard.onclick = function() {
  dealCards(5, true, 3)
}
var deckCutter = document.createElement('button');
document.body.appendChild(deckCutter);
deckCutter.textContent = "cut deck";
deckCutter.onclick = function() {
 cutDeck(22)
}*/





