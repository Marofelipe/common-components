const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(index) {
  if (needToogleFullClass(index)) index--;

  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length,
    totalCups = smallCups.length;

  const cupIsEmpty = fullCups === 0;
  const cupIsFull = fullCups === totalCups;
  percentage.style.visibility = cupIsEmpty ? "hidden" : "visible";

  const pct = (fullCups / totalCups) * 100;

  percentage.style.height = `${pct}%`;
  percentage.innerText = `${pct}%`;

  remained.style.visibility = cupIsFull ? "hidden" : "visible";
  remained.style.height = cupIsFull ? 0 : `${100 - pct}%`;
}

function needToogleFullClass(idx) {
  const isFirstOrLastCup = [0, smallCups.length - 1].includes(idx);
  const isFull = smallCups[idx].classList.contains("full");

  return (
    isFull &&
    (isFirstOrLastCup ||
      (idx != 0 && smallCups[idx - 1].classList.contains("full")))
  );
}
