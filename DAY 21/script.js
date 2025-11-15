const quizData = [
  {
      question: "What does DOM stand for?",
      options: [
          "Document Order Model",
          "Document Object Model",
          "Data Object Method",
          "Direct Object Management"
      ],
      correct: 1
  },
  {
      question: "Which method selects by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElement()",
        "getElementsByClassName()"
      ],
      correct: 0
    },
    {
      question: "Which event fires on input change?",
      options: ["click", "submit", "change", "keydown"],
      correct: 2
    }
];

let questions = [...quizData].sort(()=> Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeleft=15;
// console.log(questions);

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {

// timer
clearInterval(timer);
timeleft = 15;
// updateTimer()  
timer = setInterval(countdown,1000);



  const q = questions[currentQuestion];
  // console.log(q);
  questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
  optionsEl.innerHTML = "";

  q.options.forEach((option, index) => {
      const btn = document.createElement("button");
      btn.classList.add("option-btn");
      btn.textContent = option;
      btn.addEventListener("click", () => selectAnswer(index, true))
      optionsEl.appendChild(btn);  
  });
  nextBtn.style.display = 'none'
}

function selectAnswer(index){
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll('.option-btn')
  buttons.forEach(btn => btn.disabled = true)
  if(index === q.correct){  
    buttons[index].classList.add('correct');
    score=score+10;
  }
  else{
    buttons[index].classList.add('wrong')
    buttons[q.correct].classList.add('correct')
  }
  nextBtn.style.display = 'inline-block'
}

nextBtn.addEventListener('click',function(){
  currentQuestion++;
  if(currentQuestion < questions.length)loadQuestion()
    else{
      // result
      showResult();
    }
})
function showResult(){
  nextBtn.style.display = 'none'
  const highScore = localStorage.getItem('quizHighScore' || 0);
  const isNew = score > highScore;
  if(isNew){
    localStorage.setItem('quizHighScore',score)
  }
  resultEl.innerHTML= `
      <p>Quiz Completed</p>
      <p>Your quiz Score : ${score}</p>
      <p>Highest Score: ${Math.max(score,highScore)}</p>
      <button onclick='location.reload()' class="option-btn">Restart</button>
    `
    
}
function countdown(){
  timeleft--;
  // updateTimer()
  if(timer === 0){
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct)

  }
}

function updateTimer(){
  timerEl.textContent = `🕑 ${timeleft}`
}


loadQuestion();