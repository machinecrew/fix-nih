// script.js

// 🔍 Cek apakah quizData berhasil dimuat
console.log("Isi dari quizData:", quizData);

window.onload = () => {
  // Tampilkan pertanyaan dari config.js
  const questionEl = document.getElementById("question");
  if (quizData && quizData.question) {
    questionEl.innerText = quizData.question;
  } else {
    questionEl.innerText = "Pertanyaan gagal dimuat.";
    console.error("quizData tidak ditemukan atau kosong.");
  }
};

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = quizData.answer.trim().toLowerCase();

  const notice = document.getElementById("notice");
  const reward = document.getElementById("reward");

  if (userAnswer === correctAnswer) {
    // Jawaban benar
    notice.innerText = "";
    reward.style.display = "block";
    reward.innerHTML = `
      🎉 Selamat! Klik link berikut untuk hadiahmu:
      <br><a href="${quizData.rewardLink}" target="_blank">🎁 Ambil Hadiah</a>
    `;
  } else {
    // Jawaban salah
    reward.style.display = "none";
    notice.innerText = "Jawaban Salah!";
    notice.style.display = "block";
    notice.style.color = "red";
    notice.style.fontWeight = "bold";
  }
}
