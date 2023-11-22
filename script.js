const QUESTIONS = [
{question: "question 1 ?"},
{question: "question 2 ?"},
{question: "question 3 ?"},
{question: "question 4 ?"},
{question: "question 5 ?"},
{question: "question 6 ?"},
{question: "question 7 ?"},
{question: "question 8 ?"},
{question: "question 9 ?"},
{question: "question 10 ?"}
];

window.onload = generateQuestion();

function generateQuestion() {
  let quoteSize = QUESTIONS.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuestionData = QUESTIONS[randomIndex];

  document.getElementById('text').innerHTML = randomQuestionData.question
}