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
