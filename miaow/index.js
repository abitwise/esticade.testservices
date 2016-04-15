var Player = require("player");
var player = new Player('./sounds/cat.mp3');

var service = require("esticade")("Miaow Service");

service.on("Miaow", (ev) => {
    player.play(function(err, player) {
        if (err) {
            console.log(err);
        } else {
            console.log('playend!');
        }
    });
});