// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Smooth follower
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor interactions
const interactiveElements = document.querySelectorAll('a, button, .service-card, .value');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.width = '40px';
        cursorFollower.style.height = '40px';
    });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('section > *, .service-card, .stat');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal', 'visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Smooth scroll for navigation
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

// Navbar background on scroll
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.9) 0%, transparent 100%)';
        nav.style.backdropFilter = 'none';
    }
    
    lastScroll = currentScroll;
});

// Parallax effect for orb
const orb = document.querySelector('.orb');
const heroVisual = document.querySelector('.hero-visual');

if (heroVisual && orb) {
    window.addEventListener('mousemove', (e) => {
        const rect = heroVisual.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const moveX = (e.clientX - centerX) * 0.02;
        const moveY = (e.clientY - centerY) * 0.02;
        
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
}

// Value tags random subtle movement
const values = document.querySelectorAll('.value');
values.forEach((value, index) => {
    value.style.animationDelay = `${index * 0.1}s`;
});

// Console Easter egg
console.log('%c✨ Intrepide', 'font-size: 24px; font-weight: bold; color: #4f9eff;');
console.log('%cAI that amplifies human ingenuity', 'font-size: 14px; color: #888;');
console.log('%chello@intrepide.ai', 'font-size: 12px; color: #4f9eff;');
