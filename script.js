const ADVICE_URL = "https://api.adviceslip.com/advice";
const adviceIdEl = document.querySelector(".advice-id");
const adviceTextEl = document.querySelector(".advice-text");
const diceBtn = document.getElementById("dice");

async function getNewAdvice() {
  const response = await fetch(`${ADVICE_URL}?${Math.random()}`); 
  const data = await response.json();

  adviceIdEl.textContent = `ADVICE #${data.slip.id}`;
  adviceTextEl.textContent = `“${data.slip.advice}”`;
}

diceBtn.addEventListener("click", getNewAdvice);