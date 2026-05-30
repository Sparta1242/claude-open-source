// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        github: document.getElementById('github').value,
        project: document.getElementById('project').value,
        repoUrl: document.getElementById('repoUrl').value,
        stars: document.getElementById('stars').value,
        role: document.getElementById('role').value,
        description: document.getElementById('description').value,
        activity: document.getElementById('activity').value,
        submittedAt: new Date().toISOString()
    };
    
    // Log form data (in a real app, this would be sent to a server)
    console.log('Application submitted:', formData);
    
    // Save to localStorage for demo purposes
    let applications = JSON.parse(localStorage.getItem('applications')) || [];
    applications.push(formData);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    // Show success message
    document.getElementById('applicationForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
    // Optional: Reset form after 5 seconds
    setTimeout(() => {
        document.getElementById('applicationForm').reset();
        document.getElementById('applicationForm').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and benefit items
document.querySelectorAll('.benefit-card, .criteria-card, .benefit-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation
const form = document.getElementById('applicationForm');

form.addEventListener('input', function(e) {
    const target = e.target;
    
    // Validate email
    if (target.id === 'email') {
        const email = target.value;
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        target.style.borderColor = isValid || email === '' ? '#e2e8f0' : '#ef4444';
    }
    
    // Validate URL
    if (target.id === 'repoUrl') {
        const url = target.value;
        try {
            new URL(url);
            target.style.borderColor = '#e2e8f0';
        } catch {
            if (url !== '') {
                target.style.borderColor = '#ef4444';
            } else {
                target.style.borderColor = '#e2e8f0';
            }
        }
    }
    
    // Validate number
    if (target.id === 'stars') {
        const num = parseInt(target.value);
        const isValid = num > 0;
        target.style.borderColor = isValid || target.value === '' ? '#e2e8f0' : '#ef4444';
    }
});

// Auto-fetch GitHub user data (optional enhancement)
function fetchGitHubUser(username) {
    const githubInput = document.getElementById('github');
    
    githubInput.addEventListener('blur', async function() {
        if (this.value) {
            try {
                const response = await fetch(`https://api.github.com/users/${this.value}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('GitHub user found:', data);
                    // Could auto-populate email if public
                } else {
                    console.log('GitHub user not found');
                }
            } catch (error) {
                console.log('Error fetching GitHub user:', error);
            }
        }
    });
}

// Initialize GitHub user fetching
fetchGitHubUser();

// Add loading state to submit button
form.addEventListener('submit', function() {
    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';
});