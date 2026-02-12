
// Navigation smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    
    const nav = document.querySelector('.nav');
    nav.classList.remove('active');
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Update active nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// Newsletter
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const messageDiv = document.getElementById('newsletter-message');
  const btn = form.querySelector('button');
  const originalText = btn.textContent;
  
  btn.textContent = 'Mengirim...';
  btn.disabled = true;

  setTimeout(() => {
    messageDiv.innerHTML = '✓ Terima kasih! Cek email Anda.';
    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;

    setTimeout(() => {
      messageDiv.innerHTML = '';
    }, 3000);
  }, 800);
}
const reviewGrid = document.querySelector('.review-grid');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
  reviewGrid.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  reviewGrid.scrollBy({ left: -320, behavior: 'smooth' });
});