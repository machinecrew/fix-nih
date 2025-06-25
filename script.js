// Debug: pastikan config sudah dimuat
console.log("Isi dari quizData:", quizData);

window.onload = () => {
  const questionEl = document.getElementById("question");
  const clueEl = document.getElementById("clue");

  if (quizData && quizData.question) {
    questionEl.innerText = quizData.question;
    clueEl.innerText = "Clue: " + (quizData.clue || "Tidak ada petunjuk.");
  } else {
    questionEl.innerText = "Pertanyaan gagal dimuat.";
    clueEl.innerText = "";
    console.error("quizData tidak ditemukan.");
  }
};

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = quizData.answer.trim().toLowerCase();

  const notice = document.getElementById("notice");
  const reward = document.getElementById("reward");

  if (userAnswer === correctAnswer) {
    notice.innerText = "";
    reward.style.display = "block";
    reward.innerHTML = `
      🎉 GOKS! Click the following link for your prize:
      <br><a href="${quizData.rewardLink}" target="_blank">🎁 TAKE A PRIZE</a>
    `;
  } else {
    reward.style.display = "none";
    notice.innerText = "Jawaban Salah!";
    notice.style.display = "block";
    notice.style.color = "red";
    notice.style.fontWeight = "bold";
  }
}
