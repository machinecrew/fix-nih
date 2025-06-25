// script.js
window.onload = () => {
  document.getElementById("question").innerText = quizData.question;
};

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const notice = document.getElementById("notice");
  const reward = document.getElementById("reward");

  if (userAnswer === quizData.answer.toLowerCase()) {
    notice.style.display = "none";
    reward.style.display = "block";
    reward.innerHTML = `🎁 Selamat! Klik hadiahmu di sini: <a href="${quizData.rewardLink}" target="_blank">Ambil Hadiah</a>`;
  } else {
    notice.innerText = "Jawaban Salah!";
    notice.style.display = "block";
    reward.style.display = "none";
  }
}
