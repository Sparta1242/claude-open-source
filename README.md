# Claude for Open Source - Landing Page

A beautiful, responsive landing page for the Claude for Open Source Program that helps open-source maintainers apply for 6 months of free Claude Max access.

## Features

✨ **Modern Design**
- Clean, professional layout with gradient accents
- Fully responsive for mobile, tablet, and desktop
- Smooth animations and transitions

📝 **Complete Application Form**
- Comprehensive form for collecting applicant information
- Form validation and error handling
- Success confirmation message
- Data persistence using localStorage

📱 **Responsive Sections**
- Hero section with call-to-action
- About the program
- Eligibility criteria
- Benefits showcase
- Application form
- Footer

🎯 **User Experience**
- Smooth scrolling navigation
- Scroll animations
- Interactive form with real-time validation
- GitHub API integration ready

## Project Structure

```
claude-open-source/
├── index.html      # Main HTML file
├── styles.css      # All CSS styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

### View the Live Site
Your site is live at: `https://Sparta1242.github.io/claude-open-source`

### Local Development
1. Clone the repository
2. Open `index.html` in your web browser
3. That's it! No dependencies required

## How GitHub Pages Works

This repository is automatically published to GitHub Pages from the `main` branch. Any changes you push to the `main` branch will be reflected on your live site within a few minutes.

## Customization

### Colors
Edit the CSS variables in `styles.css` (lines 7-16):
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... more colors */
}
```

### Content
- Update text in `index.html`
- Modify form fields as needed
- Change application requirements in the criteria section

### Form Handling
Currently, form data is saved to the browser's localStorage. To actually receive applications, you'll need to:
1. Set up a backend server
2. Use a service like Formspree, Basin, or Webhook
3. Configure the form submission

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Features Explained

### 1. Smooth Scrolling
Click navigation links to smoothly scroll to sections

### 2. Form Validation
Real-time validation for:
- Email format
- GitHub repository URL
- Star/download count

### 3. Success Message
After submission, a confirmation message appears and form resets after 5 seconds

### 4. Data Persistence
Form submissions are saved to browser storage for development/demo purposes

## Next Steps

To make this production-ready:

1. **Set up form backend**
   - Create a server to receive form submissions
   - Send confirmation emails
   - Store applications in a database

2. **Add analytics**
   - Track page views and form submissions
   - Monitor user engagement

3. **Enhance features**
   - Email notifications
   - Application status dashboard
   - User accounts

4. **SEO optimization**
   - Add meta descriptions
   - Configure robots.txt
   - Create sitemap.xml

## License

This project is open source and available for personal or commercial use.

---

**Made with ❤️ for the open-source community**