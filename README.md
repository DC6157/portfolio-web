# Modern Portfolio Website

A beautiful, responsive portfolio website with dark theme support, interactive chat system, and modern UI design.

## Features

### 🎨 Modern Design
- Clean and professional layout
- Smooth animations and transitions
- Responsive design for all devices
- Beautiful gradient backgrounds
- Hover effects on interactive elements

### 🌙 Dark Theme
- Toggle between light and dark modes
- Theme preference saved in localStorage
- Consistent color scheme across all components

### 💬 Interactive Chat System
- Messenger-like chat interface
- Typing animations
- Initial greeting message
- Mock AI responses (ready for Gemini API integration)
- Circular profile pictures in chat

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Optimized layouts for tablets and desktops
- Touch-friendly interactions

### 🚀 Performance
- Optimized images from Unsplash
- Smooth scrolling navigation
- Intersection Observer for animations
- Efficient event handling

## File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and themes
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

1. **Clone or Download** the files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as needed (see customization section below)

## Customization

### Personal Information
Edit the following variables in `script.js`:

```javascript
const myFullName = "Your Full Name";
const myDescription = "Your personal description...";
```

### Profile Picture
Replace the profile picture URLs in both `index.html` and `script.js`:
- Hero section: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face`
- Chat avatar: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=35&h=35&fit=crop&crop=face`

### Projects
Update the projects section in `index.html`:
- Replace project images
- Update project titles and descriptions
- Modify technology tags
- Add your actual project links

### Contact Information
Update contact details in `index.html`:
- Email address
- Phone number
- Location
- Social media links

### Skills
Modify the skills section in `index.html` to match your expertise.

## Gemini API Integration

To enable real AI responses in the chat:

1. **Get a Gemini API Key** from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. **Replace** `'YOUR_GEMINI_API_KEY'` in `script.js` with your actual API key
3. **Uncomment** the actual API call code in the `callGeminiAPI` function
4. **Comment out** the mock response line

```javascript
// Replace this line:
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';

// Uncomment the actual API call and comment out the mock response
```

## Features in Detail

### Chat System
- **Initial Message**: Shows personalized greeting when chat opens
- **Typing Animation**: Realistic typing indicator with animated dots
- **Message History**: Maintains conversation flow
- **Responsive Design**: Works perfectly on mobile devices
- **Profile Pictures**: Circular avatars for both user and bot

### Dark Theme
- **Automatic Detection**: Remembers user preference
- **Smooth Transitions**: All elements animate smoothly
- **Consistent Styling**: Maintains readability in both modes
- **Icon Changes**: Sun/moon icons indicate current theme

### Navigation
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile Menu**: Hamburger menu for smaller screens
- **Active States**: Visual feedback for current section
- **Fixed Header**: Always accessible navigation

### Animations
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive feedback on buttons and cards
- **Loading States**: Smooth transitions for better UX
- **Typing Animation**: Realistic chat typing indicator

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Use compressed images for better loading
2. **Minimize HTTP Requests**: Combine CSS/JS files in production
3. **Enable Caching**: Set appropriate cache headers
4. **Use CDN**: Serve Font Awesome from CDN (already implemented)

## Troubleshooting

### Chat Not Working
- Check browser console for JavaScript errors
- Ensure all files are in the same directory
- Verify internet connection for external resources

### Dark Theme Issues
- Clear browser localStorage and refresh
- Check if CSS variables are properly defined
- Ensure JavaScript is loading correctly

### Mobile Responsiveness
- Test on actual devices, not just browser dev tools
- Check viewport meta tag is present
- Verify media queries are working

## Future Enhancements

- [ ] Add contact form functionality
- [ ] Implement blog section
- [ ] Add portfolio filtering
- [ ] Integrate with CMS
- [ ] Add analytics tracking
- [ ] Implement PWA features
- [ ] Add more animation options
- [ ] Create admin panel for content management

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review browser console for errors
3. Ensure all files are properly linked
4. Test in different browsers

---

**Enjoy your new portfolio! 🚀** 