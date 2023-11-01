const allQuestions = [
    {
        question: "What is the traditional Halloween activity of carving faces into pumpkins called?",
        options: ["Jack-o'-Lanterns", "Pumpkin Art", "Gourd Sculpting"],
        answer: "A"
    },
    // Add more questions here
];

const numberOfQuestions = 7; // Number of questions to select randomly

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry-button");

// Function to shuffle questions randomly
function shuffleQuestions() {
    shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);
}

shuffleQuestions();

function loadQuestion() {
    const currentQuestionData = shuffledQuestions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${currentQuestionData.question}`;

    optionsContainer.innerHTML = "";
    currentQuestionData.options.forEach((option, index) => {
        const optionElement = document.createElement("input");
        optionElement.type = "radio";
        optionElement.name = "answer";
        optionElement.id = `option${index + 1}`;
        optionElement.value = String.fromCharCode(65 + index); // A, B, C, ...
        optionsContainer.appendChild(optionElement);

        const label = document.createElement("label");
        label.setAttribute("for", `option${index + 1}`);
        label.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionsContainer.appendChild(label);
    });

    nextButton.style.display = "none";
}

function showResult() {
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
    retryButton.style.display = "block";
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    loadQuestion();
    resultContainer.style.display = "none";
    retryButton.style.display = "none";
}

loadQuestion();

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        if (selectedOption.value === shuffledQuestions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < numberOfQuestions) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});

retryButton.addEventListener("click", resetQuiz);

