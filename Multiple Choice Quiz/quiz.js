//Question includes category, question, choices, corect index, and explanation

const questions = [
    //Question 1: Geography
    {
        category: "Geography",
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2,
        explanation: "Paris is the capital and most populous city of France."
    },
    //Question 2: JSON
    {
        category: "JSON",
        question: "Which of the following is a valid JSON string?",
        choices: [
            '{"name": "John", "age": 30}',
            '{name: "John", age: 30}',
            '{name: "John", "age": 30}',
            '{"name": "John", age: 30}'
        ],
        correctAnswer: 0,
        explanation: "A valid JSON string must have double quotes around both keys and string values."
    },
    //Question 3: Geography
    {
        category: "Geography",
        question: "What is the capital of Fiji?",
        choices: ["Nadi", "Suva", "Lautoka", "Labasa"],
        correctAnswer: 1,
        explanation: "Suva is the capital and largest city of Fiji."
    },
    //Question 4: JSON
    {
        category: "JSON",
        question: "Which of the following is a valid Array Structure in JSON?",
        choices: [
            '["apple", "banana", "cherry"]',
            '["apple", banana, "cherry"]',
            'apple, "banana", "cherry"',
            '{"apple", "banana", cherry}'
        ],
        correctAnswer: 0,
        explanation: "A valid JSON array must be enclosed in square brackets and have double quotes around all string values."
    },
    //Question 5: The meaning of life
    {
        category: "Life",
        question: "What is the meaning of life?",
        choices: ["To be happy", "Nothing", "42"],
        correctAnswer: 2,
        explanation: "The Answer to the Ultimate Question of Life, The Universe, and Everything is canonically 42"
    },
    //Question 6: 
    {
        category: "Bootstrap",
        question: "Which class is used to define a column?",
        choices: ["container", "row", "col", "grid", "column"],
        correctAnswer: 2,
        explanation: "the 'col' class defines a column in a row"
    }
];

//Let user resume from where they left off.
let savedAnswers = JSON.parse(localStorage.getItem("answers")) || [];

//Builds the HTML layout for the Quiz
function buildQuestions() {
  document.getElementById('questions').innerHTML = questions.map((q, qIndex) => `
    <div style="padding:24px 0; border-bottom:${qIndex === questions.length - 1 ? 'none' : '1px solid lightgray'};"> 
        <div style="font-size: 18px;">${q.question}</div>
        <div style="font-size: 12px; font-style: italic; color: gray; margin-bottom:14px;">${q.category}</div>
        ${q.choices.map((choiceText, cIndex) => `
            <label id="q${qIndex}-c${cIndex}" style="display: block; padding:8px 0;">
                <input type="radio" name="q${qIndex}" value="${cIndex}" style="margin-right:10px;" ${savedAnswers[qIndex] === cIndex ? 'checked' : ''} onchange="saveAnswers()">
                ${choiceText}
            </label>
            `).join('')}
        <div id="exp${qIndex}" style="display: none; font-style: italic; margin-top: 8px;"></div>
    </div>
    `).join('');
}

//saves answers using the local storage so user can pick up where they left off
function saveAnswers() {
  const answers = questions.map((q, qIndex) => {
        const picked = document.querySelector('input[name="q' + qIndex + '"]:checked');
        return picked ? Number(picked.value) : null;
    });
    localStorage.setItem("answers", JSON.stringify(answers));
}

//When the submit button is clicked, function will check answers and return results
function submitQuiz() {
    let score = 0;

    questions.forEach((q, qIndex) => {
    const picked = document.querySelector('input[name="q' + qIndex + '"]:checked');
    const pickedIndex = picked ? Number(picked.value) : null;
 
        document.getElementById('q' + qIndex + '-c' + q.correctAnswer).style.cssText += 'color: green; font-weight: bold;'; //if answer is correct, text will be green
        if (pickedIndex !== null && pickedIndex !== q.correctAnswer) {
            document.getElementById('q' + qIndex + '-c' + pickedIndex).style.cssText += 'color: red; font-weight: bold;'; //if answer is wrong, text will be red
        }
        if (pickedIndex === q.correctAnswer) score++;
    
        document.querySelectorAll('input[name="q' + qIndex + '"]').forEach(input => input.disabled = true);
    
        const exp = document.getElementById('exp' + qIndex);
        exp.textContent = q.explanation;
        exp.style.display = 'block';
    });

    document.getElementById('score-row').style.display = 'flex';
    document.getElementById('score').textContent = score + ' / ' + questions.length;
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
    
    // Quiz is done, clear saved progress
    localStorage.removeItem("answers");
}

//Reset quiz
function restartQuiz() {
    savedAnswers = [];
    localStorage.removeItem("answers");
    document.getElementById('score-row').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('restart-btn').style.display = 'none';
    buildQuestions();
}

//button clicks
document.getElementById('submit-btn').onclick = submitQuiz;
document.getElementById('restart-btn').onclick = restartQuiz;

//call to build questions
buildQuestions();

