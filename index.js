const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }



function titleCased() {
  const upperCaseIt = tutorials.map(function(words) {
    const newArray = [];
    const splitWords = words.split(" ");
    for (const splitWord of splitWords) {
      newArray.push(splitWord[0].toUpperCase() + splitWord.slice(1))
    }
    return newArray.join(" ");
  });
  return upperCaseIt;
};