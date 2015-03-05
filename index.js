var DrunkenText;
(function() {
    var drunkImpl, modifyS, modifyPeriod;

    modifyS = function modifyS (letter, howDrunk) {
        return Math.random() < howDrunk ? letter + 'h' : letter;
    };

    modifyPeriod = function modifyPeriod (letter, howDrunk) {
        return Math.random() < howDrunk ? letter + '..hic!' : letter;
    };

    drunkImpl = {
        /**
         * Convert text to drunk text
         * @param  {string} text        - text to convert
         * @param  {number} howDrunk    - how drunk should we be? valid values are (0-1). higher === drunker.
         * @return {string}             - converted text
         */
        toDrunk: function toDrunk (text, howDrunk) {
            var i, cur, drunkText = '';

            // if you pass me a falsy value, I'll give it right back. 
            if (text) {
                // default to 50% drunk
                if (!howDrunk) {
                    howDrunk = 0.5;
                }
                for (i = 0; i < text.length; i++) {
                    cur = text[i];

                    switch (cur) {
                        case '!':
                        case '?':
                        case '.':
                            drunkText += modifyPeriod(cur, howDrunk);
                            break;
                        case 'S':
                        case 's':
                            drunkText += modifyS(cur, howDrunk);
                            break;
                        default:
                            drunkText += cur;
                            break;
                    }
                }
            }
            return drunkText;
        }
    };
    if (module && module.exports) {
        module.exports.toDrunk = drunkImpl.toDrunk;
    } else {
        DrunkenText = drunkImpl;
    }
})();