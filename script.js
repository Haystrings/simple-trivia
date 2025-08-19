const facts = [
    {
        question: "The capital of France is Paris ",
        answer: "True",
        explanation: "The capital of France is Paris, known for its art, fashion, and culture."
    },
    {
        question: "Dunsimi is wicked",
        answer: "True",
        explanation: "Yeah, Dunsimi is wicked, he is a great guy and a good friend, but he still is wicked."
    },
    {
        question: "Ajibade is a great footballer",
        answer: "False",
        explanation: "I mean, bro can't even cross with his left foot, how can he be a great footballer?"
    },
    {
        question: "Tinubu is a great president",
        answer: "False",
        explanation: "Allegedly."
    },
    {
        question: "Haystrings too sabi",
        answer: "True",
        explanation: "Top guy, not top gee."
    }
]
let n = 0;
let fact = facts[n];
let correctAnswer = fact.answer;
let score = 0;
let total = facts.length;

const questions = document.querySelector("#question");
questions.innerHTML = fact.question;
questions.style.fontSize = '1.2em';

const explanations = document.querySelector('.answer');
explanations.innerHTML = fact.explanation;
explanations.style.marginTop = '2em';

const answer = document.querySelectorAll('.optionButton');
const nextButton = document.querySelector('.nextButton');
const scoreDisplay = document.querySelector('.score');
scoreDisplay.innerHTML = `Score: ${score}/${total}`;
const reset = document.querySelector('.reset');

const hide = (toHide) => toHide.setAttribute('hidden', '');
const show = (toShow) => toShow.removeAttribute('hidden', '');
const disable = (toDisable) => toDisable.setAttribute('disabled', ''); 
const enable = (toEnable) => toEnable.removeAttribute('disabled','');

hide(explanations);
disable(nextButton);
hide(reset);

// Add event listeners to each answer button
for (let eachOption of answer) {
    eachOption.addEventListener('click', () => {
        // When an option is clicked, disable all buttons
        for (let i = 0; i < answer.length; i++) {
            disable(answer[i]);
        }
        // Check if the clicked option is correct
        if (eachOption.innerHTML === correctAnswer){
            eachOption.style.backgroundColor = 'green';
            score++;
            scoreDisplay.innerHTML = `Score: ${score}/${total}`;//update the score
        }
        else{
            eachOption.style.backgroundColor = 'red';
        }
        show(explanations); // Show the explanation
        if (n == facts.length-1) {
        disable(nextButton); // If we reach the last question, hide the next button a
        show(reset); // Show the reset button
        }
        else{
            enable(nextButton);
        }
        //update the score
    });
}
// Function to handle the next question logic
const nextQuestion = () => {
    n++;
    fact = facts[n];
    correctAnswer = fact.answer;
    questions.innerHTML = fact.question;
    explanations.innerHTML = fact.explanation;
    correctAnswer = fact.answer;
    disable(nextButton);
}
nextButton.addEventListener('click', () => {
    for (let i = 0; i < answer.length; i++) {
            enable(answer[i]);
        }
    for (let eachOption of answer){
        removeEventListener('click', eachOption);
        eachOption.style.backgroundColor = '';
    }
    hide(explanations);
    nextQuestion();
})
reset.addEventListener('click', () => {
    location.reload(); 
});






