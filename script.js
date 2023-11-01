const questions = [
    {
        question: "What is the traditional Halloween activity of carving faces into pumpkins called?",
        options: ["Jack-o'-Lanterns", "Pumpkin Art", "Gourd Sculpting"],
        answer: "A"
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
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
}

loadQuestion();

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});
