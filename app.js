let solutionDisplay = document.querySelector('#solutionDisplay');
let solution = document.querySelector('#solution');
let subtitle = document.querySelector('#subtitle');
let symbol = document.querySelector('#symbol');
let questionMark = document.querySelector('#questionMark');

let correctAns = 0;
let incorrectAns = 0;

const numOne = {
    value: Math.floor(Math.random() * 255),
    display: document.querySelector('#numOneDisplay')
}

const numTwo = {
    value: Math.floor(Math.random() * 255),
    display: document.querySelector('#numTwoDisplay')
}

const player = {
    numOfQuest: 0,
    correct: 0,
    incorrect: 0
}

numOne.display.innerHTML = numOne.value;
numTwo.display.innerHTML = numTwo.value;

function sum() {
    let mySum = numOne.value + numTwo.value;
    player.numOfQuest++;
    if (parseInt(solution.value) === mySum) {
        solutionDisplay.textContent = "Yes, correct answer.";
      
        correctAns++;
        nextQuestion();

    } else {

        solutionDisplay.textContent = `Sorry the correct answer was ${mySum}.`;
        nextQuestion();
        
        incorrectAns++;

    }
}

function nextQuestion() {
        numOne.value = Math.floor(Math.random() * 255);
        numTwo.value = Math.floor(Math.random() * 255);
        numOne.display.innerHTML = numOne.value;
        numTwo.display.innerHTML = numTwo.value;
        solution.value = "";
}

function results() {
    subtitle.innerHTML = "Thank you for playing, your results are below.";
    symbol.innerHTML = "";
    questionMark.innerHTML = "";
    numOne.display.innerHTML = "";
    numTwo.display.innerHTML = "";
    solutionDisplay.innerHTML = `Out of ${player.numOfQuest} question(s), you got ${correctAns} correct, and
    ${incorrectAns} incorrect.`
    correctAns = 0;
    incorrectAns = 0;
}

