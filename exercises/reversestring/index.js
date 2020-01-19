// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * 
 * @param {String} str 
 */
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;

// return str.split('').reverse().join('');

/* let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed; */