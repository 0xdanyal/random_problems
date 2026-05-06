
// if length > 10 → abbreviate
// else → print as it is

// e.g. word = "localization"
// length - 2 = 12 - 2 = 10
// that's why it's abbrivation should be "firstLetter" + 10 "last letter"
// Hence Result = l + 10 + n → l10n


function solve(words) {
  for (let word of words) {
    if (word.length > 10) {
      let result = word[0] + (word.length - 2) + word[word.length - 1];
      console.log(result);
    } else {
      console.log(word);
    }
  }
}

// testing some input values
solve([
  "word",
  "localization",
  "internationalization",
  "pneumonoultramicroscopicsilicovolcanoconiosis"
]);