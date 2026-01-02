
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(this.getAttribute('href') === '#') return;
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        navLinks.classList.remove('active');
    });
});

const applicationForm = document.getElementById('application-form');

if(applicationForm) {
    applicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const program = this.querySelector('select').value;
        
        if(!name || !email || !program) {
            alert('Please fill in all fields');
            return;
        }
        
        alert(`Thank you ${name}! Your application for the ${program} program has been submitted. We'll contact you at ${email} shortly.`);
        
        this.reset();
    });
}

const faqItems = document.querySelectorAll('.faq-item');

if(faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}