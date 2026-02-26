/* ============================================================
   NAV — scroll state
   ============================================================ */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});


/* ============================================================
   MOBILE NAV
   ============================================================ */
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
}

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('open');
});

document.getElementById('mobileClose').addEventListener('click', closeMobileNav);


/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ============================================================
   NEWSLETTER SUBSCRIBE
   ============================================================ */
function handleSubscribe() {
  const email = document.getElementById('subEmail').value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }
  // TODO: Connect to Mailchimp / ConvertKit / Beehiiv
  // POST { email, name } to your email service API endpoint
  document.getElementById('subscribeForm').style.display = 'none';
  document.getElementById('subscribeSuccess').style.display = 'block';
}

function handleFooterSubscribe() {
  const el = document.getElementById('footerEmail');
  if (!el.value.trim()) return;
  // TODO: same email hook
  el.value = '';
  el.placeholder = '✓ Subscribed!';
}


/* ============================================================
   CONTACT FORM
   ============================================================ */
function handleContact() {
  const email = document.getElementById('cEmail').value.trim();
  const msg   = document.getElementById('cMessage').value.trim();
  if (!email || !msg) {
    alert('Please fill in email and message.');
    return;
  }
  // TODO: Connect to Formspree, EmailJS, or custom backend
  // Formspree example: POST https://formspree.io/f/YOUR_FORM_ID
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('contactSuccess').style.display = 'block';
}
