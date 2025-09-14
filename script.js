// Toggle animation class on button click
function animateBox(boxId) {
  const box = document.getElementById(boxId);
  box.classList.add('animated-box');
  return box.className;
}

// Flip card on click
function flipCard(cardId) {
  const card = document.getElementById(cardId);
  card.classList.toggle('flipped');
  return card.classList.contains('flipped');
}

// Scope demonstration
let globalCount = 0;
function incrementCount(localCount) {
  globalCount++;
  return localCount + 1;
}