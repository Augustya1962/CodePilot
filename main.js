document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("nav-open");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.textContent = open ? "✕" : "☰";
    });
  }

  document.querySelectorAll("[data-quiz]").forEach(quiz => {
    const feedback = quiz.querySelector(".quiz-feedback");
    quiz.querySelectorAll("button[data-answer]").forEach(button => {
      button.addEventListener("click", () => {
        quiz.querySelectorAll("button").forEach(b => b.classList.remove("chosen", "correct-answer", "wrong-answer"));
        button.classList.add("chosen", button.dataset.answer === "correct" ? "correct-answer" : "wrong-answer");
        feedback.textContent = button.dataset.answer === "correct"
          ? "Correct — nice work. Try explaining why in your own words."
          : "Not quite. Review the example and try again.";
        feedback.classList.toggle("feedback-good", button.dataset.answer === "correct");
      });
    });
  });

  const checks = [...document.querySelectorAll(".topic-card input[type=checkbox]")];
  const progressText = document.getElementById("dsa-progress");
  const progressBar = document.getElementById("dsa-bar");
  const updateProgress = () => {
    if (!checks.length || !progressText || !progressBar) return;
    const count = checks.filter(c => c.checked).length;
    const percent = Math.round(count / checks.length * 100);
    progressText.textContent = percent + "%";
    progressBar.style.width = percent + "%";
  };
  checks.forEach(check => check.addEventListener("change", updateProgress));
  updateProgress();

  const notes = document.getElementById("answer-notes");
  const clear = document.getElementById("clear-notes");
  const status = document.getElementById("save-status");
  if (notes && clear && status) {
    notes.addEventListener("input", () => { status.textContent = "Draft updated in this page."; });
    clear.addEventListener("click", () => { notes.value = ""; status.textContent = "Draft cleared."; notes.focus(); });
  }

  document.querySelectorAll(".task-row input").forEach(input => {
    input.addEventListener("change", () => {
      const all = [...document.querySelectorAll(".task-row input")];
      const done = all.filter(item => item.checked).length;
      const count = document.querySelector(".task-count");
      if (count) count.textContent = `${done} of ${all.length} completed`;
    });
  });
});