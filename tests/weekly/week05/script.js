function Battleground(username) {
    this.username = username;
    this.weapon = 'laser';
    this.level = 'medium';
}

Battleground.prototype.changeWeapon = function (newWeapon) {
    if (newWeapon === 'gun' || newWeapon === 'knife' || newWeapon === 'laser') {
        this.weapon = newWeapon;
    } else {
        throw new Error("Only gun, knife and laser are valid weapons!");
    }
}

Battleground.prototype.changeLevel = function (newLevel) {
    if (newLevel === 'easy' || newLevel === 'medium' || newLevel === 'hard') {
        this.level = newLevel;
    } else {
        throw new Error("Only easy, medium and hard levels are valid levels!");
    }
}

Battleground.prototype.attack = function () {
    console.log('Attacking the opponent with', this.weapon);
}

var game1 = new Battleground("sweetKill78");
console.log("Settings for player1: ", game1);
game1.attack();
game1.changeWeapon('knife');
game1.attack();

var game2 = new Battleground("sniperViper010");
console.log("Settings for player2: ", game2);
game2.attack();
game2.changeLevel('hard');
game2.changeWeapon('gun');
console.log("New settings for player2", game2);
game2.attack();