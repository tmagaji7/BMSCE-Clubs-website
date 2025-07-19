# BMSCE Events Management System

A fullstack web application for managing and displaying college events, built with Node.js backend and modern frontend technologies.

## 🚀 Features

- **Event Management**: Display and manage college events with interactive UI
- **Email Integration**: Send emails using Nodemailer for event notifications
- **Responsive Design**: Modern, mobile-friendly interface with smooth animations
- **React Integration**: Separate React app for enhanced user experience
- **Static Pages**: HTML/CSS pages for events, clubs, and landing pages
- **Modern UI/UX**: Particle effects, smooth scrolling, and interactive elements

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email functionality
- **Body-parser** - Request parsing
- **Express-session** - Session management
- **Mongoose** - MongoDB ODM (configured but not implemented)

### Frontend
- **HTML5/CSS3** - Static pages with modern styling
- **JavaScript** - Interactive functionality
- **React** - Component-based UI (Vite build)
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📁 Project Structure

```
FULLSTACK/
├── app.js                 # Main Express server
├── package.json          # Backend dependencies
├── public/              # Static assets
│   ├── Landing_page.html    # Main landing page
│   ├── events.html         # Events page
│   ├── clubs2.html         # Clubs page
│   ├── login.html          # Login page
│   ├── registration.html   # Registration page
│   ├── style.css          # Main stylesheet
│   ├── script.js          # Main JavaScript
│   └── react-app/         # React application
│       ├── src/
│       ├── public/
│       └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FULLSTACK
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install React app dependencies**
   ```bash
   cd public/react-app
   npm install
   ```

4. **Configure email settings**
   
   Update the email configuration in `app.js`:
   ```javascript
   const transporter = nodemailer.createTransporter({
       service: 'Gmail',
       auth: {
           user: 'your-email@gmail.com',
           pass: 'your-app-password'
       }
   });
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   npm start
   # or
   node app.js
   ```
   The server will run on `http://localhost:3000`

2. **Start the React development server**
   ```bash
   cd public/react-app
   npm run dev
   ```
   The React app will run on `http://localhost:5173`

## 📱 Pages Overview

### Landing Page (`Landing_page.html`)
- Modern landing page with particle effects
- Navigation menu with smooth scrolling
- BMSCE branding and logo
- Animated text and interactive elements

### Events Page (`events.html`)
- Event showcase with image carousel
- Interactive event cards
- Smooth animations and transitions
- Responsive design for all devices

### Clubs Page (`clubs2.html`)
- College clubs information
- Interactive club listings
- Modern card-based layout

### Authentication Pages
- **Login** (`login.html`) - User authentication
- **Registration** (`registration.html`) - User registration

## 🔧 API Endpoints

### Email Service
- `GET /send-email` - Send emails using Nodemailer
  - Parameters: `recipientEmail`, `subject`, `body`

## 🎨 Design Features

- **Dark Theme**: Modern dark color scheme
- **Particle Effects**: Interactive background animations
- **Smooth Scrolling**: Enhanced user experience
- **Responsive Design**: Mobile-first approach
- **Custom Scrollbars**: Styled scrollbars for better UX
- **Font Awesome Icons**: Professional iconography
- **Google Fonts**: Typography variety (Comfortaa, Orbitron, Poppins, etc.)

## 📧 Email Configuration

The application uses Gmail SMTP for sending emails. To configure:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Update the credentials in `app.js`

## 🚀 Deployment

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables for email configuration
- Ensure MongoDB connection (if implemented)

### Frontend Deployment
- Build React app: `npm run build`
- Deploy static files to Netlify, Vercel, or similar platforms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Backend: Node.js/Express implementation
- Frontend: HTML/CSS/JavaScript with React integration
- Design: Modern UI/UX with particle effects and animations

## 🔮 Future Enhancements

- [ ] MongoDB integration for data persistence
- [ ] User authentication system
- [ ] Admin panel for event management
- [ ] Real-time notifications
- [ ] Event registration system
- [ ] Image upload functionality
- [ ] Search and filter capabilities

---

**Note**: This is a fullstack project combining traditional web technologies with modern React development for an enhanced user experience. 
