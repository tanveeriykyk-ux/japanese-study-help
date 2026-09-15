/* =========================
   JAPANESE STUDY HELPER
   ========================= */


/* SEARCH DATA */

const searchData = [

  {
    japanese: "ねこ",
    romaji: "neko",
    english: "cat"
  },

  {
    japanese: "いぬ",
    romaji: "inu",
    english: "dog"
  },

  {
    japanese: "みず",
    romaji: "mizu",
    english: "water"
  },

  {
    japanese: "やま",
    romaji: "yama",
    english: "mountain"
  },

  {
    japanese: "そら",
    romaji: "sora",
    english: "sky"
  },

  {
    japanese: "はな",
    romaji: "hana",
    english: "flower"
  },

  {
    japanese: "りんご",
    romaji: "ringo",
    english: "apple"
  },

  {
    japanese: "みかん",
    romaji: "mikan",
    english: "mandarin orange"
  },

  {
    japanese: "さかな",
    romaji: "sakana",
    english: "fish"
  },

  {
    japanese: "たまご",
    romaji: "tamago",
    english: "egg"
  },

  {
    japanese: "でんわ",
    romaji: "denwa",
    english: "telephone"
  },

  {
    japanese: "せんせい",
    romaji: "sensei",
    english: "teacher"
  },

  {
    japanese: "がくせい",
    romaji: "gakusei",
    english: "student"
  },

  {
    japanese: "ほん",
    romaji: "hon",
    english: "book"
  },

  {
    japanese: "おんがく",
    romaji: "ongaku",
    english: "music"
  }

];


/* SEARCH FUNCTION */

const searchInput =
  document.getElementById("searchInput");

const searchResults =
  document.getElementById("searchResults");


searchInput.addEventListener("input", function () {

  const query =
    searchInput.value.toLowerCase().trim();


  if (query === "") {

    searchResults.innerHTML = "";

    return;
  }


  const results =
    searchData.filter(item =>

      item.japanese.includes(query) ||

      item.romaji.includes(query) ||

      item.english.includes(query)

    );


  if (results.length === 0) {

    searchResults.innerHTML =
      "<p>No results found.</p>";

    return;
  }


  searchResults.innerHTML =
    results.map(item => `

      <div class="search-result">

        <strong>
          ${item.japanese}
        </strong>

        <br>

        ${item.romaji}

        <br>

        ${item.english}

      </div>

    `).join("");

});


/* =========================
   QUIZ
   ========================= */


const questions = [

  {
    question: "What does ねこ mean?",
    answers: [
      "Cat",
      "Dog",
      "Water",
      "Mountain"
    ],
    correct: "Cat"
  },

  {
    question: "What does みず mean?",
    answers: [
      "Apple",
      "Water",
      "Fish",
      "Book"
    ],
    correct: "Water"
  },

  {
    question: "What does いぬ mean?",
    answers: [
      "Dog",
      "Cat",
      "Teacher",
      "Student"
    ],
    correct: "Dog"
  },

  {
    question: "What does ほん mean?",
    answers: [
      "Book",
      "Water",
      "Sky",
      "Flower"
    ],
    correct: "Book"
  },

  {
    question: "What does せんせい mean?",
    answers: [
      "Student",
      "Teacher",
      "Friend",
      "Doctor"
    ],
    correct: "Teacher"
  }

];


let currentQuestion = 0;


function loadQuestion() {

  const question =
    questions[currentQuestion];


  document.getElementById("question")
    .textContent = question.question;


  const answers =
    document.getElementById("answers");


  answers.innerHTML = "";


  question.answers.forEach(answer => {

    const button =
      document.createElement("button");

    button.textContent = answer;

    button.onclick = function () {

      checkAnswer(answer);

    };

    answers.appendChild(button);

  });


  document.getElementById("quizResult")
    .textContent = "";

}


function checkAnswer(answer) {

  const correct =
    questions[currentQuestion].correct;


  const result =
    document.getElementById("quizResult");


  if (answer === correct) {

    result.textContent =
      "✅ Correct! Great job!";

  } else {

    result.textContent =
      "❌ Not quite. The correct answer is " +
      correct + ".";

  }

}


function nextQuestion() {

  currentQuestion++;

  if (currentQuestion >= questions.length) {

    currentQuestion = 0;

  }

  loadQuestion();

}


/* START QUIZ */

loadQuestion();
