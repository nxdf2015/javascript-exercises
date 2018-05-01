var reverseString = function(str) {
  return str
    .split(" ")
    .reduce((acc, word) => {
      acc.unshift(reverseWord(word));
      return acc;
    }, [])
    .join(" ");
};

function reverseWord(word) {
  return [...word].reduce((acc, letter) => letter + acc, "");
}

module.exports = reverseString;
