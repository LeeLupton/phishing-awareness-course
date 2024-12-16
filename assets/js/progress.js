document.addEventListener("DOMContentLoaded", () => {
    // Define the lessons and their quiz keys
    const lessons = [
        { id: "lesson1", quizKey: "quiz1-passed" },
        { id: "lesson2", quizKey: "quiz2-passed" },
        { id: "lesson3", quizKey: "quiz3-passed" },
        { id: "lesson4", quizKey: "quiz4-passed" },
        { id: "lesson5", quizKey: "quiz5-passed" },
        { id: "lesson6", quizKey: "quiz6-passed" },
        { id: "lesson7", quizKey: "quiz7-passed" },
        { id: "lesson8", quizKey: "quiz8-passed" },
    ];

    // Iterate through the lessons
    lessons.forEach((lesson, index) => {
        const link = document.querySelector(`a[data-lesson="${lesson.id}"]`);
        const status = document.querySelector(`#quiz${index + 1}-status`);

        if (localStorage.getItem(lesson.quizKey) === "true") {
            // Unlock this lesson
            link.classList.remove("locked");
            status.textContent = "Quiz Passed";
        } else {
            // Keep it locked
            link.classList.add("locked");
            status.textContent = "Quiz Locked";

            // Disable the link
            link.addEventListener("click", (event) => {
                event.preventDefault();
                alert("Complete the previous quiz to unlock this lesson.");
            });
        }
    });
});
