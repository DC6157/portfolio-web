// Portfolio JavaScript

// Configuration
const myFullName = "Dharmendra Choudhary";
const myDescription = "I'm a passionate Data Scientist and Machine Learning Engineer with expertise in Python, SQL, and various ML frameworks. I love working with data, building predictive models, and creating insights that drive business decisions. When I'm not analyzing data, I enjoy exploring new AI technologies, contributing to open-source projects, and staying updated with the latest trends in data science. I'm based in Barmer, Rajasthan and always excited to work on challenging data projects that make a difference.";

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon();

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Mobile Navigation
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
function smoothScrollTo(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event Listeners
themeToggle.addEventListener('click', toggleTheme);
hamburger.addEventListener('click', toggleMobileMenu);

// Navigation link clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScrollTo(targetId);
        
        // Close mobile menu if open
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-tag, .contact-item, .cv-section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Section reveal animation for all main sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 100);

    // Animate sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-reveal');
        sectionObserver.observe(section);
    });
});

// Add CSS for initial animations
const style = document.createElement('style');
style.textContent = `
    .hero-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 1s ease, transform 1s ease;
    }
`;
document.head.appendChild(style);

// Animated Background for Data Scientist Portfolio
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resizeCanvas);

// Gradient color stops (deep blue, teal, violet)
const gradientColors = [
    [ [30, 41, 82], [13, 148, 136], [109, 40, 217] ], // blue, teal, violet
    [ [13, 148, 136], [109, 40, 217], [30, 41, 82] ],
    [ [109, 40, 217], [30, 41, 82], [13, 148, 136] ]
];
let gradientStep = 0;
let gradientIndex = 0;

// Particle/Shape definitions
const NUM_PARTICLES = 32;
const particles = [];
function randomBetween(a, b) { return a + Math.random() * (b - a); }

for (let i = 0; i < NUM_PARTICLES; i++) {
    const type = Math.random() < 0.7 ? 'circle' : (Math.random() < 0.5 ? 'line' : 'polygon');
    particles.push({
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        r: randomBetween(12, 32),
        dx: randomBetween(-0.15, 0.15),
        dy: randomBetween(-0.1, 0.1),
        opacity: randomBetween(0.08, 0.18),
        type,
        angle: randomBetween(0, Math.PI * 2),
        sides: Math.floor(randomBetween(3, 6))
    });
}

function lerpColor(a, b, t) {
    return [
        Math.round(a[0] + (b[0] - a[0]) * t),
        Math.round(a[1] + (b[1] - a[1]) * t),
        Math.round(a[2] + (b[2] - a[2]) * t)
    ];
}

function drawBackgroundGradient() {
    // Animate between gradients
    const nextIndex = (gradientIndex + 1) % gradientColors.length;
    const t = (Math.sin(gradientStep) + 1) / 2;
    const colorStops = [
        lerpColor(gradientColors[gradientIndex][0], gradientColors[nextIndex][0], t),
        lerpColor(gradientColors[gradientIndex][1], gradientColors[nextIndex][1], t),
        lerpColor(gradientColors[gradientIndex][2], gradientColors[nextIndex][2], t)
    ];
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, `rgb(${colorStops[0].join(',')})`);
    grad.addColorStop(0.5, `rgb(${colorStops[1].join(',')})`);
    grad.addColorStop(1, `rgb(${colorStops[2].join(',')})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    gradientStep += 0.002;
    if (gradientStep >= Math.PI * 2) {
        gradientStep = 0;
        gradientIndex = nextIndex;
    }
}

function drawParticles() {
    for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.fillStyle = 'rgba(255,255,255,0.10)';
        ctx.lineWidth = 1.2;

        if (p.type === 'circle') {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        } else if (p.type === 'line') {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + Math.cos(p.angle) * p.r * 2, p.y + Math.sin(p.angle) * p.r * 2);
            ctx.stroke();
        } else if (p.type === 'polygon') {
            ctx.beginPath();
            for (let i = 0; i < p.sides; i++) {
                const theta = p.angle + (i * 2 * Math.PI / p.sides);
                const px = p.x + Math.cos(theta) * p.r;
                const py = p.y + Math.sin(theta) * p.r;
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
        }
        ctx.restore();

        // Move particle
        p.x += p.dx;
        p.y += p.dy;
        p.angle += 0.002 * (p.dx + p.dy);

        // Wrap around edges
        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    drawBackgroundGradient();
    drawParticles();
    requestAnimationFrame(animate);
}
animate(); 

// Name Animation: Fade-in, Cascade, Shimmer
function animateName() {
    const nameContainer = document.querySelector('.name-animate');
    if (!nameContainer) return;
    const letters = Array.from(nameContainer.querySelectorAll('span:not(.shimmer)'));
    // Staggered animation for each letter
    letters.forEach((span, i) => {
        span.style.transitionDelay = `${0.2 + i * 0.06}s`;
    });
    // Trigger fade-in and slide-up
    setTimeout(() => {
        nameContainer.classList.add('animated');
    }, 100);
    // Trigger shimmer after all letters are in
    const shimmerDelay = 0.2 + letters.length * 0.06 + 0.3;
    setTimeout(() => {
        nameContainer.classList.add('shimmered');
    }, shimmerDelay * 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
    
    // Add some initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 100);

    // Animate sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('section-reveal');
        sectionObserver.observe(section);
    });
    animateName();
    
    // Animate skill bars when CV section comes into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillBarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);
                skillBarObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillBarObserver.observe(bar);
    });
}); 

// Animated Name Header Logic
window.addEventListener('DOMContentLoaded', () => {
  const name = 'Dharmendra Choudhary';
  const nameHeader = document.getElementById('animatedName');
  if (!nameHeader) return;

  // Split name into spans for each letter
  nameHeader.innerHTML = name.split('').map((char, i) => {
    const delay = 0.2 + i * 0.06;
    if (char === ' ') {
      return `<span class="letter" style="width:0.5em;">&nbsp;</span>`;
    }
    return `<span class="letter" style="transition-delay:${delay}s">${char}</span>`;
  }).join('');

  // Fade in the header, then animate letters
  setTimeout(() => {
    nameHeader.classList.add('visible');
  }, 200);
}); 

document.addEventListener('DOMContentLoaded', function() {
  const letters = document.querySelectorAll('#animatedName .letter');
  letters.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('visible');
    }, idx * 70 + 200);
  });
}); 