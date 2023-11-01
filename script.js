const allQuestions = [
    {
        "question": "What is the traditional Halloween activity of carving faces into pumpkins called?",
        "options": ["Jack-o'-Lanterns", "Pumpkin Art", "Gourd Sculpting"],
        "answer": "A"
    },
    {
        "question": "Which vegetable was originally used for Jack-o'-Lanterns before pumpkins?",
        "options": ["Turnips", "Cucumbers", "Carrots"],
        "answer": "A"
    },
    {
        "question": "What do people commonly say to ask for treats on Halloween night?",
        "options": ["Trick or treat", "Give me candy", "Happy Halloween"],
        "answer": "A"
    },
    {
        "question": "Which mythical creature is often associated with vampires and transforms into a bat?",
        "options": ["Dracula", "Werewolf", "Frankenstein"],
        "answer": "A"
    },
    {
        "question": "What is the fear of Halloween called?",
        "options": ["Samhainophobia", "Arachnophobia", "Agoraphobia"],
        "answer": "A"
    },
    {
        "question": "What is the name of the ghost in Charles Dickens' 'A Christmas Carol'?",
        "options": ["Ebenezer Scrooge", "Tiny Tim", "Jacob Marley"],
        "answer": "C"
    },
    {
        "question": "What is the traditional Halloween candy given away to trick-or-treaters?",
        "options": ["Candy canes", "Chocolate bars", "Candy corn"],
        "answer": "C"
    },
    {
        "question": "Which famous magician died on Halloween in 1926?",
        "options": ["David Blaine", "Houdini", "David Copperfield"],
        "answer": "B"
    },
    {
        "question": "In what country did the tradition of Halloween originate?",
        "options": ["United States", "Ireland", "Mexico"],
        "answer": "B"
    },
    {
        "question": "What do people typically bob for on Halloween?",
        "options": ["Apples", "Pumpkins", "Oranges"],
        "answer": "A"
    },
    {
        "question": "What is the name of the headless horseman in Washington Irving's 'The Legend of Sleepy Hollow'?",
        "options": ["Ichabod Crane", "Brom Bones", "Katrina Van Tassel"],
        "answer": "A"
    },
    {
        "question": "What animal is often associated with witches?",
        "options": ["Black cat", "Owl", "Toad"],
        "answer": "A"
    },
    {
        "question": "What is the most popular Halloween costume for kids?",
        "options": ["Witch", "Pirate", "Superhero"],
        "answer": "A"
    },
    {
        "question": "What holiday is often celebrated on the night before Halloween?",
        "options": ["Thanksgiving", "Valentine's Day", "Mischief Night"],
        "answer": "C"
    },
    {
        "question": "What is the name of the vampire in Bram Stoker's 'Dracula'?",
        "options": ["Nosferatu", "Vlad the Impaler", "Count Dracula"],
        "answer": "C"
    },
    {
        "question": "What is the fear of witches called?",
        "options": ["Wiccanophobia", "Witchcraftophobia", "Hexakosioihexekontahexaphobia"],
        "answer": "C"
    },
    {
        "question": "What is the traditional Halloween color associated with death and darkness?",
        "options": ["Black", "Orange", "Green"],
        "answer": "A"
    },
    {
        "question": "What is the name of the monster created by Victor Frankenstein in Mary Shelley's 'Frankenstein'?",
        "options": ["The Mummy", "The Creature", "The Monster"],
        "answer": "C"
    },
    {
        "question": "What fruit is often associated with the fall and Halloween season?",
        "options": ["Watermelon", "Cantaloupe", "Pumpkin"],
        "answer": "C"
    },
    {
        "question": "What is the name of the house in the movie 'Psycho' known for its creepy shower scene?",
        "options": ["Bates Mansion", "Haunted House", "Spooky Manor"],
        "answer": "A"
    },
    {
        "question": "What is the name of the doll that comes to life in the movie 'Child's Play'?",
        "options": ["Raggedy Ann", "Cabbage Patch Kid", "Chucky"],
        "answer": "C"
    },
    {
        "question": "What is the traditional Halloween dessert that looks like a mummy wrapped in bandages?",
        "options": ["Cupcakes", "Brownies", "Mummy Dogs"],
        "answer": "A"
    },
    {
        "question": "What is the name of the fictional town where 'The Addams Family' resides?",
        "options": ["Spookyville", "Creepsville", "Addams Town"],
        "answer": "C"
    },
    {
        "question": "What is the name of the town in Washington known for its alleged Bigfoot sightings?",
        "options": ["Salem", "Roswell", "Bellingham"],
        "answer": "C"
    },
    {
        "question": "What classic horror novel features Count Dracula as a vampire villain?",
        "options": ["Dracula", "Frankenstein", "The Shining"],
        "answer": "A"
    },
    {
        "question": "What is the name of the murderous demon clown in Stephen King's 'It'?",
        "options": ["Pennywise", "Bubbles", "Bozo"],
        "answer": "A"
    },
    {
        "question": "What is the fear of spiders called?",
        "options": ["Arachnophobia", "Insectophobia", "Entomophobia"],
        "answer": "A"
    },
    {
        "question": "What is the name of the young girl who falls into a rabbit hole in Lewis Carroll's 'Alice's Adventures in Wonderland'?",
        "options": ["Wendy", "Dorothy", "Alice"],
        "answer": "C"
    },
    {
        "question": "In what classic horror film does a young woman named Regan become possessed by a demon?",
        "options": ["The Shining", "The Exorcist", "Rosemary's Baby"],
        "answer": "B"
    },
    {
        "question": "What is the fear of the number 13 called?",
        "options": ["Triskaidekaphobia", "Tetraphobia", "Hexakosioihexekontahexaphobia"],
        "answer": "A"
    }
];

const numberOfQuestions = 7; // Number of questions to select randomly

let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const retryButton = document.getElementById("retry-button");

// Function to shuffle questions randomly
function shuffleQuestions() {
    shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, numberOfQuestions);
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

    submitButton.style.display = "block";
}

function showResult() {
    resultContainer.style.display = "block";
    scoreElement.textContent = score;
    submitButton.style.display = "none";
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

submitButton.addEventListener("click", () => {
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

retryButton.addEventListener("click", () => {
    resetQuiz();
});
