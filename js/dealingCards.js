class Card {
    constructor(suit, value, color) {
        this.suit = suit;
        this.value = value;
        this.color = color;
    }
    
    //getter for each element of the card
    getSuit() {
        return this.suit;
    }
    getValue() {
        return this.value;
    }
    //setter for each element of the card
    getColor() {
        return this.Color;
    }
}

var suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
var values = {'Ace': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
                'eight': 8, 'nine': 9, 'ten': 10, 'Jack': 11, 'Queen': 12, 'King': 13};
var colors = ['red', 'black'];
var deck = [];
function createDeck(){
    var x;
    var y;
    var z;
    var i;
    for(i = 1; i <= 52; i++){
        deck[i] = new Card('','','');
        for(x in suits) {
            deck[i].setSuit(suits[x]);
            for(y in values) {
                deck[i].setValue(values[y]);
                for(z in colors) {
                    deck[i].setColor(colors[z]);
                }
            }
        }
        
    }
    echo 
    console.log(deck);

}
//make a class user and extend it to be player and com
// class User {
//     constructor(name, game) {
//         this.name = name;
//         this.game = game;
//     }
    
//     getName() {
//         return this.name;
//     }
    
//     getGame() {
//         return this.game;
//     }
// }

// class Com extends User {
//     constructor(name, game, level) {
//         super(name, game);
        
//         this.level = level;
//     }
// }