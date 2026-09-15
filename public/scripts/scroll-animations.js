// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10px 0px',
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
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

  // Throttled scroll handler for navbar and parallax
  let ticking = false;
  const navbar = document.querySelector('nav');
  const heroGradient = document.querySelector('.hero-gradient');

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        
        if (navbar) {
          if (scrolled > 50) {
            navbar.classList.add('shadow-sm');
          } else {
            navbar.classList.remove('shadow-sm');
          }
        }
        
        if (heroGradient) {
          heroGradient.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.05}px)`;
        }
        
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
});
