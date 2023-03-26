// Define quiz questions and answers
const questions = [
    {
      question: "What is the file extension for a JavaScript file?",
      answer: ".js"
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      answer: "float"
    },
    {
      question: "What is the output of the following code?\n\nconsole.log(typeof(null));",
      answer: "object"
    },
    {
      question: "What does DOM stand for?",
      answer: "Document Object Model"
    },
    {
      question: "What is the syntax for a for loop in JavaScript?",
      answer: "for (i = 0; i < 5; i++)"
    }
  ];
  
  // Define global variables
  let score = 0;
  let currentQuestion = 0;
  let timeLeft = 60;
  let timerId;
  
  // Define event listeners
  document.getElementById("start").addEventListener("click", startQuiz);
  document.getElementById("submit").addEventListener("click", checkAnswer);
  
  // Function to start the quiz
  function startQuiz() {
    // Hide start button
    document.getElementById("start").style.display = "none";
    // Display first question
    showQuestion();
    // Start timer
    timerId = setInterval(function() {
      timeLeft--;
      // Update timer display
      document.getElementById("timer").innerHTML = "Time: " + timeLeft;
      // Check if time has run out
      if (timeLeft === 0) {
        clearInterval(timerId);
        endGame();
      }
    }, 1000);
  }
  
  // Function to display a question
  function showQuestion() {

    document.getElementById("quiz").style.display = "block";
    // Get current question
    const question = questions[currentQuestion];
    // Display question
    // document.getElementById("question").style.display = "block";
    document.getElementById("question").textContent = question.question;
    console.log(question.question);
  }
  
  // Function to check if answer is correct
  function checkAnswer() {
    // Get current question
    const question = questions[currentQuestion];
    // Get user's answer
    const answer = document.getElementById("answer").value;
    // Check if answer is correct
    if (answer === question.answer) {
      // Increment score
      score++;
      // Display feedback
      document.getElementById("feedback").textContent = "Correct!";
    } else {
      // Deduct time from timer
      timeLeft -= 10;
      // Display feedback
      document.getElementById("feedback").textContent = "Wrong!";
    }
    // Move on to next question
    currentQuestion++;
    // Check if game is over
    if (currentQuestion === questions.length || timeLeft === 0) {
      endGame();
    } else {
      showQuestion();
    }
  }
  
  // Function to end the game
  function endGame() {
    // Stop timer
    clearInterval(timerId);
    // Hide quiz container
    document.getElementById("quiz").style.display = "none";
    // Display game over container
    document.getElementById("gameover").style.display = "block";
    // Display score
    document.getElementById("score").textContent = "Your score: " + score;
  }
  
  // Function to reset the game
  function resetGame() {
    // Reset global variables
    score = 0;
    currentQuestion = 0;
    timeLeft = 60;
    // Hide game over container
    document.getElementById("gameover").style.display = "none";
    // Display start button
    document.getElementById("start").style.display = "block";
  }
  