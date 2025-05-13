// Timeline scroll animations
const timelineItems = document.querySelectorAll('.timeline-item');
const years = document.querySelectorAll('.year');
function checkScroll() {
    timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.offsetHeight;
        const windowHeight = window.innerHeight;
        const scroll = window.scrollY;
        
        // Activate items when they're 60% visible
        if (scroll > (itemTop - windowHeight + itemHeight * 0.6)) {
            item.classList.add('active');
            years[index].classList.add('active');
            
            // Highlight current section
            highlightCurrentSection(index);
        } else {
            item.classList.remove('active');
            years[index].classList.remove('active');
        }
    });
}
        
// Function to highlight current section
function highlightCurrentSection(currentIndex) {
    timelineItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('current');
            years[index].classList.add('current');
        } else {
            item.classList.remove('current');
            years[index].classList.remove('current');
        }
    });
}
// Initial check and scroll event
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
// Progress line animation
const progressIndicator = document.querySelector('.progress-indicator');
        
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    
    const progress = (scrolled / documentHeight) * 100;
    progressIndicator.style.height = `${progress}%`;
});
// Your existing scroll-to-top code
const scrollBtn = document.getElementById('scrollToTop');
        
// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});
        
// Smooth scroll to top when button is clicked
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
