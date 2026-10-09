const stage = document.getElementById('mailStage');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const closeLetter = document.getElementById('closeLetter');
const hint = document.getElementById('hint');
const replay = document.getElementById('replay');

function openLetter() {
  stage.classList.add('open');
  envelope.setAttribute('aria-expanded', 'true');
  letter.setAttribute('aria-hidden', 'false');
  hint.textContent = 'a little note from me to you ♡';
  replay.hidden = false;
}

function closeIt() {
  stage.classList.remove('open');
  envelope.setAttribute('aria-expanded', 'false');
  letter.setAttribute('aria-hidden', 'true');
  hint.textContent = 'tap the envelope to open your letter';
  replay.hidden = true;
}

envelope.addEventListener('click', () => {
  if (stage.classList.contains('open')) closeIt();
  else openLetter();
});
closeLetter.addEventListener('click', closeIt);
replay.addEventListener('click', closeIt);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && stage.classList.contains('open')) closeIt();
});
