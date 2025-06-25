// Tampilkan pertanyaan
document.getElementById("question").textContent = quizConfig.question;

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const notice = document.getElementById("notice");
  const rewardBox = document.getElementById("reward");

  // Reset tampilan
  notice.style.display = "none";
  rewardBox.style.display = "none";

  if (quizConfig.answers.includes(userAnswer)) {
    // Jawaban benar
    rewardBox.innerHTML = `🎉 Selamat! Jawabanmu benar.<br><a href="${quizConfig.rewardLink}" target="_blank">Klik untuk klaim hadiah</a>`;
    rewardBox.style.display = "block";
  } else {
    // Jawaban salah
    notice.textContent = "Jawaban Salah!";
    notice.style.display = "block";
  }
}
