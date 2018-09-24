//make a class user and extend it to be player and com
class User {
    constructor(name, game) {
        this.name = name;
        this.game = game;
    }
    //getters
    getName() {
        return this.name;
    }
    getGame() {
        return this.game;
    }
    //setters
    setName(name) {
        this.name = name;
    }
    setGame(game) {
        this.game = game;
    }
}
var myUser = new User('ahyung', 'blackjack');
//console.log(myUser);

class Com extends User {
    constructor(name, game, level) {
        super(name, game);
        this.level = level;
        this.createdUser();
    }
    createdUser(){
        alert('Created Com: \nName: ' + this.name + '\nGame:' + this.game + '\nLevel: ' + this.level)
    }
    //getters
    getLevel(){
        return this.level;
    }
    //setters
    setLevel(level){
        this.level = level;
    }
}
//var newCom = new Com('com1', 'blackjack', '3');
//console.log(newCom);
