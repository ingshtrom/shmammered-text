var drunkConvert = require('./index.js'),
    strings = [
        'This is how I do!',
        'How are you today?',
        'I am SHMAMMERED!',
        'Lorem ipsum...'
    ], i, cur;

for (i = 0; i < strings.length; i++) {
    cur = strings[i];
    console.log(drunkConvert.toDrunk(cur));
}
