const menu=document.getElementById('menu'),nav=document.getElementById('nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const progress=document.querySelector('.progress');
window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=(max>0?(scrollY/max)*100:0)+'%';
},{passive:true});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('nav a')];
const spy=new IntersectionObserver(entries=>{
 entries.forEach(e=>{
   if(e.isIntersecting){
     links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id));
   }
 });
},{rootMargin:'-40% 0px -50% 0px'});
sections.forEach(s=>spy.observe(s));

document.getElementById('contactForm').addEventListener('submit',e=>{
 e.preventDefault();
 const data=new FormData(e.currentTarget);
 const subject=encodeURIComponent('Projet — contact depuis le portfolio');
 const body=encodeURIComponent(`Bonjour MANITRA,%0A%0ANom : ${data.get('name')}%0AEmail : ${data.get('email')}%0A%0AProjet :%0A${data.get('message')}%0A%0ACordialement.`);
 window.location.href=`mailto:mandresy513@gmail.com?subject=${subject}&body=${body}`;
});

/* ==========================================
   V3 SECURITY LAYER
   Deterrence only: client-side code cannot
   be made completely inaccessible in a browser.
   ========================================== */
(() => {
  'use strict';

  const root = document.documentElement;
  root.classList.add('protection-active');

  // Disable context menu and common copy/inspection shortcuts.
  document.addEventListener('contextmenu', (event) => event.preventDefault(), { passive: false });

  document.addEventListener('keydown', (event) => {
    const key = String(event.key || '').toLowerCase();
    const blocked =
      key === 'f12' ||
      (event.ctrlKey && event.shiftKey && ['i', 'j', 'c', 'k'].includes(key)) ||
      (event.ctrlKey && ['u', 's', 'p'].includes(key)) ||
      (event.metaKey && event.altKey && ['i', 'j', 'c'].includes(key));

    if (blocked) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  // Prevent copying/cutting/dragging page content while keeping form fields usable.
  const isEditable = (target) => {
    if (!target || !target.closest) return false;
    return !!target.closest('input, textarea, select, [contenteditable="true"]');
  };

  ['copy', 'cut'].forEach((type) => {
    document.addEventListener(type, (event) => {
      if (!isEditable(event.target)) event.preventDefault();
    }, true);
  });

  document.addEventListener('dragstart', (event) => {
    if (event.target && event.target.tagName === 'IMG') event.preventDefault();
  }, true);

  // DevTools detection. Avoids aggressive debugger loops and limits false positives on phones.
  let guard;
  let devtoolsVisible = false;
  const isDesktopLike = () => window.innerWidth >= 800;

  function buildGuard() {
    if (guard) return guard;
    guard = document.createElement('div');
    guard.className = 'devtools-guard';
    guard.setAttribute('aria-hidden', 'true');
    guard.innerHTML = `
      <div class="devtools-guard__box">
        <div class="devtools-guard__icon">🔒</div>
        <h2>Mode protégé</h2>
        <p>Les outils de développement semblent ouverts. Fermez-les pour continuer à consulter le portfolio.</p>
      </div>`;
    document.body.appendChild(guard);
    return guard;
  }

  function setGuard(visible) {
    if (!document.body) return;
    const el = buildGuard();
    devtoolsVisible = visible;
    el.classList.toggle('is-visible', visible);
    el.setAttribute('aria-hidden', String(!visible));
  }

  function checkDevTools() {
    if (!isDesktopLike()) {
      // On mobile/tablet we do not use the window-size heuristic because
      // browser UI/orientation can produce false positives.
      setGuard(false);
      return;
    }

    const widthGap = window.outerWidth - window.innerWidth;
    const heightGap = window.outerHeight - window.innerHeight;
    const opened = widthGap > 180 || heightGap > 180;
    setGuard(opened);
  }

  window.addEventListener('resize', checkDevTools, { passive: true });
  window.addEventListener('orientationchange', () => setTimeout(checkDevTools, 250), { passive: true });
  setInterval(checkDevTools, 1200);

  // Small console deterrent; it does not rely on a debugger statement.
  const noop = () => {};
  try {
    ['log', 'debug', 'info', 'warn', 'error'].forEach((method) => {
      if (window.console && typeof window.console[method] === 'function') {
        // Keep console functional enough for normal browser behavior while discouraging casual inspection.
        window.console[method] = noop;
      }
    });
  } catch (_) {}

  // Do not interfere with navigation or form inputs.
  document.addEventListener('DOMContentLoaded', checkDevTools, { once: true });
  checkDevTools();
})();
