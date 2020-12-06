// Assignment One: Fun quiz App KBC Show

// Welcoming User

var readlineSync= require("readline-sync")

var userName=readlineSync.question(" Please type  Participant Name for Todays Show :")

// chalk is used for style

const chalk = require('chalk');

//declaring a variable to hold score
var score=0
var levels= ""
console.log(chalk.red("Hello "+ userName + " Welcome to KBC Show !! "))

// creating a question array for KBC quiz

var questionBank=[
  {
    question:`
    In 2008, Rajasthan Royals became the first winner of which annual sporting event?

    Options:
    a:PKL
    b:ISL
    c:PHL
    d:IPL
     `,
    answer:"d"
  },
  {
    question:`
    What are the terms 3G, 4G and 5G related to?"
    Options:
    a:Population Generations
    b:Phone Networks
    c:Digital Camera
    d:Grading in Schools
    `,
    answer:"b"
  },
  {
    question:`
      What is the new name of the Hyderabad franchise that would replace Deccan Charges in IPL6?
      Options: 
      a:Sun Chargers 
      b:Nizam Jyothi
      c: Andhra Aces 
      d: Sun risers Hyderabad
    
    `,
    answer:"d"
  },
  {
    question:`
    Which among these is an Island country ?
    Options:
    a:Yemen
    b:Maldives
    c:Oman 
    d:Peru
    `,
    answer:"b"
  },
  {
    question:`
    
      In which state is 'Ganesh Utsav' celebrated?
    Options:
    a:Madhya Pradesh
    b:Maharashtra
    C:West Bengal
    d:Gujrat

    `,
    answer:"b"
  },
  {
    question:`
    Which of the' following is one of the seven wonders of Medieval World?
    Options:
    a:Hanging Gardens of Babylon
    b:Taj Mahal
    c:Leaning Tower of Pisa
    d:Pyramids of Egypt

    `,
    answer:"b"

  },
  {
    question:`
     Options:
    'Dandia' is a popular dance of ?'
    a:Maharashtra
    b:Gujarat
    c:Tamil Nadu
    d:Punjah
    `,
    answer:"b"

  },
 
]

// creating a function for quiz

function play_quiz(questions,answer)
{

  var userAnswer=readlineSync.question(questions)

  if (userAnswer===answer)
  {
    score=score+1

  }
  else
  {

    score=score-1
  }

  console.log(chalk.greenBright("Current Score :"+score))
  console.log(chalk.magentaBright("---------------------------------------------------"))
}


for (var i=0;i<questionBank.length;i++)
{

  var currentQuestion=questionBank[i]

  play_quiz(currentQuestion.question,currentQuestion.answer)

 // check_level(score)

}

// printing final score

console.log(chalk.blueBright("Your final score is :", score))

// Checking Levels

if (score>=5)
{
  level="Level2"
  console.log(chalk.yellowBright("Congratulations You have reached to:",level))

}
else if (score>=2 && score<5)

{
  level="Level1"
  console.log(chalk.yellowBright("Congratulations You have reached to:",level))

}
else{

  console.log(chalk.yellowBright("You are not qualify for any Levels"))


}




