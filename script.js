const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const loader = $('#loader');
const landing = $('#landing');
const letterScene = $('#letterScene');
const envelope = $('#envelope');
const openEnvelope = $('#openEnvelope');
const openLetterText = $('#openLetterText');
const soundToggle = $('#soundToggle');
const letterView = $('#letterView');
const stampView = $('#stampView');
const foldLetter = $('#foldLetter');
const reopenLetter = $('#reopenLetter');
const moreStamps = $('#moreStamps');
const stampExtra = $('#stampExtra');

let soundOn = false;
let audioContext = null;
let opening = false;
let extrasVisible = false;

function getAudioContext() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function paperRustle(duration = 0.18, volume = 0.015) {
  if (!soundOn) return;
  const ctx = getAudioContext();
  const sampleCount = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, sampleCount, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < sampleCount; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / sampleCount) * 0.7;
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  filter.type = 'bandpass';
  filter.frequency.value = 980;
  gain.gain.value = volume;
  source.buffer = buffer;
  source.connect(filter).connect(gain).connect(ctx.destination);
  source.start();
}

window.addEventListener('load', () => setTimeout(() => loader.classList.add('is-hidden'), 900));

function openLetterExperience() {
  if (opening) return;
  opening = true;
  envelope.classList.add('is-opening');
  paperRustle(0.22, 0.02);
  setTimeout(() => {
    landing.classList.add('is-hidden');
    letterScene.classList.add('is-visible');
    letterScene.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, 1450);
}

openEnvelope.addEventListener('click', openLetterExperience);
openLetterText.addEventListener('click', openLetterExperience);

foldLetter.addEventListener('click', () => {
  paperRustle(0.28, 0.022);
  letterView.classList.add('is-hidden');
  stampView.classList.add('is-visible');
  stampView.setAttribute('aria-hidden', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

reopenLetter.addEventListener('click', () => {
  paperRustle(0.18, 0.015);
  stampView.classList.remove('is-visible');
  stampView.setAttribute('aria-hidden', 'true');
  letterView.classList.remove('is-hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

moreStamps.addEventListener('click', () => {
  extrasVisible = !extrasVisible;
  stampExtra.setAttribute('aria-hidden', extrasVisible ? 'false' : 'true');
  moreStamps.textContent = extrasVisible ? 'fewer stamps ↑' : 'more little stamps ↓';
  if (extrasVisible) paperRustle(0.12, 0.008);
});

$$('.stamp-card').forEach((stamp) => {
  stamp.addEventListener('click', () => {
    const wasOpen = stamp.classList.contains('is-open');
    $$('.stamp-card.is-open').forEach((card) => card.classList.remove('is-open'));
    if (!wasOpen) {
      stamp.classList.add('is-open');
      paperRustle(0.1, 0.006);
    }
  });
});

soundToggle.addEventListener('click', async () => {
  soundOn = !soundOn;
  if (soundOn) {
    const ctx = getAudioContext();
    if (ctx.state === 'suspended') await ctx.resume();
    soundToggle.textContent = '♪ sound on';
    soundToggle.setAttribute('aria-pressed', 'true');
    paperRustle(0.08, 0.01);
  } else {
    soundToggle.textContent = '♪ sound off';
    soundToggle.setAttribute('aria-pressed', 'false');
  }
});
