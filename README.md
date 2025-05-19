# DIY Jewelry Sharing Platform

A modern web platform for DIY jewelry enthusiasts to share, discover, and connect with other creators.

## Features

### 1. User Account Management
- User registration and login
- Profile management (avatar, bio, contact info)
- User following system

### 2. Content Creation
- Multi-image upload for jewelry pieces
- Detailed project information (materials, dimensions, inspiration)
- Category and tag system
- Draft saving functionality

### 3. Social Features
- Like system
- Comment system with image support
- Collection/bookmarking
- Content sharing to social media
- Direct messaging

### 4. Content Discovery
- Smart recommendation algorithm
- Category browsing
- Advanced search (tags, materials, style)
- Sorting options (newest, popular, most collected)

### 5. User Interaction
- Private messaging
- Notification system
- Project collections/portfolios

### 6. Security & Privacy
- Content moderation
- User reporting system
- Copyright protection

### 7. Additional Features
- Analytics dashboard
- Mobile-responsive design
- Multi-language support

## Project Structure

```
jewelry-sharing-platform/
├── assets/              # Static assets (images, fonts, etc.)
├── css/                 # Stylesheets
│   ├── components/      # Component-specific styles
│   ├── layouts/         # Layout styles
│   └── main.css         # Main stylesheet
├── js/                  # JavaScript files
│   ├── components/      # UI components
│   ├── services/        # API services
│   └── utils/           # Utility functions
├── pages/               # HTML pages
│   ├── auth/            # Authentication pages
│   ├── profile/         # User profile pages
│   ├── discover/        # Discovery pages
│   └── create/          # Content creation pages
└── index.html           # Main entry point
```

## Technologies Used
- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (ES6+)
- Local Storage for offline functionality
- Responsive Design

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start exploring the platform!

## Deployment

This project is a static website that can be easily deployed to various platforms. We've included deployment scripts to simplify the process:

### GitHub Pages Deployment (Recommended)

#### Windows:
1. Double-click the `deploy.bat` file
2. Follow the prompts to enter your GitHub username and repository name
3. The script will automatically upload your files to GitHub
4. Your site will be live at `https://yourusername.github.io/repositoryname`

#### Mac/Linux:
1. Open Terminal in the project directory
2. Run `chmod +x deploy.sh` to make the script executable
3. Run `./deploy.sh`
4. Follow the prompts to enter your GitHub username and repository name
5. Your site will be live at `https://yourusername.github.io/repositoryname`

### Other Deployment Options

For more detailed instructions on deploying to other platforms like Netlify, Vercel, or traditional hosting, please refer to the `deployment-guide.md` file.

## Customization

To customize the site for your needs:
1. Update branding elements in `index.html`
2. Modify color variables in `css/main.css`
3. Add your own content and images

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 