var chalk = require('chalk');
const exec = require('child_process').exec;
var service = require("esticade")("Miaow Service");

var play = (sound) => {
    exec('afplay ' + sound);
};

service.on("Miaow", (ev) => {
    console.log(chalk.magenta('Cat: ') + chalk.cyan('"Miaow"'));
    ev.emit('FeedMe', {cat: "Feed Me!"});
    play('cat.wav');
});

service.on("Feed", (ev) => {
    console.log(chalk.magenta('Cat: ') + chalk.cyan('"Nom nom nom"'));
    ev.emit('Nomnomnom', {cat: "Omnomnomnom"}).then(() => setTimeout(() => service.shutdown()));
});
