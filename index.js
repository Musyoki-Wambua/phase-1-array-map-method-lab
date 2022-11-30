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

// split the string into an array of strings

//map over the array
//split() splits a string object into an array of strings by separating the string into substrings

//concatenate (+ between strings/ variables you want to connect)
// charAt () returns specified character from a string 
// slice () extracts a section of a string and returns a new string
//join () joins all elements of an array into a string 

const titleCased = () => tutorials.map(tutorial => tutorial.split(" ").map(
    word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  )
