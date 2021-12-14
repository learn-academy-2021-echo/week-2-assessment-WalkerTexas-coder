// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

// a) Your answer: ["E", "c", "h", "o", " ", "2", "0", "2", "1" ]
// b) Verify and explain: when you spilt by an empty string it splits at every character including spaces.
// ["E","c","h","o"," "...]


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: A lack of a return will give us an undefined-- if we add the return we will get the expected result. 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: .map will itterate the length of the array and multiply each value by 2. 


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: will return an array with the values that are not even.
// b) Verify and explain: [11,13,15]


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: The dot notation will access the key of languages and the square brackets with that are zero indexed will access the first value of the array which is JavaScript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021,
     
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {"George", "Delta", 2021}
// b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2021 }
// Learn class only takes in one value that is the parameter "name". This is the only dynamic value. 
