// Custom JavaScript for portfolio site

document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animation to project cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });

  // Add hover effect to badges
  document.querySelectorAll('.badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)';
    });
    badge.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add typing effect to main heading
  const heading = document.querySelector('h1');
  if (heading && heading.textContent.includes('Building Systems')) {
    const text = heading.textContent;
    heading.textContent = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        heading.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    setTimeout(typeWriter, 500);
  }

  // Add subtle parallax effect to background
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('body::before');
      if (parallax) {
        document.body.style.setProperty('--scroll', scrolled * 0.5 + 'px');
      }
    });
  }

  // Console Easter egg
  console.log('%c Welcome to my portfolio! 🚀', 'font-size: 20px; color: #00d4ff; font-weight: bold;');
  console.log('%c Looking for someone who can turn your Excel chaos into scalable systems?', 'font-size: 14px; color: #7b61ff;');
  console.log('%c Let\'s connect: https://github.com/septiannugraha', 'font-size: 12px; color: #e4e8f7;');
});