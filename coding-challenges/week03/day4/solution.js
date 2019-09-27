// Write a for loop that only prints players with rank less than or equal to 10.

var players = [
    { name: "Roger Federer", rank: 1 },
    { name: "Rafel Nadal", rank: 2 },
    { name: "Nalbandian", rank: 12 },
    { name: "Andy Murray", rank: 14 },
    { name: "Andy Roddick", rank: 4 },
    { name: "Pete Sampras", rank: 3 },
    { name: "Rod Laver", rank: 190 },
    { name: "Andre Agassi", rank: 11 },
    { name: "Novak Djokovic", rank: 5 },
    { name: "Arthur Ashe", rank: 8 },
];

// Print player with rank < 10
function rankLessThanTen() {
    for (let i = 0; i < players.length; i++) {
        if (players[i].rank <= 10) {
            console.log(players[i].name);
        }
    }
}

rankLessThanTen();

