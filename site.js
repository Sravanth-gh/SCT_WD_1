document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
