/*********** 
 *  Given a string of words, you need to find the highest scoring word.

    Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
 
    You need to return the highest scoring word as a string.

    If two words score the same, return the word that appears earliest in the original string.

    All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let words = x.split(' ');
  let highScore = 0;
  let highWord;
  highest = (words.length) ? words[0] : null;
  words.forEach( (word, index) => {
    let letters = word.split('');
    let sum = 0;
    letters.forEach( (letter, index) => {
      sum += (letter.charCodeAt(0) - 96);
    });
    if (!highScore || highScore < sum) {
      highWord = word;
      highScore = sum;
    }
  });
  return highWord;
}

console.log(high('man i need a taxi up to ubud'));              // 'taxi'
console.log(high('what time are we climbing up the volcano'));  // 'volcano'
console.log(high('take me to semynak'));                        // 'semynak'
console.log(high("a zzz xxxxx bb ccc zzzzzzzzzzzzzzzzzz onk")); // 'zzzzzzzzzzzzzzzzzz'