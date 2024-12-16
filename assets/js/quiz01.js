document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = {
        q1: "b",
        q2: "b",
        q3: "c",
    };

    const form = document.getElementById("quiz-form");
    const submitButton = document.getElementById("submit-button");
    const quizResult = document.getElementById("quiz-result");
    const resultMessage = document.getElementById("result-message");

    submitButton.addEventListener("click", () => {
        let score = 0;
        const userAnswers = new FormData(form);

        for (const [question, answer] of userAnswers.entries()) {
            if (correctAnswers[question] === answer) {
                score++;
            }
        }

        // Display results
        const totalQuestions = Object.keys(correctAnswers).length;
        quizResult.classList.remove("hidden");

        if (score === totalQuestions) {
            resultMessage.textContent = `Great job! You scored ${score}/${totalQuestions}. Lesson 2 is now unlocked.`;
            localStorage.setItem("quiz1-passed", "true"); // Unlock Lesson 2
        } else {
            resultMessage.textContent = `You scored ${score}/${totalQuestions}. Review the lesson and try again.`;
        }
    });
});
