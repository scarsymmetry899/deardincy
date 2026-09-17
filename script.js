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

const iconPaths = {
  smile: '<circle cx="24" cy="24" r="16"/><path d="M17 20h.01M31 20h.01M16 28c3 4 7 6 12 6s9-2 12-6"/>',
  laugh: '<circle cx="24" cy="24" r="16"/><path d="M17 20l3 2M31 20l-3 2M15 28c6 7 12 7 18 0"/><path d="M14 35c-2 2-2 4 0 5M34 35c2 2 2 4 0 5"/>',
  emoji: '<circle cx="24" cy="24" r="16"/><path d="M16 20c2-2 4-2 6 0M26 20c2-2 4-2 6 0M16 27c5 7 11 7 16 0"/><path d="M12 28c-3 3-3 6 0 8M36 28c3 3 3 6 0 8"/>',
  coffee: '<path d="M13 19h23v11a9 9 0 0 1-9 9h-5a9 9 0 0 1-9-9V19Z"/><path d="M36 22h3a5 5 0 0 1 0 10h-3M20 14c-3-3 2-5 0-8M28 14c-3-3 2-5 0-8"/>',
  italian: '<path d="M10 27h28c-1 8-6 12-14 12s-13-4-14-12Z"/><path d="M15 27c0-6 4-10 9-10s9 4 9 10M18 17c2-4 6-6 10-5M12 11l4 7M36 11l-4 7"/>',
  foodie: '<path d="M10 10v28M16 10v10c0 4-6 4-6 0M33 10v28M27 10c0 8 6 9 6 9"/>',
  hidden: '<path d="M24 41s12-10 12-22a12 12 0 1 0-24 0c0 12 12 22 12 22Z"/><circle cx="24" cy="19" r="4"/>',
  style: '<path d="M16 11h16l3 7-6 5v17H19V23l-6-5 3-7Z"/><path d="M20 11c0 3 2 5 4 5s4-2 4-5"/>',
  glasses: '<circle cx="16" cy="25" r="8"/><circle cx="32" cy="25" r="8"/><path d="M24 25h0M8 23l-4-2M40 23l4-2"/>',
  virgo: '<path d="M10 14v22M10 18c4-7 9-5 9 2v16M19 20c4-7 9-5 9 2v14M28 22c5-6 10-4 10 4 0 6-3 9-7 10"/><path d="M31 36c4 0 7 2 8 5"/>',
  templerun: '<circle cx="28" cy="9" r="3"/><path d="M24 15l-6 8 7 5-5 12M24 15l8 5 5-2M25 28l10 10"/>',
  tall: '<path d="M24 41V8M18 14l6-6 6 6M15 41h18"/>',
  travel: '<path d="M7 28l34-12-12 24-4-9-9-4-9 1Z"/><path d="M25 31l8-8"/>',
  bihar: '<path d="M8 23 24 9l16 14v17H8V23Z"/><path d="M19 40V27h10v13"/>',
  kajoo: '<path d="M24 39C11 31 8 24 10 18c2-7 11-8 14-2 3-6 12-5 14 2 2 6-1 13-14 21Z"/>',
  name: '<path d="M10 36l5-1 22-22-4-4-22 22-1 5ZM28 14l4 4"/><path d="M10 40h28"/>',
  lilly: '<path d="M24 8v32M16 16c0-4 3-7 8-7s8 3 8 7-3 6-8 7-8 3-8 7 3 8 8 8 8-3 8-8"/>',
  navy: '<circle cx="24" cy="10" r="4"/><path d="M24 14v24M15 22h18M10 29c2 8 7 12 14 12s12-4 14-12M10 29l6 1M38 29l-6 1"/>',
  curious: '<circle cx="14" cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="34" cy="24" r="2"/>'
};

function upgradeStampArtwork() {
  $$('.stamp-card').forEach((stamp) => {
    const key = stamp.dataset.stamp;
    const icon = stamp.querySelector('.stamp-icon');
    if (icon && iconPaths[key]) icon.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true">${iconPaths[key]}</svg>`;
  });
}

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

window.addEventListener('load', () => {
  upgradeStampArtwork();
  setTimeout(() => loader?.classList.add('is-hidden'), 700);
});

function openLetterExperience() {
  if (opening) return;
  opening = true;
  envelope?.classList.add('is-opening');
  paperRustle(0.22, 0.02);
  setTimeout(() => {
    landing?.classList.add('is-hidden');
    letterScene?.classList.add('is-visible');
    letterScene?.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 1200);
}

openEnvelope?.addEventListener('click', openLetterExperience);
openLetterText?.addEventListener('click', openLetterExperience);

foldLetter?.addEventListener('click', () => {
  if (letterView?.classList.contains('is-turning')) return;
  paperRustle(0.34, 0.024);
  letterView?.classList.add('is-turning');
  foldLetter.disabled = true;
  setTimeout(() => {
    letterView?.classList.add('is-hidden');
    letterView?.classList.remove('is-turning');
    foldLetter.disabled = false;
    stampView?.classList.add('is-visible');
    stampView?.setAttribute('aria-hidden', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 720);
});

reopenLetter?.addEventListener('click', () => {
  paperRustle(0.18, 0.015);
  $$('.stamp-card.is-open').forEach((card) => card.classList.remove('is-open'));
  stampView?.classList.remove('is-visible');
  stampView?.setAttribute('aria-hidden', 'true');
  letterView?.classList.remove('is-hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

moreStamps?.addEventListener('click', () => {
  extrasVisible = !extrasVisible;
  stampExtra?.setAttribute('aria-hidden', extrasVisible ? 'false' : 'true');
  if (moreStamps) moreStamps.textContent = extrasVisible ? 'fewer stamps ↑' : 'more little stamps ↓';
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

soundToggle?.addEventListener('click', async () => {
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
