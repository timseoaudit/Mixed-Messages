/* input from user maybe function that takes a string as an entry 
create random message from building blocks Arrays with X amount of answers
output to user */ 

const questionAnswerGame = string => {
    possibleAnswers = ['Not today', 'Maybe', 'Yes', 'No', 'Ask again later', 'I don\'t know', 'I don\'t think so', 'I think so', 'I\'m not sure, I\'m sure', 'I\'m positive', 'I\'m negative', 'I\'m neutral', 'I\'m not neutral', 'I\'m not positive']
    return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
}

console.log(questionAnswerGame('Will I win the lottery?'))