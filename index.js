document.getElementById('dice-selection-form').addEventListener('submit', (e) => {
    e.preventDefault();
    rollDice(parseInt(e.target.selection.value))
})

function rollDice(faces) {
    const number = Math.floor(Math.random() * faces) + 1
    const answerText = document.getElementById('answer-text');

    answerText.textContent = "Rolled: " + number;
}