let score = 0;
let soal = 0;
const form = document.forms["answer_form"];

function randomSoal() {
  const question = document.getElementById("question");
  soal = Math.floor(Math.random() * 100);
  question.innerText = soal;
  document.querySelector("input[name=answer]").value = soal;
  document.getElementById("answer_as_soal").innerHTML = soal;
}
function setScore() {
  const scoreEl = document.getElementById("score");
  scoreEl.innerText = score;
}
function addScore() {
  score += 5;
  setScore();
}
function fizzBuzz(angka) {
  if (angka % 3 === 0 && angka % 5 === 0) {
    return "fizz buzz";
  } else if (angka % 3 === 0) {
    return "fizz";
  } else if (angka % 5 === 0) {
    return "buzz";
  } else {
    return Number(angka).toString();
  }
}
function checkAnswer(jawaban) {
  console.log(jawaban);
  console.log(soal);
  if (jawaban.toLowerCase() === fizzBuzz(soal)) {
    addScore();
    alert("uhuy benar 😍");
  } else {
    alert("yah salah 🤣");
  }
  randomSoal();
}
function answerQuestion() {
  setTimeout(function () {
    checkAnswer(form.answer.value);
  }, 100);
}

for (const answerEl of form.answer) {
  answerEl.onclick = function () {
    answerQuestion();
  }
}

setScore();
randomSoal();
