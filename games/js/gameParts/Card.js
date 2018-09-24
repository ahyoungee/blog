//class: Card to hold the suit, value, and symbol of each card
//static function: sumCards to sum the value of each card
class Card {
    constructor(suit, value, symbol) {
        this.suit = suit;
        this.value = value;
        this.symbol = symbol;
    }
    
    //getter for each element of the card
    getSuit() {
        return this.suit;
    }
    getValue() {
        return this.value;
    }
    getSymbol() {
        return this.symbol;
    }
    //setter for each element of the card
    setSuit(suit) {
        this.suit = suit;
    }
    setValue(value) {
        this.value = value;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }
    //sum array of cards
    static sumCards(cards) {
        var sum = 0;
        for(var x in cards){
            sum += cards[x].value;
        }
        return sum;
    }
}

//function createDeck
//@params none
//return deck of cards
function createDeck(){
    var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    var values = {1:'Ace', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine',
                10:'ten', 11:'Jack', 12:'Queen', 13:'King'};
    var eachSuit;
    var eachValue;
    var deck = [];
    var i = 0;
    for(eachSuit = 0; eachSuit < 4; eachSuit++){
        for(eachValue = 1; eachValue <= 13; eachValue++){
            deck[i] = new Card('','','');
            deck[i].setValue(eachValue);
            deck[i].setSymbol(values[eachValue]);
            deck[i].setSuit(suits[eachSuit]);
            i++;                    
        }
    }
    return deck;
}

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