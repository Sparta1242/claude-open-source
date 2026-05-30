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
