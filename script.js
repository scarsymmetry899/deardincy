const $ = (s) => document.querySelector(s);
const loader = $('#loader');
const app = $('#app');
const landing = $('#landing');
const openLetter = $('#openLetter');
const openCta = $('#openCta');
const openingWhisper = $('#openingWhisper');
const letterScene = $('#letterScene');
const letterSheet = $('#letterSheet');
const foldLetter = $('#foldLetter');
const closedEnding = $('#closedEnding');
const reopen = $('#reopen');
const soundToggle = $('#soundToggle');

let opened = false;
let soundOn = false;
let audioCtx = null;

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function paperSound(duration = 0.18, volume = 0.016) {
  if (!soundOn) return;
  const ctx = ensureAudio();
  const length = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / length) * 0.7;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  filter.type = 'bandpass';
  filter.frequency.value = 1050;
  gain.gain.value = volume;
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(ctx.destination);
  source.start();
}

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hide');
    app.setAttribute('aria-hidden', 'false');
  }, 1350);
});

function revealLetter() {
  if (opened) return;
  opened = true;
  paperSound(0.24, 0.022);
  openLetter.classList.add('opening');
  openingWhisper.classList.add('show');

  setTimeout(() => {
    landing.style.transition = 'opacity .75s ease, transform .75s ease';
    landing.style.opacity = '0';
    landing.style.transform = 'scale(1.012)';
  }, 1100);

  setTimeout(() => {
    landing.style.display = 'none';
    letterScene.classList.add('visible');
    letterScene.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 1780);
}

openLetter.addEventListener('click', revealLetter);
openCta.addEventListener('click', revealLetter);

foldLetter.addEventListener('click', () => {
  paperSound(0.30, 0.024);
  letterSheet.style.opacity = '0';
  letterSheet.style.transform = 'translateY(24px) scale(.95) rotate(-1deg)';
  setTimeout(() => {
    letterSheet.style.visibility = 'hidden';
    closedEnding.classList.add('show');
    closedEnding.setAttribute('aria-hidden', 'false');
  }, 650);
});

reopen.addEventListener('click', () => {
  paperSound(0.20, 0.016);
  closedEnding.classList.remove('show');
  closedEnding.setAttribute('aria-hidden', 'true');
  letterSheet.style.visibility = 'visible';
  requestAnimationFrame(() => {
    letterSheet.style.opacity = '1';
    letterSheet.style.transform = 'none';
  });
});

soundToggle.addEventListener('click', async () => {
  soundOn = !soundOn;
  if (soundOn) {
    const ctx = ensureAudio();
    if (ctx.state === 'suspended') await ctx.resume();
    soundToggle.textContent = '♪ sound on';
    soundToggle.setAttribute('aria-pressed', 'true');
    paperSound(0.10, 0.012);
  } else {
    soundToggle.textContent = '♪ sound off';
    soundToggle.setAttribute('aria-pressed', 'false');
  }
});
