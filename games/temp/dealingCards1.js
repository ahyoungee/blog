//class: Card to hold the suit, value, and symbol of each card
//static function: sumCards to sum the value of each card
var Card = function(suit, value, symbol) {
    this.suit = suit;
    this.value = value;
    this.symbol = symbol;
}
Card.prototype.setSuit = function(suit) {
    this.suit = suit;
} 
Card.prototype.setValue = function(value) {
    this.value = value;
} 
Card.prototype.setSymbol = function(symbol) {
    this.symbol = symbol;
} 

Card.sumCards = function(cards) {
    var sum = 0;
    for(var x in cards){
        sum += cards[x].value;
    }
    return sum;
}

//function createDeck
//@params none
//return deck of cards
function createDeck(){
    var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    var values = ['Ace','two','three','four','five', 'six', 'seven', 'eight','nine',
                'ten', 'Jack', 'Queen', 'King'];
    var eachSuit;
    var eachValue;
    var deck = [];
    var i = 0;
    for(eachSuit = 0; eachSuit < 4; eachSuit++){
        for(eachValue = 1; eachValue <= 13; eachValue++){
            deck[i] = new Card('','','');
            deck[i].setValue(eachValue);
            deck[i].setSymbol(values[eachValue - 1]);
            deck[i].setSuit(suits[eachSuit]);
            i++;                    
        }
    }
    return deck;
}
var myDeck = this.createDeck();
var unshuffledDeck = this.createDeck();
 console.log(myDeck);
 console.log(unshuffledDeck);

//function shuffleDeck
//@params: 
//array originalDeck-deck of cards user wants to shuffle
//@return shuffled deck of cards
function shuffleDeck(originalDeck) {
    var shuffledDeck = [];
    var temp;
    for(var i = 0; i < 52; i++){
        for(var j = 0; j < 52; j++){
            if((Math.random() * 100) > 50){
                temp = originalDeck[i];
                originalDeck[i] = originalDeck[j];
                originalDeck[j] = temp;
            }
        }
    }
    shuffledDeck = originalDeck;
    return shuffledDeck;
}
var newDeck = this.shuffleDeck(myDeck);

//function: dealHand
//@params: 
//int numCards- number of cards wanted to be dealt
//array cardDeck- deck to get the cards from 
//@return: hand of cards
function dealHand(numCards, cardDeck){
    var hand = [];
    for(var i = 0; i < numCards; i++){
        hand[i] = cardDeck[i];
    }
    return hand;
}
var myHand = this.dealHand(5, newDeck);
// console.log(myHand);
// console.log(Card.sumCards(myHand));

//make a class user and extend it to be player and com
var User = function(name, game) {
    this.name = name;
    this.game = game;
}
User.prototype.setName = function(name) {
    this.name = name;
}
User.prototype.setGame = function(game) {
    this.game = game;
}

function Com(name, game, level) {
    User.call(this, name, game);
    this.level = level;
    this.createdCom();
}
Com.prototype.setLevel = function(level) {
    this.level = level;
}
Com.prototype.createdCom = function () {
    return alert('Created Com: \nName: ' + this.name + '\nGame:' + this.game + '\nLevel: ' + this.level)
}

var myUser = new User('ahyung', 'blackjack');
console.log(myUser);

var newCom = new Com('com1', 'blackjack', '3');
console.log(newCom);
