// get every numeric character and it corresponding letters into an array

// loop through the array to repeat each letter with respect to its prefix numeric character

// concatenate each expanded letters

// The most important notice
// 1. If there are two numeric characters, the code should ignore the first one.

// 2. If there are two consecutive alphabetic character then first character has no effect on the one after it.

// 3. Your code should be able to work for both lower and upper case.


function stringExpansion(s) {
  const result = slipIntoSection(s).map((word) => {
    const prefix = parseInt(word[0]);


    if (isNaN(prefix)) return word;
    else {
      let wordConstructor = "";

      for (let i = 1; i < word.length; i++) {
        wordConstructor += word[i].repeat(prefix);
      }
      return wordConstructor;
    }
  });

  return result.join("");
  // Good luck!
}

// invocation of a function based on appearance 
function slipIntoSection(s) {
  const letterPattern = /^[a-z]+/i;
  return letterPattern.test(s)
    ? letterPrefix(s)
    : s.length === 0
    ? emptyString(s)
    : numPrefix(s);
}

// empty string function
function emptyString(s) {
  return [];
}

// letter prefix
function letterPrefix(s) {
  const pattern = /[a-z]+(?=\d)|^[a-z]+$/i;
  
  return [s.match(pattern)[0]].concat(numPrefix(s));
}

// numberPrefix
function numPrefix(s) {
  const pattern = /\d[a-z]+/gi;

  const matched = s.match(pattern);
  if (matched == null) return [];
  return matched;
}

console.log(stringExpansion("V3D2a5d2f"));




