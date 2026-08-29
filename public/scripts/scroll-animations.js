// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: unobserve after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all scroll-animate elements
  const scrollElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
  scrollElements.forEach(el => observer.observe(el));

  // Hero animations - trigger on load
  const heroElements = document.querySelectorAll('.hero-animate');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, index * 150);
  });

  // Stat counter animation
  const statElements = document.querySelectorAll('.stat-animate');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statElements.forEach(el => statObserver.observe(el));

  // Counter animation function
  function animateCounter(element) {
    const target = element.getAttribute('data-target');
    const isNumber = /^\d+/.test(target);
    
    if (!isNumber) {
      // For non-numeric values like "200+" or "2023"
      element.textContent = target;
      return;
    }

    const numericValue = parseInt(target.replace(/\D/g, ''));
    const suffix = target.replace(/[\d]/g, '');
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.ceil(increment * step), numericValue);
      element.textContent = current + suffix;
      
      if (step >= steps) {
        clearInterval(timer);
        element.textContent = target;
      }
    }, duration / steps);
  }

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

  // Navbar background change on scroll
  const navbar = document.querySelector('nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }
    });
  }

  // Parallax effect for hero gradient
  const heroGradient = document.querySelector('.hero-gradient');
  if (heroGradient) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroGradient.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.05}px)`;
    });
  }
});