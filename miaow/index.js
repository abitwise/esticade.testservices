var edge = require('edge');
var chalk = require('chalk');
var service = require("esticade")("Miaow Service");

var play = edge.func(function() {/*
 async (input) => {
     var player = new System.Media.SoundPlayer((string)input);
     player.PlaySync();
     return null;
 }
*/});

service.on("Miaow", (ev) => {
    console.log(chalk.magenta('Cat: ') + chalk.cyan('"Miaow"'));
    ev.emit('FeedMe', {cat: "Feed Me!"});
    play('cat.wav');
});

service.on("Feed", (ev) => {
    console.log(chalk.magenta('Cat: ') + chalk.cyan('"Nom nom nom"'));
    ev.emit('Nomnomnom', {cat: "Omnomnomnom"}).then(() => setTimeout(() => service.shutdown()));
});
