import './style.css'

// ===================================
// Theme Toggle Functionality
// ===================================
const initTheme = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme preference or default to dark theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  
  // Apply the theme
  html.setAttribute('data-theme', savedTheme);
  
  // Add theme toggle functionality
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      html.setAttribute('data-theme', newTheme);
      
      // Save preference to localStorage
      localStorage.setItem('theme', newTheme);
    });
  }
};

// Initialize theme immediately to prevent flash
initTheme();

// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when clicking on a link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.nav').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      // Optional: Stop observing after animation
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll(
  '.section, .challenge-item, .principle-card, .process-step'
);

elementsToAnimate.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add animation class styles
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ===================================
// Hide/Show Navigation on Scroll
// ===================================
let lastScrollTop = 0;
const nav = document.querySelector('.nav');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > scrollThreshold) {
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      nav.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      nav.style.transform = 'translateY(0)';
    }
  }
  
  lastScrollTop = scrollTop;
});

// ===================================
// Typewriter Effect for Hero Title
// ===================================
const heroHeadline = document.querySelector('.hero-headline');
if (heroHeadline) {
  const text = heroHeadline.textContent;
  heroHeadline.textContent = '';
  heroHeadline.style.opacity = '1';
  
  let index = 0;
  const typeWriter = () => {
    if (index < text.length) {
      if (text[index] === '<') {
        // Handle <br> tag
        const brIndex = text.indexOf('>', index);
        heroHeadline.innerHTML += text.substring(index, brIndex + 1);
        index = brIndex + 1;
      } else {
        heroHeadline.textContent += text[index];
        index++;
      }
      setTimeout(typeWriter, 50);
    }
  };
  
  // Start typewriter effect after a short delay
  setTimeout(typeWriter, 500);
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
const hero = document.querySelector('.hero');
if (hero) {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  });
}

// ===================================
// Active Navigation Link Highlighting
// ===================================
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-menu a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.pageYOffset + 100;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
  .nav-menu a.active {
    color: var(--color-accent);
  }
  .nav-menu a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(activeStyle);

// ===================================
// Performance: Lazy Loading Images
// ===================================
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// ===================================
// Initialize when DOM is ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('AAA Framework site initialized');
  
  // Add loaded class to body for initial animations
  document.body.classList.add('loaded');
});

// Add loaded animation styles
const loadedStyle = document.createElement('style');
loadedStyle.textContent = `
  body {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  body.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(loadedStyle);