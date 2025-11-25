// Simple gallery lightbox
document.querySelectorAll('.thumb').forEach(t => {
  t.addEventListener('click', () => {
    const src = t.getAttribute('data-full') || t.querySelector('img').src;
    const lb = document.getElementById('lightbox'), img = document.getElementById('lightImg');
    img.src = src;
    lb.style.display = 'grid';
    document.body.style.overflow = 'hidden';
  });
});
function closeLight(){
  document.getElementById('lightbox').style.display='none';
  document.body.style.overflow = '';
}

// Basic form handling (AJAX stub)
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.style.display = 'block';
  status.textContent = 'Sending...';
  await new Promise(r => setTimeout(r, 800));
  status.textContent = 'Request sent. We will reply within 24–72 hours.';
  form.reset();
});

// Small entrance animation
window.addEventListener('load', () => {
  document.querySelectorAll('.panel').forEach((p,i)=> {
    p.style.opacity = 0;
    p.style.transform = 'translateY(12px)';
    setTimeout(()=>{ 
      p.style.transition = 'all 420ms cubic-bezier(.15,.9,.3,1)'; 
      p.style.opacity=1; 
      p.style.transform='none' 
    }, 120*i);
  });
});