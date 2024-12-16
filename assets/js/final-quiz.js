document.addEventListener("DOMContentLoaded", () => {
    const correctAnswers = {
        q1: "a",
        q2: "b",
        q3: "a",
        q4: "b",
        q5: "b",
        q6: "b",
        q7: "a",
        q8: "b",
        q9: "b",
        q10: "b",
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
            resultMessage.textContent = `Amazing! You scored ${score}/${totalQuestions}. You’ve completed the course!`;
            localStorage.setItem("final-quiz-passed", "true");
        } else {
            resultMessage.textContent = `You scored ${score}/${totalQuestions}. Review the lessons and try again.`;
        }
    });
});
