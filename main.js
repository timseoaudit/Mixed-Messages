
const questionAnswerGame = string => { // call function with a string the string is the question
    possibleAnswers = ['Not today', 'Maybe', 'Yes', 'No', 'Ask again later', 'I don\'t know', 'I don\'t think so', 'I think so', 'I\'m not sure about this', 'I\'m sure', 'I\'m positive about this', 'I\'m negative about this', 'I\'m neutral about this', 'I\'m not neutral about this, but I also can not give you an answer for this ', 'I\'m not positive about this ']
    // possibleAnswers has all answeres prepared that the program give out
    console.log(` Your question was: ${string}. And I tell you that ${possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]}.`)
    //log the answer in the console and will return a string that repeat the question and than give one of the random answers.
}

questionAnswerGame('Will we go home today?')
// call the function with a question as a string.